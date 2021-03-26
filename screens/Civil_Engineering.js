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

// export default function Civil_Engineering(props) {
//   const navigation = props.navigation;
//   const { state } = props.navigation;

//   const UpdatedDate = state.params.UpdatedDate;

//   /////////////////////  Excavation  /////////////////////

//   const [plannedExc, setPlannedExc] = useState([]);
//   const [actExc, setActExc] = useState([]);
//   // console.log(plannedExc);
//   // console.log(actExc);
//   const dataCurveExc = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedExc[0] },
//         { x: "Feb", y: plannedExc[1] },
//         { x: "Mar", y: plannedExc[2] },
//         { x: "Apr", y: plannedExc[3] },
//         { x: "May", y: plannedExc[4] },
//         { x: "jun", y: plannedExc[5] },
//         { x: "Jul", y: plannedExc[6] },
//         { x: "Aug", y: plannedExc[7] },
//         { x: "Sep", y: plannedExc[8] },
//         { x: "Oct", y: plannedExc[9] },
//         { x: "Nov", y: plannedExc[10] },
//         { x: "Dec", y: plannedExc[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actExc[0] },
//         { x: "Feb", y: actExc[1] },
//         { x: "Mar", y: actExc[2] },
//         { x: "Apr", y: actExc[3] },
//         { x: "May", y: actExc[4] },
//         { x: "Jun", y: actExc[5] },
//         { x: "Jul", y: actExc[6] },
//         { x: "Aug", y: actExc[7] },
//         { x: "Sep", y: actExc[8] },
//         { x: "Oct", y: actExc[9] },
//         { x: "Nov", y: actExc[10] },
//         { x: "Dec", y: actExc[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];
//  const month = [
//    "Jan",
//    "Feb",
//    "Mar",
//    "Apr",
//    "May",
//    "Jun",
//    "Jul",
//    "Aug",
//    "Sep",
//    "Oct",
//  ];
//   const DataHistExc = {
//     planned: [
//       { x: "Jan", y: plannedExc[0] },
//       { x: "Feb", y: plannedExc[1] },
//       { x: "Mar", y: plannedExc[2] },
//       { x: "Apr", y: plannedExc[3] },
//       { x: "May", y: plannedExc[4] },
//       { x: "Jun", y: plannedExc[5] },
//       { x: "Jul", y: plannedExc[6] },
//       { x: "Aug", y: plannedExc[7] },
//       { x: "Sep", y: plannedExc[8] },
//       { x: "Oct", y: plannedExc[9] },
//       { x: "Nov", y: plannedExc[10] },
//       { x: "Dec", y: plannedExc[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actExc[0] },
//       { x: "Feb", y: actExc[1] },
//       { x: "Mar", y: actExc[2] },
//       { x: "Apr", y: actExc[3] },
//       { x: "May", y: actExc[4] },
//       { x: "Jun", y: actExc[5] },
//       { x: "Jul", y: actExc[6] },
//       { x: "Aug", y: actExc[7] },
//       { x: "Sep", y: actExc[8] },
//       { x: "Oct", y: actExc[9] },
//       { x: "Nov", y: actExc[10] },
//       { x: "Dec", y: actExc[11] },
//     ],
//   };
//   ////////////////////////////////  Rebars ///////////////////////////////////////////
//   const [plannedReb, setPlannedReb] = useState([]);
//   const [actReb, setActReb] = useState([]);
//   // console.log(plannedReb);
//   // console.log(actReb);
//   const dataCurveReb = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedReb[0] },
//         { x: "Feb", y: plannedReb[1] },
//         { x: "Mar", y: plannedReb[2] },
//         { x: "Apr", y: plannedReb[3] },
//         { x: "May", y: plannedReb[4] },
//         { x: "jun", y: plannedReb[5] },
//         { x: "Jul", y: plannedReb[6] },
//         { x: "Aug", y: plannedReb[7] },
//         { x: "Sep", y: plannedReb[8] },
//         { x: "Oct", y: plannedReb[9] },
//         { x: "Nov", y: plannedReb[10] },
//         { x: "Dec", y: plannedReb[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actReb[0] },
//         { x: "Feb", y: actReb[1] },
//         { x: "Mar", y: actReb[2] },
//         { x: "Apr", y: actReb[3] },
//         { x: "May", y: actReb[4] },
//         { x: "Jun", y: actReb[5] },
//         { x: "Jul", y: actReb[6] },
//         { x: "Aug", y: actReb[7] },
//         { x: "Sep", y: actReb[8] },
//         { x: "Oct", y: actReb[9] },
//         { x: "Nov", y: actReb[10] },
//         { x: "Dec", y: actReb[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];

