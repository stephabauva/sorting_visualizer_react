import SimpleMenu from "./components/Menu"
import InputSlider from "./components/Slider"
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

  const menuList = props.menus.map(menu => (
    <SimpleMenu
    id = {menu.id}
    sort_cat = {menu.sort_cat}
    sort_algo = {menu.sort_algo}
    key = {menu.id}
    />
  ));
  return (
    <div className="App">
      <div className="appName"><h1>Sorting Visualizer</h1></div>
        <div id="topbar">
            <div id="slider-button-container"><InputSlider /></div>
            <div id="menu-container">{menuList}</div>
        </div>
        <div id="visualizer-container"><SortingVisualizer /></div>
    </div>

  );
}

export default App;
