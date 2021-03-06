import Particles from 'react-particles-js';
import particlesConfig from './config/particlesConfig';
// import SimpleMenu from "./components/Menu"
import InputArraySlider from "./components/ArraySlider"
import InputSpeedSlider from "./components/SpeedSlider"
import Explanations from "./components/Explanations"
// import Languages from "./components/displayRawCode" #for future implementation
import SortingVisualizer from "./sortingVisualizer/SortingVisualizer"
import './App.css';
import React from "react";

function App(props) {
  // const [size, setSize] = useState([]);

  // function getArraySize(ArraySize) { //update size so the slider does not move when dom re-renders
  //   const newSize = {ArraySize};
  //   setSize([size, newSize]);
  //   // console.log(newSize.ArraySize);
  // }

  // const menuList = props.menus.map(menu => (
  //   <SimpleMenu
  //   id = {menu.id}
  //   sort_cat = {menu.sort_cat}
  //   sort_algo = {menu.sort_algo}
  //   key = {menu.id}
  //   />
  // ));
  return (
    <div className="App" style={{backgroundcolor: 'turquoise', position: 'relative', overflow: "hidden" }}>
      {/* <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div> */}
      <div className="appName"><h1>Sorting Visualizer</h1></div>
        <div id="topbar">
            <div id="slider-button-container"><InputArraySlider /></div>
            <div id="slider-button-container"><InputSpeedSlider /></div>
            <div id="explanations-block"><Explanations /></div>
        </div>
        <div id="visualizer-container"><SortingVisualizer /></div>
      
    </div>

  );
}

export default App;
