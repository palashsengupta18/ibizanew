import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Chart from "react-google-charts";

function Bivariate() {
  return (
    <>
      <div className="EDA__tab-body">
        <div className="EDA__tab-body p-responsive">
          <Tabs className="">
            <div className="d-flex flex-wrap univariate__tab--wrapper">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12 pl-0 univariate__tabList--wrapper">
                <div className="d-flex flex wrap">
                  <div className="col-12 p-0 mb-4">
                    <TabList className="univariate__tabList">
                      <Tab>Var 1 (Integer)</Tab>
                      <Tab>Var 2 (Object)</Tab>
                    </TabList>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12 col-12 univariate__tabPanel--wrapper">
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
              </div>
            </div>
          </Tabs>
          <Tabs>
            <div className="d-flex flex-wrap univariate__tab--wrapper">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12 col-12 pl-0 univariate__tabList--wrapper">
                <div className="d-flex flex wrap">
                  <div className="col-12 p-0 mb-4">
                    <TabList className="univariate__tabList">
                      <Tab>Var 1 (Float)</Tab>
                      <Tab>Var 2 (Object)</Tab>
                    </TabList>
                  </div>
                </div>
              </div>
              <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12 col-12 univariate__tabPanel--wrapper bivariate__tabPanel">
                <TabPanel className="univariate__tabPanel">
                  <div className="EDA__tab--body">
                    <div className="d-flex flex-wrap">
                      <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                        <Chart
                          width={"450px"}
                          height={"350px"}
                          chartType="ScatterChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ["Age", "Weight"],
                            [8, 12],
                            [4, 5.5],
                            [11, 14],
                            [4, 5],
                            [3, 3.5],
                            [6.5, 7],
                            [8, 9],
                            [9, 11],
                            [10, 12],
                            [11, 10],
                          ]}
                          options={{
                            title: "Age vs. Weight comparison",
                            hAxis: {
                              title: "Age",
                              minValue: 0,
                              maxValue: 15,
                            },
                            vAxis: {
                              title: "Weight",
                              minValue: 0,
                              maxValue: 15,
                            },
                            legend: "none",
                          }}
                          rootProps={{ "data-testid": "1" }}
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                        <Chart
                          width={"450px"}
                          height={"350px"}
                          chartType="LineChart"
                          loader={<div>Loading Chart</div>}
                          data={[
                            ["x", ""],
                            [0, 0],
                            [1, 10],
                            [2, 23],
                            [3, 17],
                            [4, 18],
                            [5, 9],
                            [6, 11],
                            [7, 27],
                            [8, 33],
                            [9, 40],
                            [10, 32],
                            [11, 35],
                          ]}
                          options={{
                            hAxis: {
                              title: "Time",
                            },
                          }}
                          rootProps={{ "data-testid": "1" }}
                        />
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="univariate__tabPanel">
                  <div className="col-xl-12 col-12"></div>
                  <div className="col-xl-12 col-12"></div>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Bivariate;
