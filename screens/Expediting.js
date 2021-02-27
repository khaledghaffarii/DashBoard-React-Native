

import React, { useState, useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, View, StyleSheet, Picker } from "react-native";
import { VictoryChart, VictoryBar } from "../Victory";

const Master_Document = () => {

    const [index, setIndex] = React.useState(0);
    const [selectedValue, setSelectedValue] = useState("java");

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
  const INSPECTION_Route = () => (
    <View>
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
      <Text>
        <h4 style={{ textAlign: "center" }}> Number_Document_Register </h4>
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 25, width: 150, marginLeft: 85 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="updated date" value="updated date" />
        <Picker.Item label="12-03-2021" value="12-03-2021" />
        <Picker.Item label="12-03-2021" value="13-05-2021" />
        <Picker.Item label="12-03-2021" value="19-06-2021" />
        <Picker.Item label="12-03-2021" value="12-12-2021" />
      </Picker>
      <View>
        <View style={styles.container}>
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
    </View>
  );



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
    const FOB_Route = () => (
      <View>
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
        <Text>
          <h4 style={{ textAlign: "center" }}> Number_Document_Register </h4>
        </Text>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 25, width: 150, marginLeft: 85 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="updated date" value="" />
          <Picker.Item label="12-03-2021" value="" />
        </Picker>
        <View>
          <View style={styles.container}>
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
    );

  const [routes] = React.useState([
    { key: "INSPECTION", title: "INSPECTION", icon: "album" },
  
    { key: "FOB", title: "FOB", icon: "album" },
  ]);
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

  

  const renderScene = BottomNavigation.SceneMap({
    INSPECTION: INSPECTION_Route,
    FOB: FOB_Route,
  });

  useEffect(() => {
    ////////////////// INSPECTION ////////////////////////

    async function fetchDataInsPl() {
      const res_inspection_pl = await fetch(
        "http://localhost:3000/etr/inspection_pl"
      );
      const pl_inspection = await res_inspection_pl.json();
      let inspection_pl;

      for (let i = 0; i < pl_inspection.length; i++) {
        inspection_pl = pl_inspection[i].Number_Rows;
      }
      setPlInspection(inspection_pl);
    }

    async function fetchDataInsFact() {
      const res_inspection_fact = await fetch(
        "http://localhost:3000/etr/inspection_fact"
      );
      const fact_inspection = await res_inspection_fact.json();
      let inspection_fact;

      for (let i = 0; i < fact_inspection.length; i++) {
        inspection_fact = fact_inspection[i].Number_Rows;
      }
      setFactInspection(inspection_fact);
    }

    ////////////////// FOB ////////////////////////

    async function fetchDataFobPl() {
      const res_FOB_pl = await fetch("http://localhost:3000/etr/fob_pl");
      const pl_FOB = await res_FOB_pl.json();
      let FOB_pl;

      for (let i = 0; i < pl_FOB.length; i++) {
        FOB_pl = pl_FOB[i].Number_Rows;
      }
      setPlFob(FOB_pl);
    }

    async function fetchDataFobFact() {
      const res_FOB_fact = await fetch("http://localhost:3000/etr/fob_fact");
      const fact_FOB = await res_FOB_fact.json();
      let FOB_fact;

      for (let i = 0; i < fact_FOB.length; i++) {
        FOB_fact = fact_FOB[i].Number_Rows;
      }
      setFactFob(FOB_fact);
    }

    fetchDataInsPl();
    fetchDataInsFact();
    fetchDataFobPl();
    fetchDataFobFact();
  }, []);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#2E58BF", marginTop: 250 }}
    />
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});

export default Master_Document;
