import store from '../store';
import React, { useState } from "react";

{/****** SUBSCRIBE(listener) ******/}
// subscribe(listener) -> Adds a change listener:
// It will be called any time an action is dispatched, and some 
// part of the state tree may potentially have changed.
//Link: https://redux.js.org/api/store#subscribelistener
function select(state) {
    return state
}

function handleChange() {
    const currentValue = select(store.getState().listState);
    // console.log('handleChange:',currentValue)
    return SortingVisualizer(currentValue);
    }

const unsubscribe = store.subscribe(handleChange)
// unsubscribe()

{/************************************/}

export default function SortingVisualizer(unsubscribe) {
    const generatedList = unsubscribe
        
        // const generatedList = unsubscribe;
    console.log('generatedList:',generatedList);
    return (<div>TEST</div>);
}


  
  