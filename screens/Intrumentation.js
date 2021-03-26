// import React, { useState, useEffect } from "react";
// import { Block, Input } from "../components";
// import {
//   Dimensions,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";

// import { BottomNavigation, TextInput, Text } from "react-native-paper";
// import { AntDesign } from "@expo/vector-icons";
// import { Button, Card, ListItem } from "react-native-elements";
// import { VictoryAxis } from "victory-axis";
// import { VictoryLegend } from "victory-legend";
// import {
//   VictoryChart,
//   //VictoryGroup,
//   VictoryBar,
//   VictoryTooltip,
// } from "../Victory";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import PureChart from "react-native-pure-chart";
// import { VictoryGroup } from "victory-group";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from "react-native-chart-kit";

// export default function Intrumentation(props) {
//   const navigation = props.navigation;
//   const { state } = props.navigation;
//    const UpdatedDate = state.params.UpdatedDate;
//   ///////////////////////// pulling cable  ///////////////////////////////////////////////////////////

//   const [plannedPulling, setPlannedPulling] = useState([]);
//   const [actPulling, setActPulling] = useState([]);

//   const curveDataPulling = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedPulling[0] },
//         { x: "Feb", y: plannedPulling[1] },
//         { x: "Mar", y: plannedPulling[2] },
//         { x: "Apr", y: plannedPulling[3] },
//         { x: "May", y: plannedPulling[4] },
//         { x: "Jun", y: plannedPulling[5] },
//         { x: "Jul", y: plannedPulling[6] },
//         { x: "Aug", y: plannedPulling[7] },
//         { x: "Sep", y: plannedPulling[8] },
//         { x: "Oct", y: plannedPulling[9] },
//         { x: "Nov", y: plannedPulling[10] },
//         { x: "Dec", y: plannedPulling[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actPulling[0] },
//         { x: "Feb", y: actPulling[1] },
//         { x: "Mar", y: actPulling[2] },
//         { x: "Apr", y: actPulling[3] },
//         { x: "May", y: actPulling[4] },
//         { x: "Jun", y: actPulling[5] },
//         { x: "Jul", y: actPulling[6] },
//         { x: "Aug", y: actPulling[7] },
//         { x: "Sep", y: actPulling[8] },
//         { x: "Oct", y: actPulling[9] },
//         { x: "Nov", y: actPulling[10] },
//         { x: "Dec", y: actPulling[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];
//   const dataHistPulling = {
//     planned: [
//       { x: "Jan", y: plannedPulling[0] },
//       { x: "Feb", y: plannedPulling[1] },
//       { x: "Mar", y: plannedPulling[2] },
//       { x: "Apr", y: plannedPulling[3] },
//       { x: "May", y: plannedPulling[4] },
//       { x: "Jun", y: plannedPulling[5] },
//       { x: "Jul", y: plannedPulling[6] },
//       { x: "Aug", y: plannedPulling[7] },
//       { x: "Sep", y: plannedPulling[8] },
//       { x: "Oct", y: plannedPulling[9] },
//       { x: "Nov", y: plannedPulling[10] },
//       { x: "Dec", y: plannedPulling[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actPulling[0] },
//       { x: "Feb", y: actPulling[1] },
//       { x: "Mar", y: actPulling[2] },
//       { x: "Apr", y: actPulling[3] },
//       { x: "May", y: actPulling[4] },
//       { x: "Jun", y: actPulling[5] },
//       { x: "Jul", y: actPulling[6] },
//       { x: "Aug", y: actPulling[7] },
//       { x: "Sep", y: actPulling[8] },
//       { x: "Oct", y: actPulling[9] },
//       { x: "Nov", y: actPulling[10] },
//       { x: "Dec", y: actPulling[11] },
//     ],
//   };
//   ///////////////////////// Glanding an Conx Cable ///////////////////////////////////////////////////////////
//   const [plannedGlanding, setPlannedGlanding] = useState([]);
//   const [actGlanding, setActGlanding] = useState([]);

