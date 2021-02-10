import React from "react";
import './SortingVisualizer.css';
import { connect } from 'react-redux';
import { doMergeSort } from '../sortingAlgorithms/SortingAlgorithms'

/* ***** making this component check ig an element of the store has changed ******
links:
https://stackoverflow.com/questions/36557089/how-to-listen-for-specific-property-changes-in-redux-store-after-an-action-is-di
https://stackoverflow.com/questions/36557089/how-to-listen-for-specific-property-changes-in-redux-store-after-an-action-is-di 

*********************************** */

const mapStateToProps = (state) => { // the store is accessible because we added Provider in index.js
    console.log('SortingViz mapStateToProps:',state.listState);
    return { myStoredList: state.listState };
    
  };

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { array: [] };
        console.log('this.array:', this.state.array);
      }
    /* compare previous list in store to the new actual list generated */
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('prevprops:', prevProps); // -> { myStoredList: Array(..), dispatch: f }
        // console.log('this.props:', this.props);
        if (prevProps.myStoredList !== this.props.myStoredList) {
            // Do whatever you want
            // console.log('previous list:',prevProps.lmyStoredList);
            // console.log('actual list:',this.props.myStoredList);
            this.setState({ array: this.props.myStoredList });
            
        }
    }
    /* ************************************************************ */

    mergeSort() {
        const animation = doMergeSort(this.state.array) 
        console.log(animation);

    }
    
    render() {
        return <div className='array-container'>
            {this.state.array.map((value, idx) => (
                <div
                className="array-bar"
                key={idx}
                style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                }}></div>
            ))}
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
        </div> ;
    }; 
}


export default connect(mapStateToProps)(SortingVisualizer);