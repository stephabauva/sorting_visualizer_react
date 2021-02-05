import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const SORT_MENUS = [
  {id:"menu_sort_0", sort_cat:"Simple Sorts"},
  {id:"menu_sort_1", sort_cat:"Efficient Sorts"},
  {id:"menu_sort_2", sort_cat:"Bubble Sorts"},
  {id:"menu_sort_4", sort_cat:"Distribution Sorts"},
]

ReactDOM.render(
  <React.StrictMode>
    <App menus={SORT_MENUS}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
