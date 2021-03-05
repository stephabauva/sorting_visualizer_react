import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from "react-redux";

// const SORT_MENUS = [
//   {id:"menu_sort_0", sort_cat:"Simple Sorts", sort_algo:["Insertion Sort", "Selection Sort"]},
//   {id:"menu_sort_1", sort_cat:"Efficient Sorts", sort_algo:["Merge Sort", "Heapsort", "Quicksort", "Shellsort"]},
//   {id:"menu_sort_2", sort_cat:"Bubble Sorts", sort_algo: ["Bubble sort", "Comb sort"]},
//   {id:"menu_sort_4", sort_cat:"Distribution Sorts", sort_algo:["Counting sort", "Bucket sort", "Radix sort"]},
// ]

ReactDOM.render(
  <Provider store={store}>
      {/* <App menus={SORT_MENUS}/>, */}
      <App />,
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
