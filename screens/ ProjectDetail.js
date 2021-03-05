import React, { useState, useEffect } from "react";
import { Block, Input } from "../components";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import { BottomNavigation, TextInput, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { PieChart } from "react-native-chart-kit";
import { VictoryChart, VictoryBar } from "../Victory";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const ProjectDetail = (props) => {
  const { state } = props.navigation;
  //console.log("Title " + state.params.user, "ProjectKey: " + state.params.key);
  /////////////////// Diver Constant  /////////////////////////////
  console.log(state.params.UpdatedDate);
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

  //////////////////////////////////// M  D  R  ///////////////////////////////////////////////////////////

  //////////// IFR //////////////
  const [dateIfrAct, setDateIfrAct] = useState("");
  const [dateIfrPl, setDateIfrPl] = useState("");

  //console.table(dateIfrPl, dateIfrAct);

  const dataIFR = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateIfrPl }],
    actual: [{ x: 3.5, y: dateIfrAct }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateIfaPl }],
    actual: [{ x: 3.5, y: dateIfaAct }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateIfcPl }],
    actual: [{ x: 3.5, y: dateIfcAct }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateRfqPl }],
    actual: [{ x: 3.5, y: dateRfqAct }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: dateTecPl }],
    actual: [{ x: 3.5, y: dateTecAct }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: datePosPl }],
    actual: [{ x: 3.5, y: datePosAct }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: plEta }],
    actual: [{ x: 3.5, y: ActAta }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: plInspection }],
    actual: [{ x: 3.5, y: factInspection }],
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
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: plFob }],
    actual: [{ x: 3.5, y: factFob }],
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
    ////////////////////////////////////  M  D  R  ///////////////////////////////////////////////////////////

    async function fetchDataMdr() {
      const res = await fetch("https://localhost:3000/mdr/" + state.params.key);
      const project = await res.json();
      console.log(project);

      /////////  IFR //////////////////////

      var dateplifr = project.map(function (projects) {
        return projects["dateplifr"];
      });

      var dateactifr = project.map(function (projects) {
        return projects["dateactifr"];
      });

      if (UpdatedDate) {
        const filterDateactifr = dateactifr.filter(
          (dateactifas) => dateactifas <= UpdatedDate
        );
        const filterDateplifa = dateplifr.filter(
          (dateplifrs) => dateplifrs <= UpdatedDate
        );

        setDateIfrPl(filterDateplifa.filter((n) => n == 0 || n).length);
        setDateIfrAct(filterDateactifr.filter((n) => n == 0 || n).length);

        console.table(filterDateactifr);
        console.table(filterDateplifa);
      } else {
        setDateIfrPl(dateplifr.filter((n) => n == 0 || n).length);
        setDateIfrAct(dateactifr.filter((n) => n == 0 || n).length);
        console.table(dateplifr);
        console.table(dateactifr);
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
         const filterFobplan = fobplan.filter((fobplans) => fobplans <= UpdatedDate);
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

    fetchDataEtr();
    fetchDataStr();
    fetchDataPtr();
    fetchDataMdr();
  }, []);

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
      <View style={{ backgroundColor: "#fff" }}>
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
              <Text style={{ textAlign: "center", marginTop: 10 }}>
                Master_Document_Register
              </Text>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <View style={{ width: 300, height: 300 }}>
                <View>
                  <Text
                    style={{
                      paddingBottom: 8,
                      backgroundColor: "white",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    I . F . R
                  </Text>

                  <VictoryChart>
                    <VictoryBar data={dataIFR.a} />
                    <VictoryBar data={dataIFR.b} />
                    <VictoryBar
                      data={dataIFR.planned}
                      style={{
                        data: { fill: "#2E58BF", strokeWidth: 30 },
                        paddingLeft: 10,
                      }}
                    />
                    <VictoryBar
                      data={dataIFR.actual}
                      style={{
                        data: { fill: "#F00", strokeWidth: 30 },
                      }}
                    />
                    <VictoryBar data={dataIFR.c} />
                    <VictoryBar data={dataIFR.d} />
                  </VictoryChart>
                </View>
              </View>
              <PieChart
                data={IFRdata}
                width={screenWidth}
                height={210}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <View>
                <View style={{ width: 300, height: 300 }}>
                  <View>
                    <Text
                      style={{
                        paddingBottom: 8,
                        backgroundColor: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      I . F . A
                    </Text>

                    <VictoryChart>
                      <VictoryBar data={dataIFA.a} />
                      <VictoryBar data={dataIFA.b} />
                      <VictoryBar
                        data={dataIFA.planned}
                        style={{
                          data: { fill: "#2E58BF", strokeWidth: 30 },
                          paddingLeft: 10,
                        }}
                      />
                      <VictoryBar
                        data={dataIFA.actual}
                        style={{
                          data: { fill: "#F00", strokeWidth: 30 },
                        }}
                      />
                      <VictoryBar data={dataIFA.c} />
                      <VictoryBar data={dataIFA.d} />
                    </VictoryChart>
                  </View>
                </View>
                <PieChart
                  data={IFAdata}
                  width={screenWidth}
                  height={210}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                />
              </View>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <View>
                <View style={{ width: 300, height: 300 }}>
                  <View>
                    <Text
                      style={{
                        paddingBottom: 8,
                        backgroundColor: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      I . F . C
                    </Text>

                    <VictoryChart>
                      <VictoryBar data={dataIFC.a} />
                      <VictoryBar data={dataIFC.b} />
                      <VictoryBar
                        data={dataIFC.planned}
                        style={{
                          data: { fill: "#2E58BF", strokeWidth: 30 },
                          paddingLeft: 10,
                        }}
                      />
                      <VictoryBar
                        data={dataIFC.actual}
                        style={{
                          data: { fill: "#F00", strokeWidth: 30 },
                        }}
                      />
                      <VictoryBar data={dataIFC.c} />
                      <VictoryBar data={dataIFC.d} />
                    </VictoryChart>
                  </View>
                </View>
                <PieChart
                  data={IFCdata}
                  width={screenWidth}
                  height={210}
                  chartConfig={chartConfig}
                  accessor={"population"}
                  backgroundColor={"transparent"}
                  paddingLeft={"15"}
                  center={[5, 5]}
                  absolute
                />
              </View>
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
            <Text
              style={{
                textAlign: "center",
                marginTop: 2,
                backgroundColor: "#ffff",
                fontSize: 20,
                color: "#f00",
                marginTop: 10,
              }}
            >
              {" "}
              Procurement_Trucking_Register
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text
              style={{
                paddingBottom: 30,
                backgroundColor: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              R . F . Q . Issue
            </Text>
            <View style={{ width: 300, height: 300 }}>
              <View>
                <VictoryChart>
                  <VictoryBar data={dataRFQ.a} />
                  <VictoryBar data={dataRFQ.b} />
                  <VictoryBar
                    data={dataRFQ.planned}
                    style={{
                      data: { fill: "#2E58BF", strokeWidth: 20 },
                      paddingLeft: 10,
                    }}
                  />
                  <VictoryBar
                    data={dataRFQ.actual}
                    style={{
                      data: { fill: "#F00", strokeWidth: 20 },
                    }}
                  />
                  <VictoryBar data={dataRFQ.c} />
                  <VictoryBar data={dataRFQ.d} />
                </VictoryChart>
              </View>
            </View>
            <PieChart
              data={RFQdata}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[5, 5]}
              absolute
            />
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text
              style={{
                paddingBottom: 30,
                backgroundColor: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Technical Commercial Evalution
            </Text>
            <View style={{ width: 300, height: 300 }}>
              <View>
                <VictoryChart>
                  <VictoryBar data={dataTEC.a} />
                  <VictoryBar data={dataTEC.b} />
                  <VictoryBar
                    data={dataTEC.planned}
                    style={{
                      data: { fill: "#2E58BF", strokeWidth: 20 },
                      paddingLeft: 10,
                    }}
                  />
                  <VictoryBar
                    data={dataTEC.actual}
                    style={{
                      data: { fill: "#F00", strokeWidth: 20 },
                    }}
                  />
                  <VictoryBar data={dataTEC.c} />
                  <VictoryBar data={dataTEC.d} />
                </VictoryChart>
              </View>
            </View>
            <PieChart
              data={TECdata}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[5, 5]}
              absolute
            />
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text
              style={{
                paddingBottom: 30,
                backgroundColor: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Purchased.Order.Status
            </Text>
            <View style={{ width: 300, height: 300 }}>
              <View>
                <VictoryChart>
                  <VictoryBar data={dataPOS.a} />
                  <VictoryBar data={dataPOS.b} />
                  <VictoryBar
                    data={dataPOS.planned}
                    style={{
                      data: { fill: "#2E58BF", strokeWidth: 20 },
                      paddingLeft: 10,
                    }}
                  />
                  <VictoryBar
                    data={dataPOS.actual}
                    style={{
                      data: { fill: "#F00", strokeWidth: 20 },
                    }}
                  />
                  <VictoryBar data={dataPOS.c} />
                  <VictoryBar data={dataPOS.d} />
                </VictoryChart>
              </View>
            </View>
            <PieChart
              data={POSdata}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[5, 5]}
              absolute
            />
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 2,
                backgroundColor: "#ffff",
                fontSize: 20,
                color: "#f00",
              }}
            >
              Shipment_Trucking_Register
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 10,
              }}
            ></View>
            <View style={{ width: 300, height: 300 }}>
              <View>
                <VictoryChart>
                  <VictoryBar data={data_STR.a} />
                  <VictoryBar data={data_STR.b} />
                  <VictoryBar
                    data={data_STR.planned}
                    style={{
                      data: { fill: "#2E58BF", strokeWidth: 20 },
                      paddingLeft: 10,
                    }}
                  />
                  <VictoryBar
                    data={data_STR.actual}
                    style={{
                      data: { fill: "#F00", strokeWidth: 20 },
                    }}
                  />
                  <VictoryBar data={data_STR.c} />
                  <VictoryBar data={data_STR.d} />
                </VictoryChart>
              </View>
            </View>
            <PieChart
              data={STR_data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"transparent"}
              paddingLeft={"15"}
              center={[5, 5]}
              absolute
            />
            <View>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 30,
                }}
              ></View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 2,
                  backgroundColor: "#ffff",
                  fontSize: 20,
                  color: "#f00",
                }}
              >
                Expediting_Trucker_Register
              </Text>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              ></View>
              <Text
                style={{
                  paddingBottom: 30,
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                INSPECTION
              </Text>

              <View style={{ width: 300, height: 300 }}>
                <View>
                  <VictoryChart>
                    <VictoryBar data={data_INSPECTION.a} />
                    <VictoryBar data={data_INSPECTION.b} />
                    <VictoryBar
                      data={data_INSPECTION.planned}
                      style={{
                        data: { fill: "#2E58BF", strokeWidth: 20 },
                        paddingLeft: 10,
                      }}
                    />
                    <VictoryBar
                      data={data_INSPECTION.actual}
                      style={{
                        data: { fill: "#F00", strokeWidth: 20 },
                      }}
                    />
                    <VictoryBar data={data_INSPECTION.c} />
                    <VictoryBar data={data_INSPECTION.d} />
                  </VictoryChart>
                </View>
              </View>
              <PieChart
                data={INSPECTION_data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              ></View>
              <Text
                style={{
                  paddingBottom: 30,
                  backgroundColor: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                F . O . B
              </Text>

              <View style={{ width: 300, height: 300 }}>
                <View>
                  <VictoryChart>
                    <VictoryBar data={data_FOB.a} />
                    <VictoryBar data={data_FOB.b} />
                    <VictoryBar
                      data={data_FOB.planned}
                      style={{
                        data: { fill: "#2E58BF", strokeWidth: 20 },
                        paddingLeft: 10,
                      }}
                    />
                    <VictoryBar
                      data={data_FOB.actual}
                      style={{
                        data: { fill: "#F00", strokeWidth: 20 },
                      }}
                    />
                    <VictoryBar data={data_FOB.c} />
                    <VictoryBar data={data_FOB.d} />
                  </VictoryChart>
                </View>
              </View>
              <PieChart
                data={FOB_data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                paddingLeft={"15"}
                center={[5, 5]}
                absolute
              />
            </View>
          </View>
        ) : null}
        {state.params.Disipline === "Construction Progress" ? (
          <View>
            {" "}
            <View>
              <Text style={styles.UpDate}>
                {" "}
                Updated Date : <Text> {UpdatedDate}</Text>
              </Text>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#ddd",
                  marginTop: 5,
                  marginBottom: 30,
                }}
              ></View>
            </View>{" "}
            Nestana Fi MSADAK !!!!!!!!!!
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
