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

// export default function Piping_Engeneering(props) {
 

 

//   const navigation = props.navigation;
//   const { state } = props.navigation;
//   const UpdatedDate = state.params.UpdatedDate;
//   //////////////////////////// conso Piping pre  ////////////////////////////////////////////////

//   const [plannedQty, setPlannedQtyPre] = useState([]);
//   const [actQty, setActQtyPre] = useState([]);
//     //console.log(state.params.data["type"]);
//   const curveDataPre = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedQty[0] },
//         { x: "Feb", y: plannedQty[1] },
//         { x: "Mar", y: plannedQty[2] },
//         { x: "Apr", y: plannedQty[3] },
//         { x: "May", y: plannedQty[4] },
//         { x: "Jun", y: plannedQty[5] },
//         { x: "Jul", y: plannedQty[6] },
//         { x: "Aug", y: plannedQty[7] },
//         { x: "Sep", y: plannedQty[8] },
//         { x: "Oct", y: plannedQty[9] },
//         { x: "Nov", y: plannedQty[10] },
//         { x: "Dec", y: plannedQty[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actQty[0] },
//         { x: "Feb", y: actQty[1] },
//         { x: "Mar", y: actQty[2] },
//         { x: "Apr", y: actQty[3] },
//         { x: "May", y: actQty[4] },
//         { x: "Jun", y: actQty[5] },
//         { x: "Jul", y: actQty[6] },
//         { x: "Aug", y: actQty[7] },
//         { x: "Sep", y: actQty[8] },
//         { x: "Oct", y: actQty[9] },
//         { x: "Nov", y: actQty[10] },
//         { x: "Dec", y: actQty[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];

//   const dataPre = {
//     planned: [
//       { x: "Jan", y: plannedQty[0] },
//       { x: "Feb", y: plannedQty[1] },
//       { x: "Mar", y: plannedQty[2] },
//       { x: "Apr", y: plannedQty[3] },
//       { x: "May", y: plannedQty[4] },
//       { x: "Jun", y: plannedQty[5] },
//       { x: "Jul", y: plannedQty[6] },
//       { x: "Aug", y: plannedQty[7] },
//       { x: "Sep", y: plannedQty[8] },
//       { x: "Oct", y: plannedQty[9] },
//       { x: "Nov", y: plannedQty[10] },
//       { x: "Dec", y: plannedQty[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actQty[0] },
//       { x: "Feb", y: actQty[1] },
//       { x: "Mar", y: actQty[2] },
//       { x: "Apr", y: actQty[3] },
//       { x: "May", y: actQty[4] },
//       { x: "Jun", y: actQty[5] },
//       { x: "Jul", y: actQty[6] },
//       { x: "Aug", y: actQty[7] },
//       { x: "Sep", y: actQty[8] },
//       { x: "Oct", y: actQty[9] },
//       { x: "Nov", y: actQty[10] },
//       { x: "Dec", y: actQty[11] },
//     ],
//   };
//   //////////////////////////// conso Piping FW  ////////////////////////////////////////////////

//   const [plannedPiFw, setPlannedPiFw] = useState([]);
//   const [actPiFw, setActPiFw] = useState([]);

//   const curveDataFw = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedPiFw[0] },
//         { x: "Feb", y: plannedPiFw[1] },
//         { x: "Mar", y: plannedPiFw[2] },
//         { x: "Apr", y: plannedPiFw[3] },
//         { x: "May", y: plannedPiFw[4] },
//         { x: "Jun", y: plannedPiFw[5] },
//         { x: "Jul", y: plannedPiFw[6] },
//         { x: "Aug", y: plannedPiFw[7] },
//         { x: "Sep", y: plannedPiFw[8] },
//         { x: "Oct", y: plannedPiFw[9] },
//         { x: "Nov", y: plannedPiFw[10] },
//         { x: "Dec", y: plannedPiFw[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actPiFw[0] },
//         { x: "Feb", y: actPiFw[1] },
//         { x: "Mar", y: actPiFw[2] },
//         { x: "Apr", y: actPiFw[3] },
//         { x: "May", y: actPiFw[4] },
//         { x: "Jun", y: actPiFw[5] },
//         { x: "Jul", y: actPiFw[6] },
//         { x: "Aug", y: actPiFw[7] },
//         { x: "Sep", y: actPiFw[8] },
//         { x: "Oct", y: actPiFw[9] },
//         { x: "Nov", y: actPiFw[10] },
//         { x: "Dec", y: actPiFw[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];