//   const DataHistReb = {
//     planned: [
//       { x: "Jan", y: plannedReb[0] },
//       { x: "Feb", y: plannedReb[1] },
//       { x: "Mar", y: plannedReb[2] },
//       { x: "Apr", y: plannedReb[3] },
//       { x: "May", y: plannedReb[4] },
//       { x: "Jun", y: plannedReb[5] },
//       { x: "Jul", y: plannedReb[6] },
//       { x: "Aug", y: plannedReb[7] },
//       { x: "Sep", y: plannedReb[8] },
//       { x: "Oct", y: plannedReb[9] },
//       { x: "Nov", y: plannedReb[10] },
//       { x: "Dec", y: plannedReb[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actReb[0] },
//       { x: "Feb", y: actReb[1] },
//       { x: "Mar", y: actReb[2] },
//       { x: "Apr", y: actReb[3] },
//       { x: "May", y: actReb[4] },
//       { x: "Jun", y: actReb[5] },
//       { x: "Jul", y: actReb[6] },
//       { x: "Aug", y: actReb[7] },
//       { x: "Sep", y: actReb[8] },
//       { x: "Oct", y: actReb[9] },
//       { x: "Nov", y: actReb[10] },
//       { x: "Dec", y: actReb[11] },
//     ],
//   };
//   ////////////////////////////////  concrete  ///////////////////////////////////////////
//   const [plannedConcrete, setPlannedConcrete] = useState([]);
//   const [actConcrete, setActConcrete] = useState([]);
//   // console.log(plannedConcrete);
//   // console.log(actConcrete);
//   const dataCurveCon = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedConcrete[0] },
//         { x: "Feb", y: plannedConcrete[1] },
//         { x: "Mar", y: plannedConcrete[2] },
//         { x: "Apr", y: plannedConcrete[3] },
//         { x: "May", y: plannedConcrete[4] },
//         { x: "jun", y: plannedConcrete[5] },
//         { x: "Jul", y: plannedConcrete[6] },
//         { x: "Aug", y: plannedConcrete[7] },
//         { x: "Sep", y: plannedConcrete[8] },
//         { x: "Oct", y: plannedConcrete[9] },
//         { x: "Nov", y: plannedConcrete[10] },
//         { x: "Dec", y: plannedConcrete[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actConcrete[0] },
//         { x: "Feb", y: actConcrete[1] },
//         { x: "Mar", y: actConcrete[2] },
//         { x: "Apr", y: actConcrete[3] },
//         { x: "May", y: actConcrete[4] },
//         { x: "Jun", y: actConcrete[5] },
//         { x: "Jul", y: actConcrete[6] },
//         { x: "Aug", y: actConcrete[7] },
//         { x: "Sep", y: actConcrete[8] },
//         { x: "Oct", y: actConcrete[9] },
//         { x: "Nov", y: actConcrete[10] },
//         { x: "Dec", y: actConcrete[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];
  
 
//   const DataHistCon = {
//     planned: [
//       { x: "Jan", y: plannedConcrete[0] },
//       { x: "Feb", y: plannedConcrete[1] },
//       { x: "Mar", y: plannedConcrete[2] },
//       { x: "Apr", y: plannedConcrete[3] },
//       { x: "May", y: plannedConcrete[4] },
//       { x: "Jun", y: plannedConcrete[5] },
//       { x: "Jul", y: plannedConcrete[6] },
//       { x: "Aug", y: plannedConcrete[7] },
//       { x: "Sep", y: plannedConcrete[8] },
//       { x: "Oct", y: plannedConcrete[9] },
//       { x: "Nov", y: plannedConcrete[10] },
//       { x: "Dec", y: plannedConcrete[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actConcrete[0] },
//       { x: "Feb", y: actConcrete[1] },
//       { x: "Mar", y: actConcrete[2] },
//       { x: "Apr", y: actConcrete[3] },
//       { x: "May", y: actConcrete[4] },
//       { x: "Jun", y: actConcrete[5] },
//       { x: "Jul", y: actConcrete[6] },
//       { x: "Aug", y: actConcrete[7] },
//       { x: "Sep", y: actConcrete[8] },
//       { x: "Oct", y: actConcrete[9] },
//       { x: "Nov", y: actConcrete[10] },
//       { x: "Dec", y: actConcrete[11] },
//     ],
//   };
//   ////////////////////////////////  formwork  ///////////////////////////////////////////

