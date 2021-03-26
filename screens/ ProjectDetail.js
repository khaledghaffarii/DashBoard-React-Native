import React, { useState, useEffect } from "react";
import { Block, Input } from "../components";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavigation, TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Button, Card, Text } from "react-native-elements";
import { PieChart } from "react-native-chart-kit";
import { VictoryChart, VictoryBar } from "../Victory";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DataTable } from "react-native-paper";
import { VictoryLegend } from "victory-legend";
import { VictoryGroup } from "victory-group";
// import { LineChart } from "react-native-line-chart";

import { LineChart, Path, Grid, XAxis, YAxis } from "react-native-svg-charts";
const ProjectDetail = (props) => {
  const navigation = props.navigation;
  const { state } = props.navigation;

  //console.log("Title " + state.params.user, "ProjectKey: " + state.params.key);

  /////////////////// Diver Constant  /////////////////////////////
  //console.log(state.params.UpdatedDate);

  const UpdatedDate = state.params.UpdatedDate;
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "white",
    fillShadowGradient: "green",
    fillShadowGradientOpacity: 2,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 15) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 6,
    barPercentage: 1.2,
    useShadowColorFromDataset: false,
  };
  ////////////////////////// construction  //////////////////////////////////////////////////////////////
  const [dataType, setDataType] = useState("");

  //console.log(dataType);
  //////////////////////////////////// M  D  R  ///////////////////////////////////////////////////////////

  //////////// IFR //////////////
  ////length
  const [dateIfrAct, setDateIfrAct] = useState("");
  const [dateIfrPl, setDateIfrPl] = useState("");
  /////date
  const [IfrAct, setIfrAct] = useState("");
  const [IfrPl, setIfrPl] = useState("");
  //console.log(dateIfrPl);

  const axesSvg = { fontSize: 10, fill: "grey" };
  const verticalContentInset = { top: 10, bottom: 10 };
  const xAxisHeight = 30;
  const dataIFR = {
    planned: [{ x: " ", y: dateIfrPl }],
    actual: [{ x: " ", y: dateIfrAct }],
  };
  const IFRdata = [
    {
      name: "Current",
      population: dateIfrAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateIfrPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  //////////////////  IFA ///////////////////////

  const [dateIfaPl, setDateIfaPl] = useState("");
  const [dateIfaAct, setDateIfaAct] = useState("");

  // console.table(dateIfaPl, dateIfaAct);
  const dataIFA = {
    planned: [{ x: " ", y: dateIfaPl }],
    actual: [{ x: " ", y: dateIfaAct }],
  };
  const IFAdata = [
    {
      name: "Current",
      population: dateIfaAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateIfaPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  ////////////////////  IFC   /////////////////////

  const [dateIfcAct, setDateIfcAct] = useState("");
  const [dateIfcPl, setDateIfcPl] = useState("");

  const dataIFC = {
    planned: [{ x: " ", y: dateIfcPl }],
    actual: [{ x: " ", y: dateIfcAct }],
  };
  const IFCdata = [
    {
      name: "Current",
      population: dateIfcAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateIfcPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  //////////////////////////////////// P  T  R  ///////////////////////////////////////////////////////////
  ////////////////////  RFQ   /////////////////////
  const [dateRfqAct, setDateRfqAct] = useState("");
  const [dateRfqPl, setDateRfqPl] = useState("");

  const dataRFQ = {
    planned: [{ x: " ", y: dateRfqPl }],
    actual: [{ x: " ", y: dateRfqAct }],
  };
  const RFQdata = [
    {
      name: "Issu To Company",
      population: dateRfqAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
    },
    {
      name: "Planned",
      population: dateRfqPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];
  ////////////////////  TEC   /////////////////////

  const [dateTecPl, setDateTecPl] = useState("");
  const [dateTecAct, setDateTecAct] = useState("");

  const dataTEC = {
    planned: [{ x: " ", y: dateTecPl }],
    actual: [{ x: " ", y: dateTecAct }],
  };
  const TECdata = [
    {
      name: "Scope Reply",
      population: dateTecAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
    },
    {
      name: "Received.Date",
      population: dateTecPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 13,
    },
  ];
  ////////////////////  POS   /////////////////////

  const [datePosAct, setDatePosAct] = useState("");
  const [datePosPl, setDatePosPl] = useState("");

  const dataPOS = {
    planned: [{ x: " ", y: datePosPl }],
    actual: [{ x: " ", y: datePosAct }],
  };
  const POSdata = [
    {
      name: "PO_Planed Date",
      population: datePosAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "PO_Issue Date",
      population: datePosPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];
  //////////////////////////////////// S  T  R  ///////////////////////////////////////////////////////////
  const [plEta, setPlEta] = useState("");
  const [ActAta, setActAta] = useState("");

  //console.log(ActAta);
  const data_STR = {
    planned: [{ x: " ", y: plEta }],
    actual: [{ x: " ", y: ActAta }],
  };
  const STR_data = [
    {
      name: "ATA_Site",
      population: ActAta,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "ETA_Site",
      population: plEta,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  //////////////////////////////////////// E  T  R ///////////////////////////////////////////////////////////////////////////////////

  ////////////////// INSPECTION ////////////////////////
  const [plInspection, setPlInspection] = useState("");
  const [factInspection, setFactInspection] = useState("");

  const data_INSPECTION = {
    planned: [{ x: " ", y: plInspection }],
    actual: [{ x: " ", y: factInspection }],
  };
  const INSPECTION_data = [
    {
      name: "Current",
      population: factInspection,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      //
      name: "Planned",
      population: plInspection,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  //////////////////// FOB ////////////////////////

  const [plFob, setPlFob] = useState("");
  const [factFob, setFactFob] = useState("");

  const data_FOB = {
    planned: [{ x: " ", y: plFob }],
    actual: [{ x: " ", y: factFob }],
  };
  const FOB_data = [
    {
      name: "Current",
      population: factFob,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: plFob,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  useEffect(() => {
    ///////////////////////////////////////  M  D  R  ///////////////////////////////////////////////////////////
    async function fetchDateMdr() {
      const res = await fetch("https://localhost:3000/mdr/" + state.params.key);
      const project = await res.json();
      //console.log(project);

      /////////  IFR //////////////////////

      var dateplifr = project.map(function (projects) {
        return projects["dateplifr"];
      });

      var dateactifr = project.map(function (projects) {
        return projects["dateactifr"];
      });

      if (UpdatedDate) {
        const filteractifr = dateactifr.filter(
          (dateactifrs) => dateactifrs <= UpdatedDate
        );
        const filterplifa = dateplifr.filter(
          (dateplifrs) => dateplifrs <= UpdatedDate
        );

        setIfrPl(filterplifa.filter((n) => n == 0 || n));
        setIfrAct(filteractifr.filter((n) => n == 0 || n));

        console.table(filteractifr);
        console.table(filterplifa);
      } else {
        setIfrPl(dateplifr.filter((n) => n == 0 || n));
        setIfrAct(dateactifr.filter((n) => n == 0 || n));
        // console.table(dateplifr.filter((n) => n == 0 || n));
        // console.table(dateactifr.filter((n) => n == 0 || n));
      }

      /////////  IFA  //////////////////////

      //       var dateplifa = project.map(function (projects) {
      //         return projects["dateplifa"];
      //       });
      //       var dateactifa = project.map(function (projects) {
      //         return projects["dateactifa"];
      //       });

      //       if (UpdatedDate) {
      //         const filterDateactifa = dateactifa.filter(
      //           (dateactifas) => dateactifas <= UpdatedDate
      //         );
      //         const filterDateplifa = dateplifa.filter(
      //           (dateplifas) => dateplifas <= UpdatedDate
      //         );
      //         setDateIfaAct(filterDateactifa.filter((n) => n == 0 || n).length);
      //         setDateIfaPl(filterDateplifa.filter((n) => n == 0 || n).length);

      //         // console.table(filterDateactifa);
      //         // console.table(filterDateplifa);
      //       } else {
      //         setDateIfaAct(dateactifa.filter((n) => n == 0 || n).length);
      //         setDateIfaPl(dateplifa.filter((n) => n == 0 || n).length);
      //         // console.table(dateactifa);
      //         // console.table(dateplifa);
      //       }

      //       ////////////  IFC  /////////////

      //       var dateplb = project.map(function (projects) {
      //         return projects["dateplb"];
      //       });
      //       var dateactb = project.map(function (projects) {
      //         return projects["dateactb"];
      //       });

      //       if (UpdatedDate) {
      //         const filterDateplb = dateplb.filter(
      //           (dateplbs) => dateplbs <= UpdatedDate
      //         );
      //         const filterDateactb = dateactb.filter(
      //           (dateactbs) => dateactbs <= UpdatedDate
      //         );
      //         setDateIfcPl(filterDateplb.filter((n) => n == 0 || n).length);
      //         setDateIfcAct(filterDateactb.filter((n) => n == 0 || n).length);

      //         // console.table(filterDateplb);
      //         // console.table(filterDateactb);
      //       } else {
      //         setDateIfcPl(dateplb.filter((n) => n == 0 || n).length);
      //         setDateIfcAct(dateactb.filter((n) => n == 0 || n).length);

      //         // console.table(dateplb);
      //         // console.table(dateactb);
      //       }
    }
    async function fetchDataMdr() {
      const res = await fetch("https://localhost:3000/mdr/" + state.params.key);
      const project = await res.json();
      //console.log(project);

      /////////  IFR //////////////////////

      var dateplifr = project.map(function (projects) {
        return projects["dateplifr"];
      });

      var dateactifr = project.map(function (projects) {
        return projects["dateactifr"];
      });

      if (UpdatedDate) {
        const filterDateactifr = dateactifr.filter(
          (dateactifrs) => dateactifrs <= UpdatedDate
        );
        const filterDateplifa = dateplifr.filter(
          (dateplifrs) => dateplifrs <= UpdatedDate
        );

        setDateIfrPl(filterDateplifa.filter((n) => n == 0 || n).length);
        setDateIfrAct(filterDateactifr.filter((n) => n == 0 || n).length);

        // console.table(filterDateactifr);
        // console.table(filterDateplifa);
      } else {
        setDateIfrPl(dateplifr.filter((n) => n == 0 || n).length);
        setDateIfrAct(dateactifr.filter((n) => n == 0 || n).length);
        // console.table(dateplifr);
        // console.table(dateactifr);
      }

      /////////  IFA  //////////////////////

      var dateplifa = project.map(function (projects) {
        return projects["dateplifa"];
      });
      var dateactifa = project.map(function (projects) {
        return projects["dateactifa"];
      });

      if (UpdatedDate) {
        const filterDateactifa = dateactifa.filter(
          (dateactifas) => dateactifas <= UpdatedDate
        );
        const filterDateplifa = dateplifa.filter(
          (dateplifas) => dateplifas <= UpdatedDate
        );
        setDateIfaAct(filterDateactifa.filter((n) => n == 0 || n).length);
        setDateIfaPl(filterDateplifa.filter((n) => n == 0 || n).length);

        // console.table(filterDateactifa);
        // console.table(filterDateplifa);
      } else {
        setDateIfaAct(dateactifa.filter((n) => n == 0 || n).length);
        setDateIfaPl(dateplifa.filter((n) => n == 0 || n).length);
        // console.table(dateactifa);
        // console.table(dateplifa);
      }

      ////////////  IFC  /////////////

      var dateplb = project.map(function (projects) {
        return projects["dateplb"];
      });
      var dateactb = project.map(function (projects) {
        return projects["dateactb"];
      });

      if (UpdatedDate) {
        const filterDateplb = dateplb.filter(
          (dateplbs) => dateplbs <= UpdatedDate
        );
        const filterDateactb = dateactb.filter(
          (dateactbs) => dateactbs <= UpdatedDate
        );
        setDateIfcPl(filterDateplb.filter((n) => n == 0 || n).length);
        setDateIfcAct(filterDateactb.filter((n) => n == 0 || n).length);

        // console.table(filterDateplb);
        // console.table(filterDateactb);
      } else {
        setDateIfcPl(dateplb.filter((n) => n == 0 || n).length);
        setDateIfcAct(dateactb.filter((n) => n == 0 || n).length);

        // console.table(dateplb);
        // console.table(dateactb);
      }
    }

    //////////////////////////////////// P  T  R  ///////////////////////////////////////////////////////////

    async function fetchDataPtr() {
      const res = await fetch("https://localhost:3000/ptr/" + state.params.key);

      const project = await res.json();

      /////////////////////  R F Q //////////////////

      var rfqplanned = project.map(function (projects) {
        return projects["rfqplanned"];
      });
      var rfqissuetocompany = project.map(function (projects) {
        return projects["rfqissuetocompany"];
      });

      if (UpdatedDate) {
        const filterRfqplanned = rfqplanned.filter(
          (rfqplanneds) => rfqplanneds <= UpdatedDate
        );
        const filterRfqissuetocompany = rfqissuetocompany.filter(
          (rfqissuetocompanys) => rfqissuetocompanys <= UpdatedDate
        );

        setDateRfqPl(filterRfqplanned.filter((n) => n == 0 || n).length);
        setDateRfqAct(
          filterRfqissuetocompany.filter((n) => n == 0 || n).length
        );

        // console.table(filterRfqplanned);
        // console.table(filterRfqissuetocompany);
      } else {
        setDateRfqPl(rfqplanned.filter((n) => n == 0 || n).length);
        setDateRfqAct(rfqissuetocompany.filter((n) => n == 0 || n).length);

        // console.table(rfqplanned);
        // console.table(rfqissuetocompany);
      }

      /////////////////////  T E Q //////////////////

      var receivedofferdate = project.map(function (projects) {
        return projects["receivedofferdate"];
      });

      var bescopereply = project.map(function (projects) {
        return projects["bescopereply"];
      });

      if (UpdatedDate) {
        const filterRecive = receivedofferdate.filter(
          (receivedofferdates) => receivedofferdates <= UpdatedDate
        );
        const filterBescoper = bescopereply.filter(
          (bescopereplys) => bescopereplys <= UpdatedDate
        );

        setDateTecPl(filterRecive.filter((n) => n == 0 || n).length);
        setDateTecAct(filterBescoper.filter((n) => n == 0 || n).length);

        // console.table(filterRecive);
        // console.table(filterBescoper);
      } else {
        setDateTecPl(receivedofferdate.filter((n) => n == 0 || n).length);
        setDateTecAct(bescopereply.filter((n) => n == 0 || n).length);

        // console.table(receivedofferdate);
        // console.table(bescopereply);
      }

      // setDateTecPl(receivedofferdate.filter((n) => n == 0 || n).length);
      // setDateTecAct(bescopereply.filter((n) => n == 0 || n).length);

      /////////////////////  P O S //////////////////

      var poplanned = project.map(function (projects) {
        return projects["poplanned"];
      });
      var poissuedate = project.map(function (projects) {
        return projects["poissuedate"];
      });

      if (UpdatedDate) {
        const filterpoplanned = poplanned.filter(
          (poplanneds) => poplanneds <= UpdatedDate
        );
        const filterpoissuedate = poissuedate.filter(
          (poissuedates) => poissuedates <= UpdatedDate
        );

        setDatePosPl(filterpoplanned.filter((n) => n == 0 || n).length);
        setDatePosAct(filterpoissuedate.filter((n) => n == 0 || n).length);

        // console.table(filterpoplanned);
        // console.table(filterpoissuedate);
      } else {
        setDatePosPl(poplanned.filter((n) => n == 0 || n).length);
        setDatePosAct(poissuedate.filter((n) => n == 0 || n).length);

        // console.table(poplanned);
        // console.table(poissuedate);
      }
      // setDatePosPl(poplanned.filter((n) => n == 0 || n).length);
      // setDatePosAct(poissuedate.filter((n) => n == 0 || n).length);
    }

    //////////////////////////////////// S  T  R  ///////////////////////////////////////////////////////////

    async function fetchDataStr() {
      const res = await fetch("https://localhost:3000/str/" + state.params.key);
      const project = await res.json();
      //console.table(project);

      var eta = project.map(function (projects) {
        return projects["eta"];
      });
      var ata = project.map(function (projects) {
        return projects["ata"];
      });

      if (UpdatedDate) {
        const filterEta = eta.filter((etas) => etas <= UpdatedDate);
        const filterAta = ata.filter((atas) => atas <= UpdatedDate);

        setPlEta(filterEta.filter((n) => n == 0 || n).length);
        setActAta(filterAta.filter((n) => n == 0 || n).length);

        //  console.table(filterEta);
        //  console.table(filterAta);
      } else {
        setPlEta(eta.filter((n) => n == 0 || n).length);
        setActAta(ata.filter((n) => n == 0 || n).length);

        //  console.table(eta.filter((n) => n == 0 || n).length);
        //  console.table(ata.filter((n) => n == 0 || n).length);

        //  console.table(eta);
        //  console.table(ata);
      }
    }
    //////////////////////////////////// E  T  R  ///////////////////////////////////////////////////////////

    async function fetchDataEtr() {
      const res = await fetch("https://localhost:3000/etr/" + state.params.key);
      const project = await res.json();

      // console.table(project);

      ///////////////////////INSPECTION //////////////////////////////////

      var plan = project.map(function (projects) {
        return projects["plan"];
      });

      var factbyeppm = project.map(function (projects) {
        return projects["factbyeppm"];
      });

      if (UpdatedDate) {
        const filterPlan = plan.filter((plans) => plans <= UpdatedDate);
        const filterFactbyeppm = factbyeppm.filter(
          (factbyeppms) => factbyeppms <= UpdatedDate
        );

        setPlInspection(filterPlan.filter((n) => n == 0 || n).length);
        setFactInspection(filterFactbyeppm.filter((n) => n == 0 || n).length);

        // console.table(filterPlan);
        // console.table(filterFactbyeppm);
      } else {
        setPlInspection(plan.filter((n) => n == 0 || n).length);
        setFactInspection(factbyeppm.filter((n) => n == 0 || n).length);

        // console.table(plan);
        // console.table(factbyeppm);
      }

      // setPlInspection(plan.filter((n) => n == 0 || n).length);
      // setFactInspection(factbyeppm.filter((n) => n == 0 || n).length);

      /////////////////////// F O B //////////////////////////////////

      var fobplan = project.map(function (projects) {
        return projects["fobplan"];
      });
      var fobfact = project.map(function (projects) {
        return projects["fobfact"];
      });

      if (UpdatedDate) {
        const filterFobplan = fobplan.filter(
          (fobplans) => fobplans <= UpdatedDate
        );
        const filterFobfact = fobfact.filter(
          (fobfacts) => fobfacts <= UpdatedDate
        );

        setPlFob(filterFobplan.filter((n) => n == 0 || n).length);
        setFactFob(filterFobfact.filter((n) => n == 0 || n).length);

        //  console.table(filterFobplan);
        //  console.table(filterFobfact);
      } else {
        setPlFob(fobplan.filter((n) => n == 0 || n).length);
        setFactFob(fobfact.filter((n) => n == 0 || n).length);

        //  console.table(fobplan);
        //  console.table(fobfact);
      }

      // setPlFob(fobplan.filter((n) => n == 0 || n).length);
      // setFactFob(fobfact.filter((n) => n == 0 || n).length);
    }

    ////////////////////////// construction  //////////////////////////////////////////////////////////
    async function fetchDataConstruction() {
      const res = await fetch(
        "https://localhost:3000/activity/" + state.params.key
      );
      const project = await res.json();
      //console.table(state.params.key);
      setDataType(project);
    }
    fetchDateMdr();
    fetchDataConstruction();
    fetchDataEtr();
    fetchDataStr();
    fetchDataPtr();
    fetchDataMdr();
  }, []);
// console.log(IfrAct.values());
  return (
    <KeyboardAwareScrollView
      style={{
        marginVertical: 40,
        backgroundColor: "#fff",
        marginTop: 3,
        marginBottom: 3,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ backgroundColor: "#fff", marginBottom: 10 }}>
        {state.params.Disipline === "Engineering Progress" ? (
          <View>
            <View>
              {UpdatedDate ? (
                <View>
                  <Text style={styles.UpDate}>
                    {" "}
                    Updated Date : <Text> {UpdatedDate} </Text>
                  </Text>
                  <View
                    style={{
                      borderBottomWidth: 2,
                      borderColor: "#ddd",
                      marginTop: 5,
                      marginBottom: 30,
                    }}
                  ></View>
                </View>
              ) : null}
              <Card>
                <Text h3 style={{ textAlign: "center", marginTop: 10 }}>
                  M . D . R
                </Text>
              </Card>

              <Text
                style={{
                  paddingBottom: 8,
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              ></Text>
              {dateIfrPl && dateIfrAct ? (
                <Card>
                  <Card.Title> I . F . R </Card.Title>
                  <Card.Divider />
                  <View>
                    <View style={{ width: 300, height: 250 }}>
                      <View>
                        <VictoryChart>
                          <VictoryGroup offset={60}>
                            <VictoryBar
                              data={dataIFR.planned}
                              style={{
                                data: { fill: "#008DDE", strokeWidth: 7 },
                                paddingLeft: 10,
                              }}
                            />
                            <VictoryBar
                              data={dataIFR.actual}
                              style={{
                                data: { fill: "#F00", strokeWidth: 7 },
                              }}
                            />
                          </VictoryGroup>
                          <VictoryLegend
                            x={Dimensions.get("screen").width / 2 - 50}
                            orientation="horizontal"
                            gutter={20}
                            //title="Legend"
                            centerTitle
                            style={{
                              marginBottom: 20,
                              paddingLeft: 20,
                            }}
                            data={[
                              {
                                name: `${dateIfrPl} Planned`,
                                symbol: { fill: "#008DDE" },
                              },
                              {
                                name: `${dateIfrAct} Actual`,
                                symbol: { fill: "#F00" },
                              },
                            ]}
                          />
                        </VictoryChart>
                      </View>
                    </View>

                    {/* <PieChart
                      data={IFRdata}
                      width={screenWidth}
                      height={210}
                      chartConfig={chartConfig}
                      accessor={"population"}
                      backgroundColor={"transparent"}
                      paddingLeft={"15"}
                      center={[5, 5]}
                      absolute
                    /> */}
                  </View>
                </Card>
              ) : (
                <Card>
                  <Card.Title> I . F . R </Card.Title>
                  <Card.Divider />
                  <Text
                    style={{
                      paddingBottom: 8,
                      backgroundColor: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#f00",
                    }}
                  >
                    Sorry no date added before {UpdatedDate}
                  </Text>
                </Card>
              )}
              {/* <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View> */}
              {/* <Text
                style={{
                  paddingBottom: 8,
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              ></Text> */}
              {dateIfaPl && dateIfaAct ? (
                <Card>
                  <Card.Title> I . F . A </Card.Title>
                  <Card.Divider />
                  <View>
                    <View style={{ width: 300, height: 250 }}>
                      <View>
                        <VictoryChart>
                          <VictoryGroup offset={60}>
                            <VictoryBar
                              data={dataIFA.planned}
                              style={{
                                data: { fill: "#008DDE", strokeWidth: 7 },
                                paddingLeft: 10,
                              }}
                            />
                            <VictoryBar
                              data={dataIFA.actual}
                              style={{
                                data: { fill: "#F00", strokeWidth: 7 },
                              }}
                            />
                          </VictoryGroup>
                          <VictoryLegend
                            x={Dimensions.get("screen").width / 2 - 50}
                            orientation="horizontal"
                            gutter={20}
                            //title="Legend"
                            centerTitle
                            style={{
                              marginBottom: 20,
                              paddingLeft: 20,
                            }}
                            data={[
                              {
                                name: `${dateIfaPl} Planned`,
                                symbol: { fill: "#008DDE" },
                              },
                              {
                                name: `${dateIfaAct} Actual`,
                                symbol: { fill: "#F00" },
                              },
                            ]}
                          />
                        </VictoryChart>
                      </View>
                    </View>
                    {/* <PieChart
                      data={IFAdata}
                      width={screenWidth}
                      height={210}
                      chartConfig={chartConfig}
                      accessor={"population"}
                      backgroundColor={"transparent"}
                      paddingLeft={"15"}
                      center={[5, 5]}
                      absolute
                    /> */}
                  </View>
                </Card>
              ) : (
                <Card>
                  <Card.Title> I . F . A </Card.Title>
                  <Card.Divider />
                  <Text
                    style={{
                      paddingBottom: 8,
                      backgroundColor: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#f00",
                    }}
                  >
                    Sorry no date added before {UpdatedDate}
                  </Text>
                </Card>
              )}
              {/* <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View> */}

              {dateIfcAct && dateIfcPl ? (
                <Card>
                  <Card.Title> I . F . C </Card.Title>
                  <Card.Divider />
                  <View>
                    <View style={{ width: 300, height: 250 }}>
                      <View>
                        <VictoryChart>
                          <VictoryGroup offset={60}>
                            <VictoryBar
                              data={dataIFC.planned}
                              style={{
                                data: { fill: "#008DDE", strokeWidth: 7 },
                                paddingLeft: 10,
                              }}
                            />
                            <VictoryBar
                              data={dataIFC.actual}
                              style={{
                                data: { fill: "#F00", strokeWidth: 7 },
                              }}
                            />
                          </VictoryGroup>
                          <VictoryLegend
                            x={Dimensions.get("screen").width / 2 - 50}
                            orientation="horizontal"
                            gutter={20}
                            //title="Legend"
                            centerTitle
                            style={{
                              marginBottom: 20,
                              paddingLeft: 20,
                            }}
                            data={[
                              {
                                name: `${dateIfcPl} Planned`,
                                symbol: { fill: "#008DDE" },
                              },
                              {
                                name: `${dateIfcAct} Actual`,
                                symbol: { fill: "#F00" },
                              },
                            ]}
                          />
                        </VictoryChart>
                      </View>
                    </View>
                    {/* <PieChart
                      data={IFCdata}
                      width={screenWidth}
                      height={210}
                      chartConfig={chartConfig}
                      accessor={"population"}
                      backgroundColor={"transparent"}
                      paddingLeft={"15"}
                      center={[5, 5]}
                      absolute
                    /> */}
                  </View>
                </Card>
              ) : (
                <Card>
                  <Card.Title> I . F . C </Card.Title>
                  <Card.Divider />
                  <Text
                    style={{
                      paddingBottom: 8,
                      backgroundColor: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#f00",
                    }}
                  >
                    Sorry no date added before {UpdatedDate}
                  </Text>
                </Card>
              )}
            </View>
          </View>
        ) : null}
        {state.params.Disipline === "procurement Progress" ? (
          <View>
            {UpdatedDate ? (
              <View>
                <Text style={styles.UpDate}>
                  {" "}
                  Updated Date : <Text> {UpdatedDate} </Text>
                </Text>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderColor: "#ddd",
                    marginTop: 5,
                    marginBottom: 30,
                  }}
                ></View>
              </View>
            ) : null}

            <Card>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 10,
                }}
                h3
              >
                {" "}
                P . T . R
              </Text>
            </Card>

            {dateRfqAct && dateRfqPl ? (
              <Card>
                <Card.Title> R . F . Q . Issue </Card.Title>
                <Card.Divider />
                <View style={{ width: 300, height: 250 }}>
                  <View>
                    <VictoryChart>
                      <VictoryGroup offset={60}>
                        <VictoryBar
                          data={dataRFQ.planned}
                          style={{
                            data: { fill: "#008DDE", strokeWidth: 7 },
                            paddingLeft: 10,
                          }}
                        />
                        <VictoryBar
                          data={dataRFQ.actual}
                          style={{
                            data: { fill: "#F00", strokeWidth: 7 },
                          }}
                        />
                      </VictoryGroup>
                      <VictoryLegend
                        x={Dimensions.get("screen").width / 2 - 50}
                        orientation="horizontal"
                        gutter={20}
                        //title="Legend"
                        centerTitle
                        style={{
                          marginBottom: 20,
                          paddingLeft: 20,
                        }}
                        data={[
                          {
                            name: `${dateRfqPl} Planned`,
                            symbol: { fill: "#008DDE" },
                          },
                          {
                            name: `${dateRfqAct} Actual`,
                            symbol: { fill: "#F00" },
                          },
                        ]}
                      />
                    </VictoryChart>
                  </View>
                </View>
                {/* <PieChart
                  data={RFQdata}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                /> */}
              </Card>
            ) : (
              <Card>
                <Text
                  style={{
                    paddingBottom: 8,
                    backgroundColor: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#f00",
                  }}
                >
                  Sorry no date added before {UpdatedDate}
                </Text>
              </Card>
            )}
            {dateTecPl && dateTecAct ? (
              <Card>
                <Card.Title> Technical Commercial Evalution </Card.Title>
                <Card.Divider />
                <View style={{ width: 300, height: 250 }}>
                  <View>
                    <VictoryChart>
                      <VictoryGroup offset={60}>
                        <VictoryBar
                          data={dataTEC.planned}
                          style={{
                            data: { fill: "#008DDE", strokeWidth: 7 },
                            paddingLeft: 10,
                          }}
                        />
                        <VictoryBar
                          data={dataTEC.actual}
                          style={{
                            data: { fill: "#F00", strokeWidth: 7 },
                          }}
                        />
                      </VictoryGroup>
                      <VictoryLegend
                        x={Dimensions.get("screen").width / 2 - 50}
                        orientation="horizontal"
                        gutter={20}
                        //title="Legend"
                        centerTitle
                        style={{
                          marginBottom: 20,
                          paddingLeft: 20,
                        }}
                        data={[
                          {
                            name: `${dateTecPl} Planned`,
                            symbol: { fill: "#008DDE" },
                          },
                          {
                            name: `${dateTecAct} Actual`,
                            symbol: { fill: "#F00" },
                          },
                        ]}
                      />
                    </VictoryChart>
                  </View>
                </View>
                {/* <PieChart
                  data={TECdata}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                /> */}
              </Card>
            ) : (
              <Card>
                <Text
                  style={{
                    paddingBottom: 8,
                    backgroundColor: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#f00",
                  }}
                >
                  Sorry no date added before {UpdatedDate}
                </Text>
              </Card>
            )}
            {datePosAct && datePosPl ? (
              <Card>
                <Card.Title> Purchased.Order.Status </Card.Title>
                <Card.Divider />
                <View style={{ width: 300, height: 250 }}>
                  <View>
                    <VictoryChart>
                      <VictoryGroup offset={60}>
                        <VictoryBar
                          data={dataPOS.planned}
                          style={{
                            data: { fill: "#008DDE", strokeWidth: 7 },
                            paddingLeft: 10,
                          }}
                        />
                        <VictoryBar
                          data={dataPOS.actual}
                          style={{
                            data: { fill: "#F00", strokeWidth: 7 },
                          }}
                        />
                      </VictoryGroup>
                      <VictoryLegend
                        x={Dimensions.get("screen").width / 2 - 50}
                        orientation="horizontal"
                        gutter={20}
                        //title="Legend"
                        centerTitle
                        style={{
                          marginBottom: 20,
                          paddingLeft: 20,
                        }}
                        data={[
                          {
                            name: `${datePosPl} Planned`,
                            symbol: { fill: "#008DDE" },
                          },
                          {
                            name: `${datePosAct} Actual`,
                            symbol: { fill: "#F00" },
                          },
                        ]}
                      />
                    </VictoryChart>
                  </View>
                </View>
                {/* <PieChart
                  data={POSdata}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                /> */}
              </Card>
            ) : (
              <Card>
                <Text
                  style={{
                    paddingBottom: 8,
                    backgroundColor: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#f00",
                  }}
                >
                  Sorry no date added before {UpdatedDate}
                </Text>
              </Card>
            )}

            <Card>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 10,
                }}
                h4
              >
                S . T . R
              </Text>
            </Card>
            {ActAta && plEta ? (
              <Card>
                <View style={{ width: 300, height: 250 }}>
                  <View>
                    <VictoryChart>
                      <VictoryGroup offset={60}>
                        <VictoryBar
                          data={data_STR.planned}
                          style={{
                            data: { fill: "#008DDE", strokeWidth: 7 },
                            paddingLeft: 10,
                          }}
                        />
                        <VictoryBar
                          data={data_STR.actual}
                          style={{
                            data: { fill: "#F00", strokeWidth: 7 },
                          }}
                        />
                      </VictoryGroup>
                      <VictoryLegend
                        x={Dimensions.get("screen").width / 2 - 50}
                        orientation="horizontal"
                        gutter={20}
                        //title="Legend"
                        centerTitle
                        style={{
                          marginBottom: 20,
                          paddingLeft: 20,
                        }}
                        data={[
                          {
                            name: `${plEta} Planned`,
                            symbol: { fill: "#008DDE" },
                          },
                          {
                            name: `${ActAta} Actual`,
                            symbol: { fill: "#F00" },
                          },
                        ]}
                      />
                    </VictoryChart>
                  </View>
                </View>
                {/* <PieChart
                  data={STR_data}
                  width={screenWidth}
                  height={220}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                /> */}
              </Card>
            ) : (
              <Card>
                <Text
                  style={{
                    paddingBottom: 8,
                    backgroundColor: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#f00",
                  }}
                >
                  Sorry no date added before {UpdatedDate}
                </Text>
              </Card>
            )}

            <View>
              <Card>
                <Text
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                  }}
                  h4
                >
                  E . T . R
                </Text>
              </Card>
              {plInspection && factInspection ? (
                <Card>
                  <Card.Title> INSPECTION </Card.Title>
                  <Card.Divider />
                  <View style={{ width: 300, height: 250 }}>
                    <View>
                      <VictoryChart>
                        <VictoryGroup offset={60}>
                          <VictoryBar
                            data={data_INSPECTION.planned}
                            style={{
                              data: { fill: "#008DDE", strokeWidth: 7 },
                              paddingLeft: 10,
                            }}
                          />
                          <VictoryBar
                            data={data_INSPECTION.actual}
                            style={{
                              data: { fill: "#F00", strokeWidth: 7 },
                            }}
                          />
                          <VictoryLegend
                            x={Dimensions.get("screen").width / 2 - 50}
                            orientation="horizontal"
                            gutter={20}
                            //title="Legend"
                            centerTitle
                            style={{
                              marginBottom: 20,
                              paddingLeft: 20,
                            }}
                            data={[
                              {
                                name: `${plInspection} Planned`,
                                symbol: { fill: "#008DDE" },
                              },
                              {
                                name: `${factInspection} Actual`,
                                symbol: { fill: "#F00" },
                              },
                            ]}
                          />
                        </VictoryGroup>
                      </VictoryChart>
                    </View>
                  </View>
                  {/* <PieChart
                    data={INSPECTION_data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[5, 5]}
                    absolute
                  /> */}
                </Card>
              ) : (
                <Card>
                  <Text
                    style={{
                      paddingBottom: 8,
                      backgroundColor: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#f00",
                    }}
                  >
                    Sorry no date added before {UpdatedDate}
                  </Text>
                </Card>
              )}

              {plFob && factFob ? (
                <Card>
                  <Card.Title> F . O . B </Card.Title>
                  <Card.Divider />
                  <View style={{ width: 300, height: 250 }}>
                    <View>
                      <VictoryChart>
                        <VictoryGroup offset={60}>
                          <VictoryBar
                            data={data_FOB.planned}
                            style={{
                              data: { fill: "#008DDE", strokeWidth: 7 },
                              paddingLeft: 10,
                            }}
                          />
                          <VictoryBar
                            data={data_FOB.actual}
                            style={{
                              data: { fill: "#F00", strokeWidth: 7 },
                            }}
                          />
                        </VictoryGroup>
                        <VictoryLegend
                          x={Dimensions.get("screen").width / 2 - 50}
                          orientation="horizontal"
                          gutter={20}
                          //title="Legend"
                          centerTitle
                          style={{
                            marginBottom: 20,
                            paddingLeft: 20,
                          }}
                          data={[
                            {
                              name: `${plFob} Planned`,
                              symbol: { fill: "#008DDE" },
                            },
                            {
                              name: `${factFob} Actual`,
                              symbol: { fill: "#F00" },
                            },
                          ]}
                        />
                      </VictoryChart>
                    </View>
                  </View>
                  {/* <PieChart
                    data={FOB_data}
                    width={screenWidth}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[5, 5]}
                    absolute
                  /> */}
                </Card>
              ) : (
                <Card>
                  <Text
                    style={{
                      paddingBottom: 8,
                      backgroundColor: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#f00",
                    }}
                  >
                    Sorry no date added before {UpdatedDate}
                  </Text>
                </Card>
              )}
            </View>
          </View>
        ) : null}
        {state.params.Disipline === "Construction Progress" ? (
          <View>
            {" "}
            {UpdatedDate ? (
              <View>
                <Text style={styles.UpDate}>
                  {" "}
                  Updated Date : <Text> {UpdatedDate} </Text>
                </Text>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderColor: "#ddd",
                    marginTop: 5,
                    marginBottom: 30,
                  }}
                ></View>
              </View>
            ) : null}
            <View>
              {Object.values(dataType).map((dataTypes) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Type_Construction", {
                      data: dataTypes,
                      UpdatedDate: UpdatedDate,
                    })
                  }
                  style={{
                    backgroundColor: "#fff",
                    marginTop: 20,
                    marginBottom: 3,
                  }}
                >
                  <View>
                    {" "}
                    <Text
                      style={{
                        fontSize: 17,
                        textAlign: "left",
                        display: "flex",
                        marginTop: 10,
                        backgroundColor: "#f5fcff",
                        borderBottomWidth: 1,
                        borderColor: "#ddd",
                        height: 50,
                        paddingLeft: 50,
                        color: "#2DAAF1",
                        marginBottom: 20,
                      }}
                    >
                      {" "}
                      {dataTypes.discipline}{" "}
                    </Text>{" "}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : null}
      </View>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  Header: {
    // marginBottom: 50,
    // borderBottomWidth: 1,
    // borderColor: "#ddd",
    // marginTop: 10,
    // display: "flex",
    // flexDirection: "row",
  },
  content: {
    backgroundColor: "#ffff",
    marginBottom: 300,
  },
  input: {
    margin: 15,
    height: 40,
    //borderColor: "#F3F3F3",
    //borderWidth: 1,
    backgroundColor: "#FFF",
    //borderRadius: 15,
  },
  doc: {
    textAlign: "left",
    padding: 10,
    marginTop: 50,
    // borderTopWidth: 2,
    // borderColor: "#ddd",
    display: "flex",
    flexDirection: "column",
    paddingBottom: 35,
  },
  tot: {
    display: "flex",
    flexDirection: "row",
  },
  UpDate: {
    textAlign: "left",
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: "bold",
    fontSize: 15,
  },
  container: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#f5fcff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 50,
    // textAlign:"center",
    paddingLeft: 100,
  },
  Disip: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#f5fcff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 50,
    // textAlign:"center",
    paddingLeft: 100,
    color: "#4DC7F8",
    //fontWeight: "bold",
  },
});
export default ProjectDetail;
