import React, { useState, useEffect } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { PieChart } from "react-native-chart-kit";
import { VictoryChart, VictoryBar } from "../Victory";
import { Button } from "react-native-elements";
export default function Disipline({ navigation }) {
  const [ShowButton, setShowButton] = useState(false);

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
  //////////// Planned //////////////

  const [AvancePl, setAvancePl] = useState("");
  const [finalDatePl, setFinalDatePl] = useState("");

  console.log(AvancePl);

  //////////// Actual ///////////////////

  const [AvanceAct, setAvanceAct] = useState("");
  const [finalDateAct, setFinalDateAct] = useState("");

  console.log(AvanceAct);

  const dataProgress = {
    a: [{ x: 1, y: 0 }],
    b: [{ x: 2, y: 0 }],
    c: [{ x: 3, y: 0 }],
    d: [{ x: 4, y: 0 }],
    e: [{ x: 5, y: 0 }],
    f: [{ x: 6, y: 0 }],
    planned: [{ x: 2.5, y: AvancePl }],
    actual: [{ x: 3.5, y: AvanceAct }],
  };
  const ProgressData = [
    {
      name: "Current",
      population: AvanceAct,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Planned",
      population: AvancePl,
      color: "#2E58BF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  ////////////// Total_Float ///////////////

  const [TotalFloat, setTotalFloat] = useState(0);

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

  // console.log( finalDatePl);
  // console.log(finalDateAct)
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://localhost:3000/progress/project/" + navigation.getParam("id")
      );
      const project = await res.json();

      /////////////////// Planned ////////////////////////

      var datedefinpla = project.map(function (projects) {
        return projects["datedefinpla"].slice(0, 10);
      });

      var avanceplan = project.map(function (projects) {
        return projects["avanceplan"];
      });

      console.log(parseFloat(avanceplan));

      setAvancePl(parseFloat(avanceplan));
      setFinalDatePl(datedefinpla);

      ////////////////// Actual ////////////////////////

      var datedefinactu = project.map(function (projects) {
        return projects["datedefinactu"].slice(0, 10);
      });

      var avanceactu = project.map(function (projects) {
        return projects["avanceactu"];
      });

      setAvanceAct(parseFloat(avanceactu));
      setFinalDateAct(datedefinactu);

      ////////////////////////// Total_Float  ////////////////////////

      var totalfloat = project.map(function (projects) {
        return projects["totalfloat"];
      });
      setTotalFloat(totalfloat);
    }

    ////////////////////////////////////  M  D  R  ///////////////////////////////////////////////////////////
    async function fetchDataMdr() {
      const res = await fetch(
        "https://localhost:3000/mdr/" + navigation.getParam("MPROJECT_id")
      );
      const project = await res.json();

      /////////  IFR //////////////////////

      var dateplifr = project.map(function (projects) {
        return projects["dateplifr"];
      });
      var dateactifr = project.map(function (projects) {
        return projects["dateactifr"];
      });

      setDateIfrPl(dateplifr.filter((n) => n == 0 || n).length);
      setDateIfrAct(dateactifr.filter((n) => n == 0 || n).length);

      /////////  IFA  //////////////////////

      var dateplifa = project.map(function (projects) {
        return projects["dateplifa"];
      });
      var dateactifa = project.map(function (projects) {
        return projects["dateactifa"];
      });

      setDateIfaPl(dateplifa.filter((n) => n == 0 || n).length);
      setDateIfaAct(dateactifa.filter((n) => n == 0 || n).length);

      ////////////  IFC  /////////////

      var dateplb = project.map(function (projects) {
        return projects["dateplb"];
      });
      var dateactb = project.map(function (projects) {
        return projects["dateactb"];
      });

      setDateIfcPl(dateplb.filter((n) => n == 0 || n).length);
      setDateIfcAct(dateactb.filter((n) => n == 0 || n).length);
    }
    fetchData();
    fetchDataMdr();
  }, []);

  return (
    <View>
      <View style={styles.Header}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Project")}
          style={{ marginBottom: 5 }}
        />

        <Text style={styles.TitleHeader}>
          {navigation.getParam("descdisci")}
        </Text>
      </View>
    </View>
  );
  
}
const styles = StyleSheet.create({
  Header: {
    marginBottom: 50,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  TitleHeader: {
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 15,
  },
});
 //navigation.getParam("descdisci"), navigation.getParam("descdisci");