//   const curveDataGlanding = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedGlanding[0] },
//         { x: "Feb", y: plannedGlanding[1] },
//         { x: "Mar", y: plannedGlanding[2] },
//         { x: "Apr", y: plannedGlanding[3] },
//         { x: "May", y: plannedGlanding[4] },
//         { x: "Jun", y: plannedGlanding[5] },
//         { x: "Jul", y: plannedGlanding[6] },
//         { x: "Aug", y: plannedGlanding[7] },
//         { x: "Sep", y: plannedGlanding[8] },
//         { x: "Oct", y: plannedGlanding[9] },
//         { x: "Nov", y: plannedGlanding[10] },
//         { x: "Dec", y: plannedGlanding[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actGlanding[0] },
//         { x: "Feb", y: actGlanding[1] },
//         { x: "Mar", y: actGlanding[2] },
//         { x: "Apr", y: actGlanding[3] },
//         { x: "May", y: actGlanding[4] },
//         { x: "Jun", y: actGlanding[5] },
//         { x: "Jul", y: actGlanding[6] },
//         { x: "Aug", y: actGlanding[7] },
//         { x: "Sep", y: actGlanding[8] },
//         { x: "Oct", y: actGlanding[9] },
//         { x: "Nov", y: actGlanding[10] },
//         { x: "Dec", y: actGlanding[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];
//   const dataHistGlanding = {
//     planned: [
//       { x: "Jan", y: plannedGlanding[0] },
//       { x: "Feb", y: plannedGlanding[1] },
//       { x: "Mar", y: plannedGlanding[2] },
//       { x: "Apr", y: plannedGlanding[3] },
//       { x: "May", y: plannedGlanding[4] },
//       { x: "Jun", y: plannedGlanding[5] },
//       { x: "Jul", y: plannedGlanding[6] },
//       { x: "Aug", y: plannedGlanding[7] },
//       { x: "Sep", y: plannedGlanding[8] },
//       { x: "Oct", y: plannedGlanding[9] },
//       { x: "Nov", y: plannedGlanding[10] },
//       { x: "Dec", y: plannedGlanding[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actGlanding[0] },
//       { x: "Feb", y: actGlanding[1] },
//       { x: "Mar", y: actGlanding[2] },
//       { x: "Apr", y: actGlanding[3] },
//       { x: "May", y: actGlanding[4] },
//       { x: "Jun", y: actGlanding[5] },
//       { x: "Jul", y: actGlanding[6] },
//       { x: "Aug", y: actGlanding[7] },
//       { x: "Sep", y: actGlanding[8] },
//       { x: "Oct", y: actGlanding[9] },
//       { x: "Nov", y: actGlanding[10] },
//       { x: "Dec", y: actGlanding[11] },
//     ],
//   };
//   ///////////////////////// Equipment Erection///////////////////////////////////////////////////////////
//   const [plannedErection, setPlannedErection] = useState([]);
//   const [actErection, setActErection] = useState([]);

//   const curveDataErection = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedErection[0] },
//         { x: "Feb", y: plannedErection[1] },
//         { x: "Mar", y: plannedErection[2] },
//         { x: "Apr", y: plannedErection[3] },
//         { x: "May", y: plannedErection[4] },
//         { x: "Jun", y: plannedErection[5] },
//         { x: "Jul", y: plannedErection[6] },
//         { x: "Aug", y: plannedErection[7] },
//         { x: "Sep", y: plannedErection[8] },
//         { x: "Oct", y: plannedErection[9] },
//         { x: "Nov", y: plannedErection[10] },
//         { x: "Dec", y: plannedErection[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actErection[0] },
//         { x: "Feb", y: actErection[1] },
//         { x: "Mar", y: actErection[2] },
//         { x: "Apr", y: actErection[3] },
//         { x: "May", y: actErection[4] },
//         { x: "Jun", y: actErection[5] },
//         { x: "Jul", y: actErection[6] },
//         { x: "Aug", y: actErection[7] },
//         { x: "Sep", y: actErection[8] },
//         { x: "Oct", y: actErection[9] },
//         { x: "Nov", y: actErection[10] },
//         { x: "Dec", y: actErection[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];
//   const dataHistErection = {
//     planned: [
//       { x: "Jan", y: plannedErection[0] },
//       { x: "Feb", y: plannedErection[1] },
//       { x: "Mar", y: plannedErection[2] },
//       { x: "Apr", y: plannedErection[3] },
//       { x: "May", y: plannedErection[4] },
//       { x: "Jun", y: plannedErection[5] },
//       { x: "Jul", y: plannedErection[6] },
//       { x: "Aug", y: plannedErection[7] },
//       { x: "Sep", y: plannedErection[8] },
//       { x: "Oct", y: plannedErection[9] },
//       { x: "Nov", y: plannedErection[10] },
//       { x: "Dec", y: plannedErection[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actErection[0] },
//       { x: "Feb", y: actErection[1] },
//       { x: "Mar", y: actErection[2] },
//       { x: "Apr", y: actErection[3] },
//       { x: "May", y: actErection[4] },
//       { x: "Jun", y: actErection[5] },
//       { x: "Jul", y: actErection[6] },
//       { x: "Aug", y: actErection[7] },
//       { x: "Sep", y: actErection[8] },
//       { x: "Oct", y: actErection[9] },
//       { x: "Nov", y: actErection[10] },
//       { x: "Dec", y: actErection[11] },
//     ],
//   };
//   useEffect(() => {
//     ///////////////////////// pulling cable  ///////////////////////////////////////////////////////////

