import SimpleMenu from "./components/Menu"
import InputArraySlider from "./components/ArraySlider"
import InputSpeedSlider from "./components/SpeedSlider"
// import ResetButton from "./components/ResetButton"
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
    <div className="App">
      <div className="appName"><h1>Sorting Visualizer</h1></div>
        <div id="topbar">
            <div id="slider-button-container"><InputArraySlider /></div>
            {/* <div id="slider-button-container"><ResetButton /></div> */}
            <div id="slider-button-container"><InputSpeedSlider /></div>
            {/* <div id="menu-container">{menuList}</div> */}
        </div>
        {/* <div id="languages-container"><Languages /></div> #for future implementation */}
        <div id="visualizer-container"><SortingVisualizer /></div>
    </div>

  );
}

export default App;
