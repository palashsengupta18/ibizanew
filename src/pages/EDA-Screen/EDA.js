import React, { useEffect, useState, Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Correlation from './EDA-Tabs/Correlation';
import SummaryAnalysis from './EDA-Tabs/SummaryAnalysis';
import Univariate from './EDA-Tabs/Univariate';
import Bivariate from './EDA-Tabs/Bivariate';
import "react-tabs/style/react-tabs.css";
import "./EDA.scss";

function EDA() {
  
  // Dataset upload file input function
  function getUploadFile() {
    const uploadFileName = document.getElementById("filename");
    const filepath = document.getElementById("file-upload").value;
    const matchFilePath = filepath.match(/([^\/\\]+)$/);
    const filename = matchFilePath[1];
    uploadFileName.innerHTML = filename;
  }


  // function toggleIcon() {
  //   let targetColumn = document.getElementById("show__taeget--column2");
  //   let element = document.getElementById("toggleIcon");
  //   if (targetColumn.style.display === "block") {
  //     targetColumn.style.display = "none";
  //     element.classList.add("fa-plus");
  //     element.classList.remove("fa-minus");
  //   } else {
  //     targetColumn.style.display = "block";
  //     element.classList.remove("fa-plus");
  //     element.classList.add("fa-minus");
  //   }
  // }

  return (
    <div className="EDA__screen_tab--wrapper mt-3">
      <div className="EDA__upload-Dataset">

        {/* Upload Dataset */}
        <form method="" action="" className="datasetUploadForm">
          <span id="filename">Select your file</span>
          <label htmlFor="file-upload" onChange={getUploadFile}>
            <AiOutlineCloudUpload className="fileUploadIcon" />
            Load Dataset
            <input type="file" id="file-upload" />
          </label>
        </form>
        
      </div>
      <Tabs>
        <TabList className="ba_screen_tab_wrapper">
          <Tab>Summary Analysis</Tab>
          <Tab>Univariate</Tab>
          <Tab>Bivariate</Tab>
          <Tab>Correlation</Tab>
          <Tab>Missing Value</Tab>
          <Tab>Outlier</Tab>
          <Tab>Transformation</Tab>
          <Tab>DIY</Tab>
        </TabList>

        {/* Summary Analysis */}
        <TabPanel className="EDA__tabpanel-tab">
           <SummaryAnalysis />
        </TabPanel>
        {/* Univariate */}
        <TabPanel className="EDA__tabpanel-tab">
          <Univariate />
        </TabPanel>
        {/* Bivariate */}
        <TabPanel className="EDA__tabpanel-tab">
          <Bivariate />
        </TabPanel>
        <TabPanel className="EDA__tabpanel-tab">
          <div className="EDA__tab-body">
            <Correlation />
          </div>
        </TabPanel>
        <TabPanel className="EDA__tabpanel-tab">
          <div className="EDA__tab-body">
            <h2>Missing Value</h2>
          </div>
        </TabPanel>
        <TabPanel className="EDA__tabpanel-tab">
          <div className="EDA__tab-body">
            <h2>Outlier</h2>
          </div>
        </TabPanel>
        <TabPanel className="EDA__tabpanel-tab">
          <div className="EDA__tab-body">
            <h2>Transformation</h2>
          </div>
        </TabPanel>
        <TabPanel className="EDA__tabpanel-tab">
          <div className="EDA__tab-body">
            <h2>DIY</h2>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default EDA;
