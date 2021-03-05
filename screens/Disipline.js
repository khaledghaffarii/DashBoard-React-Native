import React, { useState, useEffect } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { PieChart } from "react-native-chart-kit";
import { VictoryChart, VictoryBar } from "../Victory";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Disipline(props) {

  const navigation = props.navigation;
  const { state } = props.navigation;

  console.log(state.params.UpdatedDate);
  console.log(state.params.data["descdisci"]);

  //console.log("PROPS " + state.params.user);
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
        "https://localhost:3000/progress/project/" + state.params.data["id"]
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

    ////////////////////////////////////  M  D  R  ////////////////////////////////////////////////////

    async function fetchDataMdr() {
      const res = await fetch(
        "https://localhost:3000/mdr/" + state.params.data["MPROJECT_id"]
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
    fetchDataMdr();
    fetchData();
  }, []);

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{
        marginVertical: 40,
        backgroundColor: "#fff",
        marginTop: 3,
        marginBottom: 5,
      }}
    >
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
        <View style={styles.Header}>
          <Text style={styles.TitleHeader}>
            {state.params.data["descdisci"]}
          </Text>
        </View>
        <View>
          <VictoryChart>
            <VictoryBar data={dataProgress.a} />
            <VictoryBar data={dataProgress.b} />
            <VictoryBar
              data={dataProgress.planned}
              style={{
                data: { fill: "#2E58BF", strokeWidth: 30 },
                paddingLeft: 10,
              }}
            />
            <VictoryBar
              data={dataProgress.actual}
              style={{
                data: { fill: "#F00", strokeWidth: 30 },
              }}
            />
            <VictoryBar data={dataProgress.c} />
            <VictoryBar data={dataProgress.d} />
          </VictoryChart>
        </View>
        <View>
          <PieChart
            data={ProgressData}
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
        <View>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontSize: 15,
              color: "#2DAAF1",
            }}
          >
            {" "}
            Date Fin Planifiée :{" "}
            <Text style={{ marginLeft: 10, textAlign: "right" }}>
              {" "}
              {finalDatePl}{" "}
            </Text>
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontSize: 15,
              color: "#2DAAF1",
            }}
          >
            {" "}
            Date Fin Actuel :{" "}
            <Text style={{ marginLeft: 10, textAlign: "right" }}>
              {" "}
              {finalDateAct}
            </Text>
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: 20,
              fontSize: 15,
              color: "#2DAAF1",
            }}
          >
            {" "}
            Total Float :{" "}
            <Text style={{ marginLeft: 10, textAlign: "right" }}>
              {TotalFloat} Jours
            </Text>
          </Text>
        </View>
        <View>
          {state.params.data["descdisci"] === "Engineering Progress" ||
          state.params.data["descdisci"] === "procurement Progress" ||
          state.params.data["descdisci"] === "Construction Progress" ? (
            <Button
              style={{ marginTop: 15 }}
              title="More details"
              onPress={() =>
                navigation.navigate("Project_Details", {
                  UpdatedDate: UpdatedDate,
                  Disipline: state.params.data["descdisci"],
                  key: state.params.data["MPROJECT_id"],
                })
              }
            />
          ) : null}
        </View>
      </View>
    </KeyboardAwareScrollView>
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
  UpDate: {
    textAlign: "left",
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 40,
    fontWeight: "bold",
    fontSize: 15,
  },
  TitleHeader: {
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 15,
    marginBottom: 15,
  },
});
//navigation.getParam("descdisci"), navigation.getParam("descdisci");
