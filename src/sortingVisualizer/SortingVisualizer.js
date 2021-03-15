import React from "react";
import { connect } from 'react-redux';
import './SortingVisualizer.css';


import { doMergeSort } from '../sortingAlgorithms/MergeSort'
import { doQuickSort } from '../sortingAlgorithms/QuickSort'
import { doBubbleSort } from '../sortingAlgorithms/BubbleSort'
import { doInsertionSort } from '../sortingAlgorithms/InsertionSort'

import Particles from 'react-particles-js';
import particlesConfig from '../config/particlesConfig';

/* ***** making this component check if an element of the store has changed ******
links:
https://stackoverflow.com/questions/36557089/how-to-listen-for-specific-property-changes-in-redux-store-after-an-action-is-di
https://stackoverflow.com/questions/36557089/how-to-listen-for-specific-property-changes-in-redux-store-after-an-action-is-di 

*********************************** */

const mapStateToProps = (...args) => { // the store is accessible because we added Provider in index.js
    return { 
        myStoredList: args[0]['listReducer']['listState'], 
        initialSortingSpeed: args[0]['sortSpeedReducer']['niceSpeed'],
        myStoredSpeed: args[0]['sortSpeedReducer']['sortSpeed'] 
    };
  };

//  This is the main colors of the array bars.
const INIT_COLOR = 'turquoise';
const RED_COLOR = 'red';
const SELECT_COLOR = '#f5bf42';
var SWAP_COLOR, OVERWRITTE_COLOR;
SWAP_COLOR = OVERWRITTE_COLOR = '#8000ff';
const FINAL_SORTED_COLOR = '#7dff84';
let ANIMATION_SPEED_MS = "";

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { array: [], speed: ''};
      }
    /* compare previous list in store to the new actual list generated */
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.myStoredList !== this.props.myStoredList) {
            this.setState({ array: this.props.myStoredList });
        }
        //if the speed slider was not moved (myStoredSpeed is undefined), just use the default value (35 in SpeedReducer.js)
        if (! ANIMATION_SPEED_MS) {
            ANIMATION_SPEED_MS = prevProps.initialSortingSpeed ;
        }    
        //if the slider was moved then use the current new speed slider value
        if (prevProps.myStoredSpeed !== this.props.myStoredSpeed) {
            ANIMATION_SPEED_MS = this.props.myStoredSpeed 
        }
    }
    /* ************************************************************ */
