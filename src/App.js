import { useState } from "react";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import SideBarOptions from "./components/SideBarOptions/SideBarOptions";
import Home from "./pages/Home/Home";

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [sideBarOptionsOpen, setSideBarOptionsOpen] = useState(true);
  return (
    <div className="App">
      <NavBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div className="app-horizontal">
        {/* <div className="app-sidebar-container"> */}
        <div
          className={
            sideBarOpen
              ? "app-sidebar-container sidebar_show_app"
              : "app-sidebar-container"
          }
        >
          <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
          <SideBarOptions
            sideBarOpen={sideBarOpen}
            setSideBarOpen={setSideBarOpen}
            sideBarOptionsOpen={sideBarOptionsOpen}
            setSideBarOptionsOpen={setSideBarOptionsOpen}
          />
        </div>
        <Home/>
      </div>
    </div>
  );
}
// sidebar_show
export default App;