//   const [plannedFormwork, setPlannedFormwork] = useState([]);
//   const [actFormwork, setActFormwork] = useState([]);
//   // console.log(plannedFormwork);
//   // console.log(actFormwork);
//   const dataCurveForm = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedFormwork[0] },
//         { x: "Feb", y: plannedFormwork[1] },
//         { x: "Mar", y: plannedFormwork[2] },
//         { x: "Apr", y: plannedFormwork[3] },
//         { x: "May", y: plannedFormwork[4] },
//         { x: "jun", y: plannedFormwork[5] },
//         { x: "Jul", y: plannedFormwork[6] },
//         { x: "Aug", y: plannedFormwork[7] },
//         { x: "Sep", y: plannedFormwork[8] },
//         { x: "Oct", y: plannedFormwork[9] },
//         { x: "Nov", y: plannedFormwork[10] },
//         { x: "Dec", y: plannedFormwork[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actFormwork[0] },
//         { x: "Feb", y: actFormwork[1] },
//         { x: "Mar", y: actFormwork[2] },
//         { x: "Apr", y: actFormwork[3] },
//         { x: "May", y: actFormwork[4] },
//         { x: "Jun", y: actFormwork[5] },
//         { x: "Jul", y: actFormwork[6] },
//         { x: "Aug", y: actFormwork[7] },
//         { x: "Sep", y: actFormwork[8] },
//         { x: "Oct", y: actFormwork[9] },
//         { x: "Nov", y: actFormwork[10] },
//         { x: "Dec", y: actFormwork[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];

//   const DataHistForm = {
//     planned: [
//       { x: "Jan", y: plannedFormwork[0] },
//       { x: "Feb", y: plannedFormwork[1] },
//       { x: "Mar", y: plannedFormwork[2] },
//       { x: "Apr", y: plannedFormwork[3] },
//       { x: "May", y: plannedFormwork[4] },
//       { x: "Jun", y: plannedFormwork[5] },
//       { x: "Jul", y: plannedFormwork[6] },
//       { x: "Aug", y: plannedFormwork[7] },
//       { x: "Sep", y: plannedFormwork[8] },
//       { x: "Oct", y: plannedFormwork[9] },
//       { x: "Nov", y: plannedFormwork[10] },
//       { x: "Dec", y: plannedFormwork[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actFormwork[0] },
//       { x: "Feb", y: actFormwork[1] },
//       { x: "Mar", y: actFormwork[2] },
//       { x: "Apr", y: actFormwork[3] },
//       { x: "May", y: actFormwork[4] },
//       { x: "Jun", y: actFormwork[5] },
//       { x: "Jul", y: actFormwork[6] },
//       { x: "Aug", y: actFormwork[7] },
//       { x: "Sep", y: actFormwork[8] },
//       { x: "Oct", y: actFormwork[9] },
//       { x: "Nov", y: actFormwork[10] },
//       { x: "Dec", y: actFormwork[11] },
//     ],
//   };

