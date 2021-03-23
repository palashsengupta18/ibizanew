import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Modal } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import Chart from "react-google-charts";

function Univariate() {
  return (
    <>
      <div className="EDA__tab-body">
        <Tabs>
          <div className="d-flex flex-wrap univariate__tab--wrapper">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12 pl-0 univariate__tabList--wrapper">
              <TabList className="univariate__tabList">
                <Tab>Var 1 (Integer)</Tab>
                <Tab>Var 2 (Object)</Tab>
              </TabList>
            </div>
            <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12 col-12 univariate__tabPanel--wrapper">
              <TabPanel className="univariate__tabPanel">
                <div className="d-flex flex-wrap ai-center">
                  <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 pr-4">
                    <div style={{ display: "flex", maxWidth: 900 }}>
                      <Chart
                        width={500}
                        height={500}
                        chartType="Bar"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ["Missing Values(%)", "Percentage"],
                          ["Age", 19.64],
                          ["Cabin", 77.1],
                          ["Embarked", 33.22],
                        ]}
                        options={{
                          chart: {
                            title: "Data Completeness",
                          },
                          chartArea: { width: "80%" },
                          legend: { position: "none" },
                        }}
                        legendToggle
                      />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pl-4">
                    <div className="univariate__variable--details">
                      <p>Count:&nbsp;&nbsp;&nbsp;2500</p>
                      <p>Min:&nbsp;&nbsp;&nbsp;56</p>
                      <p>Max:&nbsp;&nbsp;&nbsp;1456</p>
                      <p>Mean:&nbsp;&nbsp;&nbsp;345</p>
                      <p>Median:&nbsp;&nbsp;&nbsp;367</p>
                      <p>1st Qu:&nbsp;&nbsp;&nbsp;</p>
                      <p>2nd Qu:&nbsp;&nbsp;&nbsp;</p>
                      <p>3rd Qu:&nbsp;&nbsp;&nbsp;</p>
                      <p>Skewness:&nbsp;&nbsp;&nbsp;</p>
                      <p>Kurtosis:&nbsp;&nbsp;&nbsp;</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel className="univariate__tabPanel">
                <div className="d-flex flex-wrap ai-center">
                  <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 pr-4">
                    <div style={{ display: "flex", maxWidth: 900 }}>
                      <Chart
                        width={500}
                        height={500}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ["Element", "Density", { role: "style" }],
                          ["Apple", 35, "#ef2929"],
                          ["Orange", 30, "#f57900"],
                          ["Banana", 10, "#ffe135"],
                          ["Kiwifruit", 25, "color: #73d216"],
                          ["Blueberry", 40, "color: #729fcf"],
                          ["Grapes", 5, "color: #5c3566"],
                        ]}
                        options={{
                          title: "Nicest Fruit",
                          chartArea: { width: "80%" },
                          vAxis: {
                            title: "Number of people",
                          },
                          legend: { position: "none" },
                        }}
                        legendToggle
                      />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 pl-4">
                    <div className="univariate__variable--details">
                      <p>Count:&nbsp;&nbsp;&nbsp;2500</p>
                      <p>Mode:&nbsp;&nbsp;&nbsp;Level 2</p>
                      <p>Level:&nbsp;&nbsp;&nbsp;500</p>
                      <p>Level:&nbsp;&nbsp;&nbsp;700</p>
                      <p>Level:&nbsp;&nbsp;&nbsp;1200</p>
                      <p>NA:&nbsp;&nbsp;&nbsp;100</p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default Univariate;
