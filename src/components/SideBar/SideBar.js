import React from "react";
import { IconContext } from "react-icons";
import { AiTwotoneExperiment } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdSettings } from "react-icons/md";

function SideBar({ sideBarOpen, setSideBarOpen }) {
  return (
    // <div className="SideBar ">
    <div className={sideBarOpen ? "SideBar sidebar__show" : "SideBar"}>
      <div className="sideBar__items-container ">
        <IconContext.Provider
          value={{
            color: "#fff",
            size: "2.5vw",
            className: "sideBar__item-logo",
          }}
        >
            <div className="sideBar__item">
              <FaProjectDiagram />
              <span>Projects</span>
            </div>
            <div className="sideBar__item">
              <AiTwotoneExperiment />
              <span>Experiments</span>
            </div>
            <div className="sideBar__item">
              <AiOutlineFileSearch />
              <span>EDA</span>
            </div>
            <div className="sideBar__item">
              <FaDatabase />
              <span>DataSets</span>
            </div>
            <div className="sideBar__item">
              <BsFillCollectionFill />
              <span>Models</span>
            </div>
            <div className="sideBar__item">
              <MdSettings />
              <span>Settings</span>
            </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default SideBar;