//   ////////////////////////////////  Back_filling  ///////////////////////////////////////////

//   const [plannedBack, setPlannedBack] = useState([]);
//   const [actBack, setActBack] = useState([]);
//   // console.log(plannedBack);
//   // console.log(actBack);
//   const dataCurveBack = [
//     {
//       seriesName: "series1",
//       data: [
//         { x: "Jan", y: plannedBack[0] },
//         { x: "Feb", y: plannedBack[1] },
//         { x: "Mar", y: plannedBack[2] },
//         { x: "Apr", y: plannedBack[3] },
//         { x: "May", y: plannedBack[4] },
//         { x: "jun", y: plannedBack[5] },
//         { x: "Jul", y: plannedBack[6] },
//         { x: "Aug", y: plannedBack[7] },
//         { x: "Sep", y: plannedBack[8] },
//         { x: "Oct", y: plannedBack[9] },
//         { x: "Nov", y: plannedBack[10] },
//         { x: "Dec", y: plannedBack[11] },
//       ],
//       color: "orange",
//     },
//     {
//       seriesName: "series2",
//       data: [
//         { x: "Jan", y: actBack[0] },
//         { x: "Feb", y: actBack[1] },
//         { x: "Mar", y: actBack[2] },
//         { x: "Apr", y: actBack[3] },
//         { x: "May", y: actBack[4] },
//         { x: "Jun", y: actBack[5] },
//         { x: "Jul", y: actBack[6] },
//         { x: "Aug", y: actBack[7] },
//         { x: "Sep", y: actBack[8] },
//         { x: "Oct", y: actBack[9] },
//         { x: "Nov", y: actBack[10] },
//         { x: "Dec", y: actBack[11] },
//       ],
//       color: "#008DDE",
//     },
//   ];

//   const DataHistBack = {
//     planned: [
//       { x: "Jan", y: plannedBack[0] },
//       { x: "Feb", y: plannedBack[1] },
//       { x: "Mar", y: plannedBack[2] },
//       { x: "Apr", y: plannedBack[3] },
//       { x: "May", y: plannedBack[4] },
//       { x: "Jun", y: plannedBack[5] },
//       { x: "Jul", y: plannedBack[6] },
//       { x: "Aug", y: plannedBack[7] },
//       { x: "Sep", y: plannedBack[8] },
//       { x: "Oct", y: plannedBack[9] },
//       { x: "Nov", y: plannedBack[10] },
//       { x: "Dec", y: plannedBack[11] },
//     ],
//     actual: [
//       { x: "Jan", y: actBack[0] },
//       { x: "Feb", y: actBack[1] },
//       { x: "Mar", y: actBack[2] },
//       { x: "Apr", y: actBack[3] },
//       { x: "May", y: actBack[4] },
//       { x: "Jun", y: actBack[5] },
//       { x: "Jul", y: actBack[6] },
//       { x: "Aug", y: actBack[7] },
//       { x: "Sep", y: actBack[8] },
//       { x: "Oct", y: actBack[9] },
//       { x: "Nov", y: actBack[10] },
//       { x: "Dec", y: actBack[11] },
//     ],
//   };
//   useEffect(() => {
//     ////////////////////////////////  Excavation ///////////////////////////////////////////

//     async function fetchDataExc() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       //console.log(project);

//       var excavplanned = project.map(function (projects) {
//         return projects["excavplanned"];
//       });

//       var excavact = project.map(function (projects) {
//         return projects["excavact"];
//       });

//       // console.log(excavplanned);
//       // console.log(excavact);