//   const dataFw = {
//     planned: [
//       { x: "Jan", y: plannedPiFw[0] },
//       { x: "Feb", y: plannedPiFw[1] },
//       { x: "Mar", y: plannedPiFw[2] },
//       { x: "Apr", y: plannedPiFw[3] },
//       { x: "May", y: plannedPiFw[4] },
//       { x: "Jun", y: plannedPiFw[5] },
//       { x: "Jul", y: plannedPiFw[6] },
//       { x: "Aug", y: plannedPiFw[7] },
//       { x: "Sep", y: plannedPiFw[8] },
//       { x: "Oct", y: plannedPiFw[9] },
//       { x: "Nov", y: plannedPiFw[10] },
//       { x: "Dec", y: plannedPiFw[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actPiFw[0] },
//       { x: "Feb", y: actPiFw[1] },
//       { x: "Mar", y: actPiFw[2] },
//       { x: "Apr", y: actPiFw[3] },
//       { x: "May", y: actPiFw[4] },
//       { x: "Jun", y: actPiFw[5] },
//       { x: "Jul", y: actPiFw[6] },
//       { x: "Aug", y: actPiFw[7] },
//       { x: "Sep", y: actPiFw[8] },
//       { x: "Oct", y: actPiFw[9] },
//       { x: "Nov", y: actPiFw[10] },
//       { x: "Dec", y: actPiFw[11] },
//     ],
//   };
//   useEffect(() => {
//     ///////////////////////// conso piping pre  ///////////////////////////////////////////////////////////

//     async function fetchDataPipingPre() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       // console.log(project);

//       var planpipre = project.map(function (projects) {
//         //console.log(projects["planpipre"]);
//         return projects["planpipre"];
//       });

//       var Actualpipre = project.map(function (projects) {
//         //console.log(projects["Actualpipre"]);
//         return projects["Actualpipre"];
//       });

//       setPlannedQtyPre(planpipre);
//       setActQtyPre(Actualpipre);
//     }

//     ///////////////////////// conso piping FW ///////////////////////////////////////////////////////////

//     async function fetchDataPipingFW() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       // console.log(project);

//       var planpifw = project.map(function (projects) {
//         //console.log(projects["planpifw"]);
//         return projects["planpifw"];
//       });

//       var actpifw = project.map(function (projects) {
//         //console.log(projects["actpifw"]);
//         return projects["actpifw"];
//       });

//       setPlannedPiFw(planpifw);
//       setActPiFw(actpifw);
//     }

