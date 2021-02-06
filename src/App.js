import SimpleMenu from "./components/Menu"
import GenerateList from "./GenerateList"
import InputSlider from "./slider"
import './App.css';
import React, { useState } from "react";

function App(props) {
  const [size, setSize] = useState(0);
  console.log(size);

  function getArraySize(ArraySize) {
    const newSize = {ArraySize};
  //   setSize(newSize);
    console.log(newSize);
  }

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
      <div className="appName">
        <h1>Sorting Visualizer</h1>
      </div>
        <div id="topbar">
            <div id="slider-button-container">
            <InputSlider getArraySize={getArraySize}/>
            <GenerateList />
          </div>
          {menuList}
        </div>
    </div>

  );
}

export default App;