//       setPlannedExc(excavplanned);
//       setActExc(excavact);
//     }
//     ////////////////////////////////  Rebars ///////////////////////////////////////////

//     async function fetchDataReb() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//      // console.log(project);

//       var rebarsplanned = project.map(function (projects) {
//         return projects["rebarsplanned"];
//       });

//       var rebarsact = project.map(function (projects) {
//         return projects["rebarsact"];
//       });

//       // console.log(rebarsplanned);
//       // console.log(rebarsact);

//       setPlannedReb(rebarsplanned);
//       setActReb(rebarsact);
//     }
//     ////////////////////////////////  concrete  ///////////////////////////////////////////

//     async function fetchDataConcrete() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       // console.log(project);
      
//       var concretplanned = project.map(function (projects) {
//         return projects["concretplanned"];
//       });

//       var concretact = project.map(function (projects) {
//         return projects["concretact"];
//       });

//       // console.log(concretplanned);
//       // console.log(concretact);

//       setPlannedConcrete(concretplanned);
//       setActConcrete(concretact);
//     }
//     ////////////////////////////////  formwork  ///////////////////////////////////////////

//     async function fetchDataFormwork() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//      // console.log(project);

//       var formworkplanned = project.map(function (projects) {
//         return projects["formworkplanned"];
//       });

//       var formworkact = project.map(function (projects) {
//         return projects["formworkact"];
//       });

//       // console.log(formworkplanned);
//       // console.log(formworkact);

//       setPlannedFormwork(formworkplanned);
//       setActFormwork(formworkact);
//     }

//     ////////////////////////////////  back_filling  ///////////////////////////////////////////

//     async function fetchDataBack() {
//       const res = await fetch(
//         "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
//       );

//       const project = await res.json();
//       //console.log(project);

//       var backplanned = project.map(function (projects) {
//         return projects["backplanned"];
//       });

//       var backact = project.map(function (projects) {
//         return projects["backact"];
//       });

//       // console.log(backplanned);
//       // console.log(backact);

//       setPlannedBack(backplanned);
//       setActBack(backact);
//     }
//     fetchDataBack();
//     fetchDataFormwork();
//     fetchDataConcrete();
//     fetchDataExc();
//     fetchDataReb();
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
//       <View>
//         {state.params.data["type"] === "Excavation" ? (
//           <View>
//             {UpdatedDate ? (
//               <View>
//                 <Text style={styles.UpDate}>
//                   {" "}
//                   Updated Date : <Text> {UpdatedDate} </Text>
//                 </Text>
//                 <View
//                   style={{
//                     borderBottomWidth: 2,
//                     borderColor: "#ddd",
//                     marginTop: 5,
//                     marginBottom: 30,
//                   }}
//                 ></View>
//               </View>
//             ) : null}
//             <Card>
//               <Text style={styles.TitleHeader}>
//                 {state.params.data["type"]}
//               </Text>
//             </Card>
//             <View
//               style={{
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <VictoryChart>
//                 <VictoryGroup offset={5}>
//                   <VictoryBar
//                     data={DataHistExc.planned}
//                     style={{
//                       data: {
//                         fill: "orange",
//                       },
//                     }}
//                   />
//                   <VictoryBar
//                     data={DataHistExc.actual}
//                     style={{
//                       data: {
//                         fill: "#008DDE",
//                       },
//                     }}
//                   />
//                 </VictoryGroup>
//                 <VictoryLegend
//                   x={Dimensions.get("screen").width / 2 - 50}
//                   orientation="horizontal"
//                   gutter={20}
//                   //title="Legend"
//                   centerTitle
//                   style={{
//                     marginBottom: 20,
//                   }}
//                   data={[
//                     { name: "Planned", symbol: { fill: "orange" } },
//                     { name: "Actual", symbol: { fill: "#008DDE" } },
//                   ]}
//                 />
//               </VictoryChart>
//             </ScrollView>