//to execute function asynchronously (async + await + new Promise + setTimout), link: https://dev.to/jameseaster/visualizing-merge-sort-3mnc
    async mergeSort() {
        const animations = doMergeSort(this.state.array) 
        let endViz = 0;
        for (let i = 0; i < animations.length; i++) {

            const arrayBars = document.getElementsByClassName('array-bar'); // get the array generated
            const isColorChange = i % 3 !== 2; //if remainder !== 2, then i is one of the two grad-and-color subarrays (not the overwritting one, the 3rd subarray)
            if (isColorChange) { //if True
                //then grab the 2 indices of the subarray
                const [barOneIdx, barTwoIdx] = animations[i]; // [idx list1 of the item that was compared with, item at idx list2]
                // get the style at these two indices
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                // if i is a multiple of 3, change the color (secondary), otherwise let its primary color
                const color = i % 3 === 0 ? RED_COLOR : INIT_COLOR;
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
                endViz++;
                await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
            } else {
                //meaning if the remainder of i/3 === 2, then i is the subarray used for the overwritting 
                const [barOneIdx, newHeight] = animations[i]; // -> [idx to be overwritten, overwritting value], 
                arrayBars[barOneIdx].style.backgroundColor = OVERWRITTE_COLOR;
                arrayBars[barOneIdx].style.height = `${newHeight}px`; 
                await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                arrayBars[barOneIdx].style.backgroundColor = INIT_COLOR;
                await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                endViz++;
            }
        } 

        if (endViz === animations.length ) {
            this.finalViz();
        }
    }

    async quickSort() {
        const animations = doQuickSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar'); 
            if (animations[i].length === 2) {
                const [_, pivotIdx] =  animations[i];
                const barPivotStyle = arrayBars[pivotIdx].style;
                barPivotStyle.backgroundColor = RED_COLOR;
                await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
            } else {
            const [command, barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            switch(command) {
                case -2:
                    barOneStyle.backgroundColor = SWAP_COLOR;
                    barTwoStyle.backgroundColor = SWAP_COLOR;
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    const temp = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = temp;
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    // await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                  break;
                case -3:
                    barOneStyle.backgroundColor = INIT_COLOR;
                    barTwoStyle.backgroundColor = INIT_COLOR;
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    // await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break
                default:
                    barOneStyle.backgroundColor = INIT_COLOR;
                    barTwoStyle.backgroundColor = INIT_COLOR;
              }
            }
            
              if (i === animations.length-1 ) {
                this.finalViz();
            }
        }
    }

    async bubbleSort() {
        const animations = doBubbleSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar'); 
            const [command, barOneIdx, barTwoIdx] = animations[i];
            if (barTwoIdx === arrayBars.length) {
                continue;
            }
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            switch(command) {
                case 0: 
                    barOneStyle.backgroundColor = INIT_COLOR;
                    barTwoStyle.backgroundColor = INIT_COLOR;
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                case 1:
                    barOneStyle.backgroundColor = RED_COLOR;
                    barTwoStyle.backgroundColor = RED_COLOR;
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                case 2:
                    arrayBars[barOneIdx].style.backgroundColor = OVERWRITTE_COLOR;
                    arrayBars[barTwoIdx].style.backgroundColor = OVERWRITTE_COLOR;
                    const temp = barOneStyle.height;
                    barOneStyle.height = barTwoStyle.height;
                    barTwoStyle.height = temp;
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                default:
                    barOneStyle.backgroundColor = INIT_COLOR;
                    barTwoStyle.backgroundColor = INIT_COLOR;
            };
            if (i === animations.length-1 ) {
                this.finalViz();
            }
        };
    }

    async insertionSort() {
        const animations = doInsertionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar'); 
            switch(animations[i][0]) {
                case 0:
                    const keyIdxInit = animations[i][1];
                    const barOneStyleInit = arrayBars[keyIdxInit].style;
                    barOneStyleInit.backgroundColor= INIT_COLOR; 
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                case 1:
                    const keyIdxOne = animations[i][1];
                    const barOneStyleOne = arrayBars[keyIdxOne].style;
                    barOneStyleOne.backgroundColor= RED_COLOR; 
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                case 2:
                    const barIdxTwo = animations[i][1];
                    const barOneStyleTwo = arrayBars[barIdxTwo].style;
                    barOneStyleTwo.backgroundColor= SELECT_COLOR; 
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                case 3:
                    const barIdxThree = animations[i][1];
                    const barOneStyleThree = arrayBars[barIdxThree].style;
                    barOneStyleThree.backgroundColor= OVERWRITTE_COLOR; 
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                case 4:
                    const [_, barOneIdx, key] = animations[i];
                    const barOneStyle4 = arrayBars[barOneIdx].style;
                    barOneStyle4.height = `${key}px`;
                    await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
                    break;
                default:
                } 
                if (i === animations.length-1 ) {
                    this.finalViz();
                }   
            }
          
        }
    
    //finally, colors the sorted list in green
  async finalViz() {
        const arrayBars = document.getElementsByClassName('array-bar');
            for (let f=0; f<arrayBars.length; f++) {
                const barStyle = arrayBars[f].style;
                barStyle.backgroundColor = FINAL_SORTED_COLOR;
                await new Promise((resolve) => setTimeout(resolve, ANIMATION_SPEED_MS));
            } 
            await new Promise((resolve) => setTimeout(resolve, 800));
            for (let f = arrayBars.length-1; f >= 0; f--) {
                const barStyle = arrayBars[f].style;
                barStyle.backgroundColor = INIT_COLOR;
                await new Promise((resolve) => setTimeout(resolve, 20));
            } 
   }; 
  
    render() {
        return <div className='array-container'>
            <div className='buttons-container'>
                <button className="sort-button" style={{backgroundColor:"#b5ff87"}} onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className="sort-button" style={{backgroundColor:"#ffdf87"}} onClick={() => this.quickSort()}>Quick Sort</button>
                <button className="sort-button" style={{backgroundColor:"#87fff9"}}onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button className="sort-button" style={{backgroundColor:"#ff8787"}}onClick={() => this.insertionSort()}>Insertion Sort</button>
            </div>
            <div style={{position: 'absolute'}}>
                <Particles height="65vh" width="100vw" params={particlesConfig} />
            </div>
            {this.state.array.map((value, idx) => (
                <div
                className="array-bar"
                key={idx}
                style={{
                    backgroundColor: INIT_COLOR,
                    height: `${value}px`,
                    width: `${(1.5/3)*window.innerWidth/this.state.array.length}px`,
                    marginTop: `${50}px`,
                }}></div>
            ))}
        </div> ;
    }; 
}


export default connect(mapStateToProps)(SortingVisualizer);