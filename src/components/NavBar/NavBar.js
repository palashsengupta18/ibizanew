import React from "react";
import { IconContext } from "react-icons";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsPlayFill, BsTable } from "react-icons/bs";
function NavBar({ sideBarOpen, setSideBarOpen }) {
  const sideMenuOpenHandler = () => {
    // document
    //   .getElementsByClassName("SideBar")[0]
    //   .classList.toggle("sidebar__show");
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <div className="NavBar">
      <div className="navBar__left">
        <IconContext.Provider
          value={{
            color: "#fff",
            size: "1.7vw",
            className: "navBar__sidenav-btn",
          }}
        >
          <>
            <HiMenuAlt2 onClick={sideMenuOpenHandler} />
          </>
        </IconContext.Provider>

        <h1>IBIZA Machine Learning Studio</h1>
      </div>
      <div className="navBar__right">
        <IconContext.Provider
          value={{
            color: "#2e333a",
            size: "1.2vw",
            className: "navBar__btn",
          }}
        >
          <button>
            <BsPlayFill />
            <span>Run</span>
          </button>
          <button>
            <BsTable />
            <span>Visualize</span>
          </button>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default NavBar;
