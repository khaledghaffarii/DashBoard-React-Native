
import React, { useState, useEffect } from "react";
import { BottomNavigation, Text } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";
import { Dimensions, View, StyleSheet, Picker } from "react-native";
import { VictoryChart, VictoryBar } from "../Victory";


const Master_Document = () => {
  const [index, setIndex] = React.useState(0);
  const [selectedValue, setSelectedValue] = useState("java");
  ////////////////////  IFR   /////////////////////
  const [dateIfrAct, setDateIfrAct] = useState("");
  const [dateIfrPl, setDateIfrPl] = useState("");

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
  const IFRRoute = () => (
    <View>
      <View>
        <View style={styles.container}>
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
          <Text style={{ textAlign: "center" }}>
           Number_Document_Register
          </Text>
          <VictoryChart>
            <VictoryBar data={dataIFR.a} />
            <VictoryBar data={dataIFR.b} />
            <VictoryBar
              data={dataIFR.planned}
              style={{
                data: { fill: "#2E58BF", strokeWidth: 20 },
                paddingLeft: 10,
              }}
            />
            <VictoryBar
              data={dataIFR.actual}
              style={{
                data: { fill: "#F00", strokeWidth: 20 },
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
    </View>
  );
  ////////////////////  IFA   /////////////////////

  const [dateIfaPl, setDateIfaPl] = useState("");
  const [dateIfaAct, setDateIfaAct] = useState("");

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
  const IFARoute = () => (
    <View>
      <View>
        <View style={styles.container}>
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
          <Text style={{ textAlign: "center" }}>
             Number_Document_Register
          </Text>
          <VictoryChart>
            <VictoryBar data={dataIFA.a} />
            <VictoryBar data={dataIFA.b} />
            <VictoryBar
              data={dataIFA.planned}
              style={{
                data: { fill: "#2E58BF", strokeWidth: 20 },
                paddingLeft: 10,
              }}
            />
            <VictoryBar
              data={dataIFA.actual}
              style={{
                data: { fill: "#F00", strokeWidth: 20 },
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
  );

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
  const IFCRoute = () => (
    <View>
      <View>
        <View style={styles.container}>
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
          <Text style={{ textAlign: "center" }}>
           Number_Document_Register
          </Text>
          <VictoryChart>
            <VictoryBar data={dataIFC.a} />
            <VictoryBar data={dataIFC.b} />
            <VictoryBar
              data={dataIFC.planned}
              style={{
                data: { fill: "#2E58BF", strokeWidth: 20 },
                paddingLeft: 10,
              }}
            />
            <VictoryBar
              data={dataIFC.actual}
              style={{
                data: { fill: "#F00", strokeWidth: 20 },
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
  );

  // const [date, setDate] = useState();

  const [routes] = React.useState([
    { key: "IFR", title: "IFR", icon: "album" },
    { key: "IFC", title: "IFC", icon: "album" },
    { key: "IFA", title: "IFA", icon: "album" },
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

  //console.log(dateIfcAct);

  const renderScene = BottomNavigation.SceneMap({
    IFR: IFRRoute,
    IFA: IFARoute,
    IFC: IFCRoute,
  });

  useEffect(() => {
    ////////////////// IFR  ////////////////////////

    async function fetchDataIfrPl() {
      const res1 = await fetch("https://localhost:3000/mdr/date_ifr_pl");
      const plmdrIfr = await res1.json();
      let mdrIfrPl;

      for (let i = 0; i < plmdrIfr.length; i++) {
        mdrIfrPl = plmdrIfr[i].Number_Rows;
      }
      setDateIfrPl(mdrIfrPl);
    }

    async function fetchDataIfrAct() {
      const res2 = await fetch("https://localhost:3000/mdr/date_ifr_act");
      const actmdrIfr = await res2.json();
      let mdrIfrAct;

      for (let i = 0; i < actmdrIfr.length; i++) {
        mdrIfrAct = actmdrIfr[i].Number_Rows;
      }
      setDateIfrAct(mdrIfrAct);
    }

    ////////////////// IFA  ////////////////////////

    async function fetchDataIfaPl() {
      const res1 = await fetch("https://localhost:3000/mdr/date_ifa_pl");
      const plamdrIfa = await res1.json();
      let mdrIfaPl;

      for (let i = 0; i < plamdrIfa.length; i++) {
        mdrIfaPl = plamdrIfa[i].Number_Rows;
      }
      setDateIfaPl(mdrIfaPl);
    }

    async function fetchDataIfaAct() {
      const res1 = await fetch("https://localhost:3000/mdr/date_ifa_act");
      const actmdrIfa = await res1.json();
      let mdrIfaAct;

      for (let i = 0; i < actmdrIfa.length; i++) {
        mdrIfaAct = actmdrIfa[i].Number_Rows;
      }
      setDateIfaAct(mdrIfaAct);
    }

    ////////////////// IFC  ////////////////////////

    async function fetchDataIfcPl() {
      const res1 = await fetch("https://localhost:3000/mdr/date_ifc_pl");
      const plamdrIfc = await res1.json();
      let mdrIfcPl;

      for (let i = 0; i < plamdrIfc.length; i++) {
        mdrIfcPl = plamdrIfc[i].Number_Rows;
      }
      setDateIfcPl(mdrIfcPl);
    }

    async function fetchDataIfcAct() {
      const res1 = await fetch("https://localhost:3000/mdr/date_ifc_act");
      const actmdrIfc = await res1.json();

      let mdrIfcAct;

      for (let i = 0; i < actmdrIfc.length; i++) {
        mdrIfcAct = actmdrIfc[i].Number_Rows;
      }
      setDateIfcAct(mdrIfcAct);
    }

    fetchDataIfcAct();
    fetchDataIfcPl();
    fetchDataIfrAct();
    fetchDataIfrPl();
    fetchDataIfaPl();
    fetchDataIfaAct();
  }, []);

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: "#2E58BF", marginTop: 525 }}
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
