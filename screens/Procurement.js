import React, { useState, useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, View, StyleSheet, Picker } from "react-native";
import { VictoryChart, VictoryBar } from "../Victory";

const Master_Document = () => {
  const [index, setIndex] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState("java");
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
      name: "Current",
      population: dateRfqAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateRfqPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const RFQRoute = () => (
    <View>
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
    </View>
  );
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
      name: "Current",
      population: dateTecAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: dateTecPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const TECRoute = () => (
    <View>
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
    </View>
  );

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
      name: "Current",
      population: datePosAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: datePosPl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  const POSRoute = () => (
    <View>
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
    </View>
  );

  // const [date, setDate] = useState();

  const [routes] = React.useState([
    { key: "RFQ", title: "RFQ", icon: "album" },
    { key: "POS", title: "POS", icon: "album" },
    { key: "TEC", title: "TEC", icon: "album" },
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

  //console.log(datePosAct);

  const renderScene = BottomNavigation.SceneMap({
    RFQ: RFQRoute,
    TEC: TECRoute,
    POS: POSRoute,
  });

  useEffect(() => {
    ////////////////// RFQ  ////////////////////////

    async function fetchDataRfqPl() {
      const res_rfq_pl = await fetch("https://localhost:3000/ptr/rfq_pl");
      const pl_rfq = await res_rfq_pl.json();
      let rfq_Pl;

      for (let i = 0; i < pl_rfq.length; i++) {
        rfq_Pl = pl_rfq[i].Number_Rows;
      }
      setDateRfqPl(rfq_Pl);
    }

    async function fetchDataRfqAct() {
      const res_rfq_act = await fetch("https://localhost:3000/ptr/rfq_act");
      const act_rfq = await res_rfq_act.json();
      let rfq_act;

      for (let i = 0; i < act_rfq.length; i++) {
        rfq_act = act_rfq[i].Number_Rows;
      }
      setDateRfqAct(rfq_act);
    }

    //////////////////  T  E  C  ////////////////////////

    async function fetchDataTecPl() {
      const res_tec_pl = await fetch("https://localhost:3000/ptr/tec_pl");
      const pl_tec = await res_tec_pl.json();
      let tec_Pl;

      for (let i = 0; i < pl_tec.length; i++) {
        tec_Pl = pl_tec[i].Number_Rows;
      }
      setDateTecPl(tec_Pl);
    }

    async function fetchDataTecAct() {
      const res_tec_act = await fetch("https://localhost:3000/ptr/tec_act");
      const act_tec = await res_tec_act.json();
      let tec_act;

      for (let i = 0; i < act_tec.length; i++) {
        tec_act = act_tec[i].Number_Rows;
      }
      setDateTecAct(tec_act);
    }

    ////////////////////     P  O  S    ////////////////////////

    async function fetchDataPosPl() {
      const res_pos_pl = await fetch("https://localhost:3000/ptr/pos_pl");
      const pl_pos = await res_pos_pl.json();
      let pos_pl;

      for (let i = 0; i < pl_pos.length; i++) {
        pos_pl = pl_pos[i].Number_Rows;
      }
      setDatePosPl(pos_pl);
    }

    async function fetchDataPosAct() {
      const res_pos_act = await fetch("https://localhost:3000/ptr/pos_act");
      const act_pos = await res_pos_act.json();

      let pos_act;

      for (let i = 0; i < act_pos.length; i++) {
        pos_act = act_pos[i].Number_Rows;
      }
      setDatePosAct(pos_act);
    }

    fetchDataPosAct();
    fetchDataPosPl();
    fetchDataRfqAct();
    fetchDataRfqPl();
    fetchDataTecPl();
    fetchDataTecAct();
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
