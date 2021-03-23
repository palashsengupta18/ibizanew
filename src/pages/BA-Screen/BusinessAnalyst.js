import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import moment from "moment";
import "react-tabs/style/react-tabs.css";
import "./_BusinessAnalyst.scss";

function BusinessAnalyst() {
  // list of domains
  const [domainApi, setDomainApi] = useState(null);
  // Current domain
  const [currentDomain, setCurrentDomain] = useState("");
  // list of models
  const [models, setModel] = useState([]);
  // Current domain
  const [currentModel, setCurrentModel] = useState("");
  // list of features
  const [features, setFeatures] = useState(null);
  // list of features
  const [predict, setPredict] = useState("");

  // End point base path
  const endpoint = "http://127.0.0.1:8000";

  //Get domain API
  useEffect(() => {
    fetch(`${endpoint}/algorithm/getdomain`, { method: "POST" })
      .then((res) => res.json())
      .then((res) => {
        setDomainApi(res);
      });
  }, []);

  // Get model api
  const getAllModels = (modelData) => {
    fetch(`${endpoint}/algorithm/getmodel`, {
      method: "POST",
      body: JSON.stringify({ userid: "user001", domainID: modelData }),
    })
      .then((res) => res.json())
      .then((res) => {
        setModel(res.details);
      })
      .catch((err) => console.log(err.message));
  };

  // Get features api
  const getAllFeatures = (featureData) => {
    fetch(`${endpoint}/algorithm/getfeature`, {
      method: "POST",
      body: JSON.stringify({ modelid: featureData }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statuscode == 200) {
          setFeatures(res.details);
        }
      })
      .catch((err) => console.log(err.message));
  };

  // Predict api
  const getPredict = () => {
    const predictData = features.feature_list
      .map((item) => item.predictInputValue)
      .filter((item) => item);
    fetch(`${endpoint}/algorithm/getpredictionBA`, {
      method: "POST",
      body: JSON.stringify({ FeatureValues: predictData }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.statuscode == 200) {
          setPredict(res.details);
          console.log(res.details);
        }
      })
      .catch((err) => console.log(err.message));
    // console.log(predictData);
  };

  return (
    <div className="BA__screen--wrapper">
      {/* Dashboard Body */}
      <div className="analytics_content_wrapper">
        <div className="select_domain_models">
          <div className="select_domain_models_wrapper mr-4">
            {/* Select Domain */}
            <select
              name="domain"
              id="selectDomain"
              onChange={(e) => {
                setCurrentDomain(e.target.value);
                getAllModels(e.target.value);
              }}
            >
              <option>Select Domain</option>
              {domainApi &&
                domainApi.details.map((item) => (
                  <option value={item.DomainID} key={item.DomainID}>
                    {item.DomainName}
                  </option>
                ))}
            </select>
          </div>
          <div className="select_domain_models_wrapper">
            {/* Select Models */}
            <select
              name="models"
              id="selectModel"
              onChange={(e) => {
                setCurrentModel(e.target.value);
                getAllFeatures(e.target.value);
              }}
            >
              <option>Select Models</option>
              {models.length &&
                models.map((item) => (
                  <option value={item.ModelId} key={item.ModelId}>
                    {item.Name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap BA__screen_tab--container">
          <div className="BA__screen_tab--wrapper">
            <Tabs>
              <TabList className="ba_screen_tab_wrapper">
                <Tab>Model Description</Tab>
                <Tab>Predict</Tab>
                <Tab>White box Explanation</Tab>
              </TabList>
              {/* Model Description */}
              <TabPanel className="tabpanel_tab">
                <div className="tabpanel_tab_body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </TabPanel>

              {/* Model Prediction */}
              <TabPanel className="tabpanel_tab">
                <div className="tabpanel_tab_body">
                  <div className="predict_var_section">
                    {features && (
                      <div className="predict_var_head">
                        <div className="predict__varhead--content">
                          <span className="predict_var_name">
                            Target <i>{features.target_variable_name}</i>
                          </span>
                        </div>
                        <div className="predict__varhead--content predict_var_head_title">
                          <span className="predict_independent_variables">
                            Independent Variables
                            <i className="variables_count">
                              {features.independent_count}
                            </i>
                          </span>
                        </div>
                      </div>
                    )}
                    <table>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Value</th>
                          <th>Type</th>
                        </tr>
                      </thead>
                      <tbody>
                        {features &&
                          features.feature_list.map((item, index) => (
                            <tr key={item.FeatureName}>
                              <td>{item.FeatureName}</td>
                              <td>
                                <div className="form-group predict_input_value mb-0">
                                  <input
                                    type={
                                      item.FeatureDType == "date"
                                        ? "date"
                                        : "text"
                                    }
                                    className="form-control capture_value_inut"
                                    placeholder={`Enter ${item.FeatureDType}`}
                                    onChange={(e) => {
                                      if (item.FeatureDType == "date") {
                                        // console.log(moment(e.target.value, 'YYYY/MM/DD').unix());
                                        features.feature_list[index][
                                          "predictInputValue"
                                        ] = moment(
                                          e.target.value,
                                          "YYYY/MM/DD"
                                        ).unix();
                                      } else {
                                        features.feature_list[index][
                                          "predictInputValue"
                                        ] = +e.target.value;
                                      }
                                      setFeatures({ ...features });
                                    }}
                                  />
                                </div>
                              </td>
                              <td>{item.FeatureDType}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <div className="bottom_predict_wrapper">
                      <button
                        className="bottom_predict bottom_analutics"
                        onClick={() => {
                          // console.log(features);
                          getPredict();
                        }}
                      >
                        Predict
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>

              {/* White box Explanation */}
              <TabPanel className="tabpanel_tab">
                <div className="tabpanel_tab_body">
                  {predict && (
                    <div className="explanations_wrapper">
                      <p className="mb-1">
                        1. {predict.WhiteBoxExplanation[0].Explanation}
                      </p>
                      <p className="mb-3">
                        2. {predict.WhiteBoxExplanation[1].Explanation}
                      </p>
                      <p className="mb-0">
                        <b>
                          {
                            predict.WhiteBoxExplanation[2].Explanation
                              .Explanation_msg
                          }
                        </b>
                      </p>
                      <div className="mt-2">
                        <table>
                          <thead>
                            <tr>
                              <th>
                                {
                                  predict.WhiteBoxExplanation[2].Explanation
                                    .explanation3_list_header[0]
                                }
                              </th>
                              <th>
                                {
                                  predict.WhiteBoxExplanation[2].Explanation
                                    .explanation3_list_header[1]
                                }
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {predict.WhiteBoxExplanation[2].Explanation.explanation3_list.map((item, expIndex) => (
                              <tr key={expIndex}>
                                <td>{item.index}</td>
                                <td>{item.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </TabPanel>
            </Tabs>
          </div>
          {predict && (
            <div className="BA__screen_prediction--wrapper">
              <div className="prediction_wrapper">
                <h3><b>Prediction Result</b></h3>
                <span className="prediction__value">
                  {predict.model_prediction}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>  
    </div>
  );
}

export default BusinessAnalyst;
