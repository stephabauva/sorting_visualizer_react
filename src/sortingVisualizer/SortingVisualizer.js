import store from '../store';
import React, { useState } from "react";

function select(state) {
    return state
}

function handleChange() {
    const currentValue = select(store.getState().listState);
    console.log('GL:',currentValue)
    return SortingVisualizer(currentValue);
    }

const unsubscribe = store.subscribe(handleChange)
// unsubscribe()

export default function SortingVisualizer(unsubscribe) {
    const generatedList = unsubscribe
        
        // const generatedList = unsubscribe;
    console.log('generatedList:',generatedList);
    return (<div>TEST</div>);
}


  
  