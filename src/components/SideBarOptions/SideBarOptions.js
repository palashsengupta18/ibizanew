import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

function SideBarOptions({ sideBarOptionsOpen, setSideBarOptionsOpen }) {
  const collapseBtnHandler = (e) => {
    setSideBarOptionsOpen(!sideBarOptionsOpen);
  };
  return (
    <div className="SideBarOptions">
      {sideBarOptionsOpen && (
        <>
          <IconContext.Provider
            value={{
              color: "#2e333a",
              size: "1.5vw",
              className: "sideBarOpt__collapse",
            }}
          >
            <FaArrowCircleLeft onClick={(e) => collapseBtnHandler(e)} />
          </IconContext.Provider>

          <div className="sideBarOpt__search">
            <input type="text" placeholder="Search experiments here..." />
            <IconContext.Provider
              value={{
                color: "#2e333a",
                size: "1.5vw",
                className: "sideBarOpt__search-icon",
              }}
            >
              <BiSearchAlt />
            </IconContext.Provider>
          </div>
        </>
      )}
      {!sideBarOptionsOpen && (
        <>
          <IconContext.Provider
            value={{
              color: "#2e333a",
              size: "1.5vw",
              className: "sideBarOpt__collapse",
            }}
          >
            <FaArrowCircleRight onClick={(e) => collapseBtnHandler(e)} />
          </IconContext.Provider>
        </>
      )}
    </div>
  );
}

export default SideBarOptions;