//             <View
//               style={{
//                 borderBottomWidth: 2,
//                 borderColor: "#ddd",
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <PureChart data={dataCurveExc} type="line" />
//             </ScrollView>
//           </View>
//         ) : null}
//         {state.params.data["type"] === "Rebars" ? (
//           <View>
//             {UpdatedDate ? (
//               <View>
//                 <Text style={styles.UpDate}>
//                   {" "}
//                   Updated Date : <Text> {UpdatedDate} </Text>
//                 </Text>
//                 <View
//                   style={{
//                     borderBottomWidth: 2,
//                     borderColor: "#ddd",
//                     marginTop: 5,
//                     marginBottom: 30,
//                   }}
//                 ></View>
//               </View>
//             ) : null}
//             <Card>
//               <Text style={styles.TitleHeader}>
//                 {state.params.data["type"]}
//               </Text>
//             </Card>
//             <View
//               style={{
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <VictoryChart>
//                 <VictoryGroup offset={5}>
//                   <VictoryBar
//                     data={DataHistReb.planned}
//                     style={{
//                       data: {
//                         fill: "orange",
//                       },
//                     }}
//                   />
//                   <VictoryBar
//                     data={DataHistReb.actual}
//                     style={{
//                       data: {
//                         fill: "#008DDE",
//                       },
//                     }}
//                   />
//                 </VictoryGroup>
//                 <VictoryLegend
//                   x={Dimensions.get("screen").width / 2 - 50}
//                   orientation="horizontal"
//                   gutter={20}
//                   //title="Legend"
//                   centerTitle
//                   style={{
//                     marginBottom: 20,
//                   }}
//                   data={[
//                     { name: "Planned", symbol: { fill: "orange" } },
//                     { name: "Actual", symbol: { fill: "#008DDE" } },
//                   ]}
//                 />
//               </VictoryChart>
//             </ScrollView>

//             <View
//               style={{
//                 borderBottomWidth: 2,
//                 borderColor: "#ddd",
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <PureChart data={dataCurveReb} type="line" />
//             </ScrollView>
//           </View>
//         ) : null}
//         {state.params.data["type"] === "Concrete" ? (
//           <View>
//             {UpdatedDate ? (
//               <View>
//                 <Text style={styles.UpDate}>
//                   {" "}
//                   Updated Date : <Text> {UpdatedDate} </Text>
//                 </Text>
//                 <View
//                   style={{
//                     borderBottomWidth: 2,
//                     borderColor: "#ddd",
//                     marginTop: 5,
//                     marginBottom: 30,
//                   }}
//                 ></View>
//               </View>
//             ) : null}
//             <Card>
//               <Text style={styles.TitleHeader}>
//                 {state.params.data["type"]}
//               </Text>
//             </Card>
//             <View
//               style={{
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <VictoryChart>
//                 <VictoryGroup offset={5}>
//                   <VictoryBar
//                     data={DataHistCon.planned}
//                     style={{
//                       data: {
//                         fill: "orange",
//                       },
//                     }}
//                   />
//                   <VictoryBar
//                     data={DataHistCon.actual}
//                     style={{
//                       data: {
//                         fill: "#008DDE",
//                       },
//                     }}
//                   />
//                 </VictoryGroup>
//                 <VictoryLegend
//                   x={Dimensions.get("screen").width / 2 - 50}
//                   orientation="horizontal"
//                   gutter={20}
//                   //title="Legend"
//                   centerTitle
//                   style={{
//                     marginBottom: 20,
//                   }}
//                   data={[
//                     { name: "Planned", symbol: { fill: "orange" } },
//                     { name: "Actual", symbol: { fill: "#008DDE" } },
//                   ]}
//                 />
//               </VictoryChart>
//             </ScrollView>

