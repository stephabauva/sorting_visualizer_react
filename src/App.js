import SimpleMenu from "./components/Menu"
import GenerateList from "./GenerateList"
import './App.css';

function App(props) {
  const menuList = props.menus.map(menu => (
    <SimpleMenu
    id = {menu.id}
    sort_cat = {menu.sort_cat}
    key = {menu.id}
    />
  ));
  return (
    <div className="App">
      <div className="appName">
        <h1>Sorting Visualizer</h1>
      </div>
        <div id="topbar">
          <GenerateList />
          {menuList}
        </div>
    </div>

  );
}

export default App;
