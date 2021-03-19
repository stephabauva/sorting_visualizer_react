import InputArraySlider from "./components/ArraySlider"
import InputSpeedSlider from "./components/SpeedSlider"
import Explanations from "./components/Explanations"
import SortingVisualizer from "./sortingVisualizer/SortingVisualizer"
import './App.css';
import React from "react";
import {Helmet} from 'react-helmet';

function App(props) {
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: white; }'}</style>
      </Helmet>
      <div className="appName"><h1>▲◀︎▲▼► Sorting Visualizer ▷▷▷▷▷ </h1></div>
        <div id="topbar">
          <div id="explanations-block"><Explanations /></div>
            <div id="slider-button-container"><InputArraySlider /></div>
            <div id="slider-button-container"><InputSpeedSlider /></div>
        </div>
        <div id="visualizer-container"><SortingVisualizer /></div>
    </div>

  );
}

export default App;