//     async function fetchDataPulling() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       // console.log(project);

//       var pullinstrplanned = project.map(function (projects) {
//         //console.log(projects["pullinstrplanned"]);
//         return projects["pullinstrplanned"];
//       });

//       var pullinstract = project.map(function (projects) {
//         //console.log(projects["pullinstract"]);
//         return projects["pullinstract"];
//       });

//       setPlannedPulling(pullinstrplanned);
//       setActPulling(pullinstract);
//     }

//     ///////////////////////// Glanding an Conx Cable ///////////////////////////////////////////////////////////

//     async function fetchDataGlanding() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       // console.log(project);

//       var glandinstruplanned = project.map(function (projects) {
//         //console.log(projects["glandinstruplanned"]);
//         return projects["glandinstruplanned"];
//       });

//       var glandinstruact = project.map(function (projects) {
//         //console.log(projects["actpifw"]);
//         return projects["glandinstruact"];
//       });

//       setPlannedGlanding(glandinstruplanned);
//       setActGlanding(glandinstruact);
//     }

//     /////////////////////////  Equipment Erection  ///////////////////////////////////////////////////////////

//     async function fetchDataErection() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       // console.log(project);

//       var erectioninstruplanned = project.map(function (projects) {
//         //console.log(projects["erectioninstruplanned"]);
//         return projects["erectioninstruplanned"];
//       });

//       var erectioninstruact = project.map(function (projects) {
//         //console.log(projects["actpifw"]);
//         return projects["erectioninstruact"];
//       });

//       setPlannedErection(erectioninstruplanned);
//       setActErection(erectioninstruact);
//     }

//     fetchDataErection();
//     fetchDataGlanding();
//     fetchDataPulling();
//   }, []);
//    return (
//      <KeyboardAwareScrollView
//        style={{
//          marginVertical: 40,
//          backgroundColor: "#ffffffff",
//          marginTop: 3,
//          marginBottom: 3,
//        }}
//        showsVerticalScrollIndicator={false}
//      >
//        {UpdatedDate ? (
//          <View>
//            <Text style={styles.UpDate}>
//              {" "}
//              Updated Date : <Text> {UpdatedDate} </Text>
//            </Text>
//            <View
//              style={{
//                borderBottomWidth: 2,
//                borderColor: "#ddd",
//                marginTop: 5,
//                marginBottom: 30,
//              }}
//            ></View>
//          </View>
//        ) : null}
//        {state.params.data["type"] === "Pulling Cable" ? (
//          <View>
//            <Card>
//              <Text style={styles.TitleHeader}>{state.params.data["type"]}</Text>
//            </Card>
//            <View
//              style={{
//                marginTop: 5,
//                marginBottom: 30,
//              }}
//            ></View>
//             <ScrollView horizontal={true}>
//              <VictoryChart>
//                <VictoryGroup offset={6}>
//                  <VictoryBar
//                    data={dataHistPulling.planned}
//                    style={{
//                      data: {
//                        fill: "orange",
//                      },
//                    }}
//                  />
//                  <VictoryBar
//                    data={dataHistPulling.actual}
//                    style={{
//                      data: {
//                        fill: "#008DDE",
//                      },
//                    }}
//                  />
//                </VictoryGroup>
//                <VictoryLegend
//                  x={Dimensions.get("screen").width / 2 - 50}
//                  orientation="horizontal"
//                  gutter={20}
//                  //title="Legend"
//                  centerTitle
//                  style={{
//                    marginBottom: 20,
//                  }}
//                  data={[
//                    { name: "Planned", symbol: { fill: "orange" } },
//                    { name: "Actual", symbol: { fill: "#008DDE" } },
//                  ]}
//                />
//              </VictoryChart>
//            </ScrollView>