//     fetchDataPipingFW();
//     fetchDataPipingPre();
//   }, []);
//   return (
//     <KeyboardAwareScrollView
//       style={{
//         marginVertical: 40,
//         backgroundColor: "#ffffffff",
//         marginTop: 3,
//         marginBottom: 3,
//       }}
//       showsVerticalScrollIndicator={false}
//     >
//       {UpdatedDate ? (
//         <View>
//           <Text style={styles.UpDate}>
//             {" "}
//             Updated Date : <Text> {UpdatedDate} </Text>
//           </Text>
//           <View
//             style={{
//               borderBottomWidth: 2,
//               borderColor: "#ddd",
//               marginTop: 5,
//               marginBottom: 30,
//             }}
//           ></View>
//         </View>
//       ) : null}
//       {state.params.data["type"] === "Prefabrication" ? (
//         <View>
//           <Card>
//             <Text style={styles.TitleHeader}>{state.params.data["type"]}</Text>
//           </Card>
//           <View
//             style={{
//               marginTop: 5,
//               marginBottom: 30,
//             }}
//           ></View>
//           <ScrollView horizontal={true}>
//             <VictoryChart>
//               {/* <VictoryAxis
//                   label=" "
//                   style={{
//                     axisLabel: {
//                       padding: 38,
//                       fontWeight: "bold",
//                     },
//                   }}
//                 />
//                 <VictoryAxis
//                   dependentAxis
//                   label=" Quantity"
//                   style={{
//                     axisLabel: {
//                       padding: 38,
//                       fontWeight: "bold",
//                       margin: 40,
//                     },
//                   }}
//                 /> */}
//               <VictoryGroup offset={5}>
//                 <VictoryBar
//                   data={dataPre.planned}
//                   style={{
//                     data: {
//                       fill: "orange",
//                     },
//                   }}
//                 />
//                 <VictoryBar
//                   data={dataPre.actual}
//                   style={{
//                     data: {
//                       fill: "#008DDE",
//                     },
//                   }}
//                 />
//               </VictoryGroup>
//               <VictoryLegend
//                 x={Dimensions.get("screen").width / 2 - 50}
//                 orientation="horizontal"
//                 gutter={20}
//                 //title="Legend"
//                 centerTitle
//                 style={{
//                   marginBottom: 20,
//                 }}
//                 data={[
//                   { name: "Planned", symbol: { fill: "orange" } },
//                   { name: "Actual", symbol: { fill: "#008DDE" } },
//                 ]}
//               />
//             </VictoryChart>
//           </ScrollView>

//           <View
//             style={{
//               borderBottomWidth: 2,
//               borderColor: "#ddd",
//               marginTop: 5,
//               marginBottom: 30,
//             }}
//           ></View>
//           <ScrollView horizontal={true}>
//             {/* <Text style={{textAlign:'left'}}> Quantity </Text> */}
//             <PureChart data={curveDataPre} type="line" />
//           </ScrollView>
//         </View>
//       ) : null}
//       {state.params.data["type"] === "Field Welding" ? (
//         <View>
//           <Card>
//             <Text style={styles.TitleHeader}>{state.params.data["type"]}</Text>
//           </Card>
//           <View
//             style={{
//               marginTop: 5,
//               marginBottom: 30,
//             }}
//           ></View>
//           <ScrollView horizontal={true}>
//             <VictoryChart>
//               <VictoryGroup offset={5}>
//                 <VictoryBar
//                   data={dataFw.planned}
//                   style={{
//                     data: {
//                       fill: "orange",
//                     },
//                   }}
//                 />
//                 <VictoryBar
//                   data={dataFw.actual}
//                   style={{
//                     data: {
//                       fill: "#008DDE",
//                     },
//                   }}
//                 />
//               </VictoryGroup>
//               <VictoryLegend
//                 x={Dimensions.get("screen").width / 2 - 50}
//                 orientation="horizontal"
//                 gutter={20}
//                 centerTitle
//                 style={{
//                   marginBottom: 20,
//                 }}
//                 data={[
//                   { name: "Planned", symbol: { fill: "orange" } },
//                   { name: "Actual", symbol: { fill: "#008DDE" } },
//                 ]}
//               />
//             </VictoryChart>
//           </ScrollView>

//           <View
//             style={{
//               borderBottomWidth: 2,
//               borderColor: "#ddd",
//               marginTop: 5,
//               marginBottom: 30,
//             }}
//           ></View>
//           <ScrollView horizontal={true}>
//             <PureChart data={curveDataFw} type="line" />
//           </ScrollView>
//         </View>
//       ) : null}
//     </KeyboardAwareScrollView>
//   );
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