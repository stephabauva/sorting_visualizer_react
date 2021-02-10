import store from '../store';
import React, { useState } from "react";
import './SortingVisualizer.css';
import { connect } from 'react-redux';

{/****** SUBSCRIBE(listener) ******/}
// subscribe(listener) -> Adds a change listener:
// It will be called any time an action is dispatched, and some 
// part of the state tree may potentially have changed.
//Link: https://redux.js.org/api/store#subscribelistener

// function select(state) {
//     return state
// }

// function handleChange() {
//     const currentValue = select(store.getState().listState);
//     // console.log('handleChange:',currentValue)
//     return SortingVisualizer(currentValue);
//     }

// const unsubscribe = store.subscribe(handleChange);
// unsubscribe()

{/************************************/}

const mapStateToProps = (state) => {
    // console.log('slider state:',state);
    console.log('viz mapStateToProps:',state.listState);
    return { listState: state.listState };
    
  };

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { array: [] };
        console.log('thisarray:', this.array);
      }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listState !== this.props.listState) {
            // Do whatever you want
            console.log('prevProps.listState:',prevProps.listState);
            console.log('this.props.listState:',this.props.listState);
            this.setState({ array: this.props.listState });
            
        }
    }
    
    render() {
        return <div>{this.state.array}hey</div> ;
    } 
    // const generatedList = unsubscribe
    // had error: generatedList.map is not a function
    // so I pushed all items of the object generatedList into a new empty list 
   
    // const array = [];
   
    // const resetArray = () => {
    //     for (let i = 0; i < generatedList.length; i++) {
    //         array.push(generatedList[i]);
    // }}
    // resetArray();
    // console.log('array:',array);

    // console.log('generatedList:',generatedList);
    // console.log('is array:',Array.isArray(generatedList));
    // {/****************************************** */}
    // return (
    // <div className="array-container">
    //   </div>
    // );
}

export default connect(mapStateToProps)(SortingVisualizer);