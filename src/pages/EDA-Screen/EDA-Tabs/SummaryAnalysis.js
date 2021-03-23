import React, { useEffect, useState, Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Button, Modal } from "react-bootstrap";
import "react-tabs/style/react-tabs.css";
import Chart from "react-google-charts";
import uuid from "react-uuid";
import { Boxplot, computeBoxplotStats } from "react-boxplot";

function SummaryAnalysis() {
  const values = [5, 10, 16, 17, 18, 20, 32];

  // list of toplefblock
  const [DataSummary, setDataSummary] = useState(null);

  // Toggle Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // End point base path
  const endpoint = "http://127.0.0.1:8000";

  //Get domain API
  useEffect(() => {
    fetch(`${endpoint}/algorithm/get-eda-summery`, { method: "POST" })
      .then((res) => res.json())
      .then((res) => {
        if (res.statuscode == 200) {
          setDataSummary(res.details);
          console.log(res.details);
        }
      });
  }, []);

  return (
    <>
      <div className="EDA__tab-body">
        <div className="d-flex flex-wrap">
          <div className="col-12 pl-0">
            <p className="EDA__com_title">Data Summary</p>
          </div>
          <div className="col-xl-6 col-sm-12 col-12 pl-0 mb-4">
            <div className="EDA__com_body bg-white">
              {DataSummary && (
                <p>
                  <b>Filename:</b> {DataSummary.file_name}
                </p>
              )}
              <div className="d-flex flex-wrap">
                <div className="col-xl-6 col-6 p-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-xl-12 col-12 p-0">
                      <b>Number of Rows:</b>
                    </div>
                    <div className="col-xl-12 col-12 p-0">
                      <b>Number of Columns:</b>
                    </div>
                    <div className="col-xl-12 col-12 p-0">
                      <b>File Size:</b>
                    </div>
                    <div className="col-xl-12 col-12 p-0">
                      <b>Average Row Size:</b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-6 p-0">
                  {DataSummary &&
                    DataSummary.top_left_block.map((item, index) => (
                      <div className="d-flex flex-wrap">
                        <div className="col-xl-12 col-12 p-0">
                          <span key={index}>{item.value}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12 col-12 pr-0 mb-4">
            <div className="EDA__com_body bg-white">
              <p>
                <b>Column Type Counts </b>
              </p>
              <div className="d-flex flex-wrap">
                <div className="col-xl-6 col-6 p-0">
                  <div className="d-flex flex-wrap">
                    <div className="col-xl-12 col-12 p-0">
                      <b>Integer :</b>
                    </div>
                    <div className="col-xl-12 col-12 p-0">
                      <b>Float:</b>
                    </div>
                    <div className="col-xl-12 col-12 p-0">
                      <b>Object:</b>
                    </div>
                    <div className="col-xl-12 col-12 p-0">
                      <b>Datetime:</b>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-6 p-0">
                  {DataSummary &&
                    DataSummary.top_right_block.map((item, index) => (
                      <div className="d-flex flex-wrap">
                        <div className="col-xl-12 col-12 p-0">
                          <span key={index}>{item.value}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="col-12 pl-0">
            <p className="EDA__com_title">Missing Values Summary</p>
          </div>
          <div className="d-flex flex-wrap EDA__com_body bg-white">
            <div className="col-xl-6 col-sm-12 col-12 pl-0 pr-4">
              <div className="" style={{ minHeight: 340 }}>
                <div className="d-flex flex-wrap mt-4">
                  <ul className="pl-3">
                    {DataSummary &&
                      DataSummary.missing_value_summery.map((item, index) => (
                        <li className="mb-1" key={index}>
                          {item.summery}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-12 pr-0 pl-4">
              <div className="">
                <div className="expand__chart p-responsive">
                  <Button className="btn-expand" onClick={handleShow}>
                    Expand
                  </Button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    dialogClassName="item__MRP--modal_expand"
                  >
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>
                      <div className="d-flex jc-center">
                        {DataSummary && (
                          <Chart
                            width={"700px"}
                            height={"500px"}
                            chartType="Bar"
                            loader={<div>Loading Chart</div>}
                            data={DataSummary.barchartdata}
                            options={{
                              // Material design options
                              chart: {
                                title: "Data Completeness",
                              },
                            }}
                          />
                        )}
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
                <div className="eda__chart--wrapper">
                  {DataSummary && (
                    <Chart
                      width={"500px"}
                      height={"300px"}
                      chartType="Bar"
                      loader={
                        <div className="loading">
                          <div className="loading-1"></div>
                          <div className="loading-2"></div>
                          <div className="loading-3"></div>
                          <div className="loading-4"></div>
                        </div>
                      }
                      data={DataSummary.barchartdata}
                      // data={[
                      //    ["", "Age", "Cabin", "Embarked", "test"],
                      //    ["Missing Value (%)", 19.64, 77.1, 0.22, 50.5]
                      // ]}
                      options={{
                        // Material design options
                        chart: {
                          title: "Data Completeness",
                        },
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Boxplot
                    width={400}
                    height={20}
                    orientation="horizontal"
                    min={0}
                    max={30}
                    stats={computeBoxplotStats(values)}
                  /> */}
      </div>
    </>
  );
}

export default SummaryAnalysis;