//            <View
//              style={{
//                borderBottomWidth: 2,
//                borderColor: "#ddd",
//                marginTop: 5,
//                marginBottom: 30,
//              }}
//            ></View>
//            <ScrollView horizontal={true}>
//              <PureChart data={curveDataPulling} type="line" />
//            </ScrollView>
//          </View>
//        ) : null}
//        {state.params.data["type"] === "Glanding an Connection Cable" ? (
//          <View>
//            <Card>
//              <Text style={styles.TitleHeader}>{state.params.data["type"]}</Text>
//            </Card>
//            <View
//              style={{
//                marginTop: 5,
//                marginBottom: 30,
//              }}
//            ></View>
//            <ScrollView horizontal={true}>
//              <VictoryChart>
//                <VictoryGroup offset={5}>
//                  <VictoryBar
//                    data={dataHistGlanding.planned}
//                    style={{
//                      data: {
//                        fill: "orange",
//                      },
//                    }}
//                  />
//                  <VictoryBar
//                    data={dataHistGlanding.actual}
//                    style={{
//                      data: {
//                        fill: "#008DDE",
//                      },
//                    }}
//                  />
//                </VictoryGroup>
//                <VictoryLegend
//                  x={Dimensions.get("screen").width / 2 - 50}
//                  orientation="horizontal"
//                  gutter={20}
//                  centerTitle
//                  style={{
//                    marginBottom: 20,
//                  }}
//                  data={[
//                    { name: "Planned", symbol: { fill: "orange" } },
//                    { name: "Actual", symbol: { fill: "#008DDE" } },
//                  ]}
//                />
//              </VictoryChart>
//            </ScrollView>

//            <View
//              style={{
//                borderBottomWidth: 2,
//                borderColor: "#ddd",
//                marginTop: 5,
//                marginBottom: 30,
//              }}
//            ></View>
//            <ScrollView horizontal={true}>
//              <PureChart data={curveDataGlanding} type="line" />
//            </ScrollView>
//          </View>
//        ) : null}
//        {state.params.data["type"] === "Equipment Erection" ? (
//          <View>
//            <Card>
//              <Text style={styles.TitleHeader}>{state.params.data["type"]}</Text>
//            </Card>
//            <View
//              style={{
//                marginTop: 5,
//                marginBottom: 30,
//              }}
//            ></View>
//            <ScrollView horizontal={true}>
//              <VictoryChart>
//                <VictoryGroup offset={5}>
//                  <VictoryBar
//                    data={dataHistErection.planned}
//                    style={{
//                      data: {
//                        fill: "orange",
//                      },
//                    }}
//                  />
//                  <VictoryBar
//                    data={dataHistErection.actual}
//                    style={{
//                      data: {
//                        fill: "#008DDE",
//                      },
//                    }}
//                  />
//                </VictoryGroup>
//                <VictoryLegend
//                  x={Dimensions.get("screen").width / 2 - 50}
//                  orientation="horizontal"
//                  gutter={20}
//                  centerTitle
//                  style={{
//                    marginBottom: 20,
//                  }}
//                  data={[
//                    { name: "Planned", symbol: { fill: "orange" } },
//                    { name: "Actual", symbol: { fill: "#008DDE" } },
//                  ]}
//                />
//              </VictoryChart>
//            </ScrollView>

//            <View
//              style={{
//                borderBottomWidth: 2,
//                borderColor: "#ddd",
//                marginTop: 5,
//                marginBottom: 30,
//              }}
//            ></View>
//            <ScrollView horizontal={true}>
//              <PureChart data={curveDataErection} type="line" />
//            </ScrollView>
//          </View>
//        ) : null}
//      </KeyboardAwareScrollView>
//    );
// }
// const styles = StyleSheet.create({
//   sectionChart: { width: 600 },
//   Header: {
//     marginBottom: 50,
//     borderBottomWidth: 1,
//     borderColor: "#ddd",
//     marginTop: 10,
//     display: "flex",
//     flexDirection: "row",
//   },
//   UpDate: {
//     textAlign: "left",
//     marginLeft: 40,
//     marginTop: 20,
//     marginBottom: 40,
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   TitleHeader: {
//     fontWeight: "200",
//     fontSize: 20,
//     marginTop: 15,

//     textAlign: "center",
//   },
// });