//             <View
//               style={{
//                 borderBottomWidth: 2,
//                 borderColor: "#ddd",
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <PureChart data={dataCurveCon} type="line" />
//             </ScrollView>
//           </View>
//         ) : null}
//         {state.params.data["type"] === "Formwork" ? (
//           <View>
//             {UpdatedDate ? (
//               <View>
//                 <Text style={styles.UpDate}>
//                   {" "}
//                   Updated Date : <Text> {UpdatedDate} </Text>
//                 </Text>
//                 <View
//                   style={{
//                     borderBottomWidth: 2,
//                     borderColor: "#ddd",
//                     marginTop: 5,
//                     marginBottom: 30,
//                   }}
//                 ></View>
//               </View>
//             ) : null}
//             <Card>
//               <Text style={styles.TitleHeader}>
//                 {state.params.data["type"]}
//               </Text>
//             </Card>
//             <View
//               style={{
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <VictoryChart>
//                 <VictoryGroup offset={5}>
//                   <VictoryBar
//                     data={DataHistForm.planned}
//                     style={{
//                       data: {
//                         fill: "orange",
//                       },
//                     }}
//                   />
//                   <VictoryBar
//                     data={DataHistForm.actual}
//                     style={{
//                       data: {
//                         fill: "#008DDE",
//                       },
//                     }}
//                   />
//                 </VictoryGroup>
//                 <VictoryLegend
//                   x={Dimensions.get("screen").width / 2 - 50}
//                   orientation="horizontal"
//                   gutter={20}
//                   //title="Legend"
//                   centerTitle
//                   style={{
//                     marginBottom: 20,
//                   }}
//                   data={[
//                     { name: "Planned", symbol: { fill: "orange" } },
//                     { name: "Actual", symbol: { fill: "#008DDE" } },
//                   ]}
//                 />
//               </VictoryChart>
//             </ScrollView>

//             <View
//               style={{
//                 borderBottomWidth: 2,
//                 borderColor: "#ddd",
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <PureChart data={dataCurveForm} type="line" />
//             </ScrollView>
//           </View>
//         ) : null}
//         {state.params.data["type"] === "Backfilling" ? (
//           <View>
//             {UpdatedDate ? (
//               <View>
//                 <Text style={styles.UpDate}>
//                   {" "}
//                   Updated Date : <Text> {UpdatedDate} </Text>
//                 </Text>
//                 <View
//                   style={{
//                     borderBottomWidth: 2,
//                     borderColor: "#ddd",
//                     marginTop: 5,
//                     marginBottom: 30,
//                   }}
//                 ></View>
//               </View>
//             ) : null}
//             <Card>
//               <Text style={styles.TitleHeader}>
//                 {state.params.data["type"]}
//               </Text>
//             </Card>
//             <View
//               style={{
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <VictoryChart>
//                 <VictoryGroup offset={5}>
//                   <VictoryBar
//                     data={DataHistBack.planned}
//                     style={{
//                       data: {
//                         fill: "orange",
//                       },
//                     }}
//                   />
//                   <VictoryBar
//                     data={DataHistBack.actual}
//                     style={{
//                       data: {
//                         fill: "#008DDE",
//                       },  
//                     }}
//                   />
//                 </VictoryGroup>
//                 <VictoryLegend
//                   x={Dimensions.get("screen").width / 2 - 50}
//                   orientation="horizontal"
//                   gutter={20}
//                   //title="Legend"
//                   centerTitle
//                   style={{
//                     marginBottom: 20,
//                   }}
//                   data={[
//                     { name: "Planned", symbol: { fill: "orange" } },
//                     { name: "Actual", symbol: { fill: "#008DDE" } },
//                   ]}
//                 />
//               </VictoryChart>
//             </ScrollView>

//             <View
//               style={{
//                 borderBottomWidth: 2,
//                 borderColor: "#ddd",
//                 marginTop: 5,
//                 marginBottom: 30,
//               }}
//             ></View>
//             <ScrollView horizontal={true}>
//               <PureChart data={dataCurveBack} type="line" />
//             </ScrollView>
//           </View>
//         ) : null}
//       </View>
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
