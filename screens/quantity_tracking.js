import React, { useState, useEffect } from "react";
import { Block, Input } from "../components";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { BottomNavigation, TextInput, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Button, Card, ListItem } from "react-native-elements";
import { VictoryAxis } from "victory-axis";
import { VictoryLegend } from "victory-legend";
import {
  VictoryChart,
  //VictoryGroup,
  VictoryBar,
  VictoryTooltip,
} from "../Victory";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PureChart from "react-native-pure-chart";
import { VictoryGroup } from "victory-group";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function Piping_Engeneering(props) {
  const navigation = props.navigation;
  const { state } = props.navigation;
  const UpdatedDate = state.params.UpdatedDate;
  //////////////////////////// conso Qty  ////////////////////////////////////////////////

  const [plannedQty, setPlannedQty] = useState([]);
  const [actQty, setActQty] = useState([]);
   const [dataTesting, setDataTesting] = useState([]);
  console.log(dataTesting);
  //console.log(state.params.data["type"]);

  // const object = { x: month, y: plannedQty };

  const element = [];
  const test = [];
  // for (let i = 0; i < month.length; i++) {
  //   //console.log(month[i]);
  //   return (element = month[i]);
  // }

  const myStringArray = [
    "jan",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  // var arrayLength = myStringArray.length;
 
  // for (var i = 0; i < arrayLength; i++) {
  //   return (element = myStringArray[i]);
  // }
  // for (let j = 0; j < plannedQty.length; j++) {
  //   return (test = plannedQty[j]);
  // }
  
  //console.log({ x: element, y: test });
  const curveData = [
    {
      seriesName: "series1",
      data: [
        //dataTesting,
        { x: "jan", y: plannedQty[0] },
        { x: "feb", y: plannedQty[1] },
        { x: "Mar", y: plannedQty[2] },
        { x: "Apr", y: plannedQty[3] },
        { x: "May", y: plannedQty[4] },
        { x: "Jun", y: plannedQty[5] },
        { x: "Jul", y: plannedQty[6] },
        { x: "Aug", y: plannedQty[7] },
        { x: "Sep", y: plannedQty[8] },
        { x: "Oct", y: plannedQty[9] },
        { x: "Nov", y: plannedQty[10] },
        { x: "Dec", y: plannedQty[11] },
      ],
      color: "orange",
    },
    {
      seriesName: "series2",
      data: [
       // dataTesting,
        { x: "jan", y: actQty[0] },
        { x: "feb", y: actQty[1] },
        { x: "Mar", y: actQty[2] },
        { x: "Apr", y: actQty[3] },
        { x: "May", y: actQty[4] },
        { x: "Jun", y: actQty[5] },
        { x: "Jul", y: actQty[6] },
        { x: "Aug", y: actQty[7] },
        { x: "Sep", y: actQty[8] },
        { x: "Oct", y: actQty[9] },
        { x: "Nov", y: actQty[10] },
        { x: "Dec", y: actQty[11] },
      ],
      color: "#008DDE",
    },
  ];
console.log(dataTesting);
  const data = {
    planned: [
      //dataTesting,

      { x: "jan", y: plannedQty[0] },
      { x: "feb", y: plannedQty[1] },
      { x: "Mar", y: plannedQty[2] },
      { x: "Apr", y: plannedQty[3] },
      { x: "May", y: plannedQty[4] },
      { x: "Jun", y: plannedQty[5] },
      { x: "Jul", y: plannedQty[6] },
      { x: "Aug", y: plannedQty[7] },
      { x: "Sep", y: plannedQty[8] },
      { x: "Oct", y: plannedQty[9] },
      { x: "Nov", y: plannedQty[10] },
      { x: "Dec", y: plannedQty[11] },
    ],
    actual: [
      // dataTesting,
      { x: "jan", y: actQty[0] },
      { x: "feb", y: actQty[1] },
      { x: "Mar", y: actQty[2] },
      { x: "Apr", y: actQty[3] },
      { x: "May", y: actQty[4] },
      { x: "Jun", y: actQty[5] },
      { x: "Jul", y: actQty[6] },
      { x: "Aug", y: actQty[7] },
      { x: "Sep", y: actQty[8] },
      { x: "Oct", y: actQty[9] },
      { x: "Nov", y: actQty[10] },
      { x: "Dec", y: actQty[11] },
    ],
  };

  //////////////////////////// conso Piping FW  ////////////////////////////////////////////////

  // const [plannedPiFw, setPlannedPiFw] = useState([]);
  // const [actPiFw, setActPiFw] = useState([]);

  // const curveDataFw = [
  //   {
  //     seriesName: "series1",
  //     data: [
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
  //     color: "orange",
  //   },
  //   {
  //     seriesName: "series2",
  //     data: [
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
  //     color: "#008DDE",
  //   },
  // ];

  // const dataFw = {
  //   planned: [
  //     { x: "Jan", y: plannedPiFw[0] },
  //     { x: "Feb", y: plannedPiFw[1] },
  //     { x: "Mar", y: plannedPiFw[2] },
  //     { x: "Apr", y: plannedPiFw[3] },
  //     { x: "May", y: plannedPiFw[4] },
  //     { x: "Jun", y: plannedPiFw[5] },
  //     { x: "Jul", y: plannedPiFw[6] },
  //     { x: "Aug", y: plannedPiFw[7] },
  //     { x: "Sep", y: plannedPiFw[8] },
  //     { x: "Oct", y: plannedPiFw[9] },
  //     { x: "Nov", y: plannedPiFw[10] },
  //     { x: "Dec", y: plannedPiFw[11] },
  //   ],
  //   actual: [
  //     { x: "Jan", y: actPiFw[0] },
  //     { x: "Feb", y: actPiFw[1] },
  //     { x: "Mar", y: actPiFw[2] },
  //     { x: "Apr", y: actPiFw[3] },
  //     { x: "May", y: actPiFw[4] },
  //     { x: "Jun", y: actPiFw[5] },
  //     { x: "Jul", y: actPiFw[6] },
  //     { x: "Aug", y: actPiFw[7] },
  //     { x: "Sep", y: actPiFw[8] },
  //     { x: "Oct", y: actPiFw[9] },
  //     { x: "Nov", y: actPiFw[10] },
  //     { x: "Dec", y: actPiFw[11] },
  //   ],
  // };
  useEffect(() => {
    //  const arr = [1, 2, 3, 4, 5, 6, 1, 1, 1, 2, 2, 2, 2, 2, 5, 9, 8, 6];
    //  const sumArr = [];
    //  function sumArray(arr) {
    //    if (arr.length) {
    //      sumArr.push(
    //        [arr[0], arr[1], arr[2], arr[3], arr[4], arr[4], arr[5]].reduce(
    //          (acc, cur) => (cur ? acc + cur : acc),
    //          0
    //        )
    //      );
    //      sumArray(arr.slice(3));
    //    } else return;
    //   //  for (let i = 0; i < arr.length; i++) {
    //   //    if (i % 7 === 0) {
    //   //      sumArr.push(0);
    //   //    }
    //   //    sumArr[sumArr.length - 1] += arr[i];
    //   //  }
    //  }
    //  console.log(sumArr);

    async function fetchData() {
      const res = await fetch(
        "https://localhost:3000/conso/" +
          state.params.data["MPROJECT_id"] +
          "/" +
          state.params.data["id"]
      );

      const project = await res.json();
      console.log(project);
      const SumPlannedQty = [];
      const SumActQty = [];
      var plannedqty = project.map(function (projects) {
        //console.log(projects["plannedqty"]);
        return projects["plannedqty"];
      });

      var actualqty = project.map(function (projects) {
        //console.log(projects["actualqty"]);
        return projects["actualqty"];
      });
      for (let i = 0; i < plannedqty.length; i++) {
        if (i % 7 === 0) {
          SumPlannedQty.push(0);
        }
        SumPlannedQty[SumPlannedQty.length - 1] += plannedqty[i];
      }
      for (let i = 0; i < actualqty.length; i++) {
        if (i % 7 === 0) {
          SumActQty.push(0);
        }
        SumActQty[SumActQty.length - 1] += actualqty[i];
      }
      console.log(SumPlannedQty);
      console.log(SumActQty);

      setPlannedQty(plannedqty);
      setActQty(actualqty);

      const dataTest = [],
        months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        for (const [i, month] of months.entries())
          dataTest.push( { x: month, y: plannedqty[i] } );
          console.log(dataTest);
          console.log(plannedQty);
        var plannedataTest = dataTest.map(function (dataTests) {
            console.log(dataTests);
            return dataTests;
        });
        setDataTesting(plannedataTest);
    }
    ///////////////////////// conso piping FW ///////////////////////////////////////////////////

    // async function fetchDataPipingFW() {

    //   const res = await fetch(
    //     "https://localhost:3000/conso/" + state.params.data["MPROJECT_id"]
    //   );

    //   const project = await res.json();
    //   // console.log(project);

    //   var planpifw = project.map(function (projects) {
    //     //console.log(projects["planpifw"]);
    //     return projects["planpifw"];
    //   });

    //   var actpifw = project.map(function (projects) {
    //     //console.log(projects["actpifw"]);
    //     return projects["actpifw"];
    //   });

    //   setPlannedPiFw(planpifw);
    //   setActPiFw(actpifw);
    // }

    // fetchDataPipingFW();
    fetchData();
    //sumArray(arr);
  }, []);
  return (
    <KeyboardAwareScrollView
      style={{
        marginVertical: 40,
        backgroundColor: "#ffffffff",
        marginTop: 3,
        marginBottom: 3,
      }}
      showsVerticalScrollIndicator={false}
    >
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
        <Card>
          <Text style={styles.TitleHeader}>{state.params.data["type"]}</Text>
        </Card>
        <View
          style={{
            marginTop: 5,
            marginBottom: 30,
          }}
        ></View>
        <ScrollView horizontal={true}>
          <VictoryChart>
            <VictoryGroup offset={10}>
              <VictoryBar
                data={data.planned}
                style={{
                  data: {
                    fill: "orange",
                  },
                }}
              />
              <VictoryBar
                data={data.actual}
                style={{
                  data: {
                    fill: "#008DDE",
                  },
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
              }}
              data={[
                { name: "Planned", symbol: { fill: "orange" } },
                { name: "Actual", symbol: { fill: "#008DDE" } },
              ]}
            />
          </VictoryChart>
        </ScrollView>

        <View
          style={{
            borderBottomWidth: 2,
            borderColor: "#ddd",
            marginTop: 5,
            marginBottom: 30,
          }}
        ></View>
        <ScrollView horizontal={true}>
          <PureChart data={curveData} type="line" />
        </ScrollView>
      </View>

      {/* {state.params.data["type"] === "Field Welding" ? (
        <View>
          <Card>
            <Text style={styles.TitleHeader}>{state.params.data["type"]}</Text>
          </Card>
          <View
            style={{
              marginTop: 5,
              marginBottom: 30,
            }}
          ></View>
          <ScrollView horizontal={true}>
            <VictoryChart>
              <VictoryGroup offset={5}>
                <VictoryBar
                  data={dataFw.planned}
                  style={{
                    data: {
                      fill: "orange",
                    },
                  }}
                />
                <VictoryBar
                  data={dataFw.actual}
                  style={{
                    data: {
                      fill: "#008DDE",
                    },
                  }}
                />
              </VictoryGroup>
              <VictoryLegend
                x={Dimensions.get("screen").width / 2 - 50}
                orientation="horizontal"
                gutter={20}
                centerTitle
                style={{
                  marginBottom: 20,
                }}
                data={[
                  { name: "Planned", symbol: { fill: "orange" } },
                  { name: "Actual", symbol: { fill: "#008DDE" } },
                ]}
              />
            </VictoryChart>
          </ScrollView>

          <View
            style={{
              borderBottomWidth: 2,
              borderColor: "#ddd",
              marginTop: 5,
              marginBottom: 30,
            }}
          ></View>
          <ScrollView horizontal={true}>
            <PureChart data={curveDataFw} type="line" />
          </ScrollView>
        </View>
      ) : null} */}
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  sectionChart: { width: 600 },
  Header: {
    marginBottom: 50,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
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
  TitleHeader: {
    fontWeight: "200",
    fontSize: 20,
    marginTop: 15,

    textAlign: "center",
  },
});
