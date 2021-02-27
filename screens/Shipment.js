import React, { useState, useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, View, StyleSheet, Picker } from "react-native";
import { VictoryChart, VictoryBar } from "../Victory";

const Master_Document = () => {
  const [selectedValue, setSelectedValue] = useState("java");

  const [plEta, setPlEta] = useState("");
  const [ActAta, setAtaAct] = useState("");

  console.log(ActAta);
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

  useEffect(() => {
    async function fetchDataEtaPl() {
      const res_ETA_pl = await fetch("http://localhost:3000/str/str_eta_pl");
      const pl_ETA = await res_ETA_pl.json();

      let ETA_pl;

      for (let i = 0; i < pl_ETA.length; i++) {
        ETA_pl = pl_ETA[i].Number_Rows;
      }

      setPlEta(ETA_pl);
    }

    async function fetchDataAtaAct() {
      const res_ATA_act = await fetch("http://localhost:3000/str/str_ata_act");
      const act_ATA = await res_ATA_act.json();
      let ATA_act;

      for (let i = 0; i < act_ATA.length; i++) {
        ATA_act = act_ATA[i].Number_Rows;
      }
      setAtaAct(ATA_act);
    }

    fetchDataEtaPl();
    fetchDataAtaAct();
  }, []);

  return (
    <View>
      <Text
        style={{
          paddingBottom: 30,
          backgroundColor: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        S . T . R
      </Text>
      <Text>
        {" "}
        <h4 style={{ textAlign: "center" }}> Number_Document_Register</h4>
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
    </View>
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
