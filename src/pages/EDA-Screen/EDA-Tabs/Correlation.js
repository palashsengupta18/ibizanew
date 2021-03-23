import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Chart from "react-google-charts";
import HeatMap from "react-heatmap-grid";
import "react-tabs/style/react-tabs.css";
import "./Correlaion.scss";

function Correlation() {
  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);

//   const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);
//   const yLabels = ["Sun", "Mon", "Tue"];
//   const data = new Array(yLabels.length)
//     .fill(0)
//     .map(() =>
//       new Array(xLabels.length)
//         .fill(0)
//         .map(() => Math.floor(Math.random() * 20))
//     );

  //Input only numbers
  function allowNumbersOnly(e) {
    let inputValue = e.which ? e.which : e.keyCode;
    if (inputValue > 31 && (inputValue < 48 || inputValue > 57)) {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className="Correlationcom--wrapper">
        <button type="button" className="btn-theme" onClick={handleShow}>
          Top n Correlation
        </button>

        {/* <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} /> */}

        <div className="Correlation__varChart--wrapper" hidden={show}>
          <div className="Correlation__select--var">
            <label>Select n</label>
            <input type="text" onKeyPress={allowNumbersOnly}></input>
          </div>
          <Tabs>
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12 col-12">
                <div className="Correlation__var--list">
                  <div className="var__list--title">
                    <p>Select Variable</p>
                    <div className="var__list--wrapper">
                      <TabList>
                        <Tab>Var 1 (Integer)</Tab>
                        <Tab>Var 2 (Integer)</Tab>
                        <Tab>Var 3 (Integer)</Tab>
                        <Tab>Var 4 (Float)</Tab>
                        <Tab>Var 5 (Float)</Tab>
                      </TabList>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12 col-12">
                <TabPanel>
                  
                </TabPanel>
                <TabPanel>
                  <h2>Content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Content 3</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Content 4</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Content 5</h2>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Correlation;
