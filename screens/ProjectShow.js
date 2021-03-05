import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Text } from "react-native-paper";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function ProjectShow( props ) {

  const navigation = props.navigation;
  const { state } = props.navigation;

  console.log(state.params.UpdatedDate);
  const UpdatedDate = state.params.UpdatedDate;
  console.log(state.params.dataProjects["id"]);
  /////////////////// Facturation Previsionnel &&  Facturation  Reel ///////////////////////////////////////////////////////////

  const [FactPrev, setFactPrev] = useState(0);
  const [EncPrev, setEncPrev] = useState(0);

  const [FactReel, setFactReel] = useState(0);
  const [EncReel, setEncReel] = useState(0);

  /////////////////////////////////// Progress //////////////////////////////////////////////////

  //////////// Planned //////////////

  const [initialDatePl, setInitialDatePl] = useState("");
  const [finalDatePl, setFinalDatePl] = useState("");

  //////////// Actual ///////////////////

  const [initialDateAct, setInitialDateAct] = useState("");
  const [finalDateAct, setFinalDateAct] = useState("");

  ////////////// Total_Float ///////////////

  const [TotalFloat, setTotalFloat] = useState(0);

  ////////////////////////// Total_Avancement pl && act  ////////////////////////

  const [TotalAvPl, setTotalAvPl] = useState(0);
  const [TotalAvAct, setTotalAvAct] = useState(0);

  //////////////////////////////////// Markup  ///////////////////////////////////////////////////////////

  const [markupPl, setMarkupPl] = useState(0);
  const [markupAct, setMarkupAct] = useState(0);

  useEffect(() => {
    ///////////////////////// Facturation Previsionnel && Reel  ///////////////////////////////////////////////////////////

    async function fetchDataFactPrev() {
      const res = await fetch(
        "https://localhost:3000/factPrev/" + state.params.dataProjects["id"]
      );
      const project = await res.json();
      //console.table(project);
      var totalmfp = project.map(function (projects) {
        return projects["totalmfp"];
      });
      var totalmep = project.map(function (projects) {
        return projects["totalmep"];
      });

      setFactPrev(totalmfp);

      setEncPrev(totalmep);
    }

    async function fetchDataFactReel() {
      const res = await fetch(
        "https://localhost:3000/factReel/" + state.params.dataProjects["id"]
      );
      const project = await res.json();

      var totalmfr = project.map(function (projects) {
        return projects["totalmfr"];
      });
      var totalmer = project.map(function (projects) {
        return projects["totalmer"];
      });

      setFactReel(totalmfr);
      setEncReel(totalmer);
    }

    //////////////////////////////////// Progress ///////////////////////////////////////////////////////////

    async function fetchDataProgress() {
      const res = await fetch(
        "https://localhost:3000/progress/" + state.params.dataProjects["id"]
      );
      const project = await res.json();

      /////////////////// Planned ////////////////////////

      var datedebutpla = project.map(function (projects) {
        return projects["datedebutpla"].slice(0, 10);
      });

      var datedefinpla = project.map(function (projects) {
        return projects["datedefinpla"].slice(0, 10);
      });
      console.log(datedefinpla);
      // for(let i=1;i<datedefinpla.length;i++)
      // {
      //   if (datedefinpla[i] < UpdatedDate) console.log(datedefinpla[i]);
      // }

      setInitialDatePl(datedebutpla);
      setFinalDatePl(datedefinpla);

      ////////////////// Actual ////////////////////////

      var datedebutactu = project.map(function (projects) {
        return projects["datedebutactu"].slice(0, 10);
      });
      var datedefinactu = project.map(function (projects) {
        return projects["datedefinactu"].slice(0, 10);
      });

      setInitialDateAct(datedebutactu);
      setFinalDateAct(datedefinactu);

      ////////////////////////// Total_Float  ////////////////////////

      var totalfloat = project.map(function (projects) {
        return projects["totalfloat"];
      });
      setTotalFloat(totalfloat);
      ////////////////////////// Total_Avancement pl && act  ////////////////////////

      var totalavanp = project.map(function (projects) {
        return projects["totalavanp"];
      });
      var totalavanac = project.map(function (projects) {
        return projects["totalavanac"];
      });
      setTotalAvPl(totalavanp);
      setTotalAvAct(totalavanac);
    }

    ///////////////////////////////////////  Markup  ////////////////////////////////////////////////////////

    async function fetchDataMarkup() {
      const res = await fetch(
        "https://localhost:3000/markup/" + state.params.dataProjects["id"]
      );
      const project = await res.json();

      var markupinit = project.map(function (projects) {
        return projects["markupinit"];
      });
      var markupactu = project.map(function (projects) {
        return projects["markupactu"];
      });

      setMarkupPl(markupinit);
      setMarkupAct(markupactu);
    }

    fetchDataFactReel();
    fetchDataFactPrev();
    fetchDataMarkup();
    fetchDataProgress();
  }, []);

  return (
    <KeyboardAwareScrollView
      style={{ marginVertical: 40 }}
      showsVerticalScrollIndicator={false}
      style={{
        marginVertical: 40,
        backgroundColor: "#fff",
        marginTop: 3,
        marginBottom: 3,
      }}
    >
      <div>
        <Button
          title="Project Details"
          style={{marginTop:10}}
          onPress={() =>
            navigation.navigate("Discipline_list", {
              id: state.params.dataProjects["id"],
              date: UpdatedDate,
            })
          }
        />
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
          <Text style={styles.Header}>
            {state.params.dataProjects["projectname"]}
          </Text>
        </View>

        <View style={styles.content}>
          <View style={styles.doc}>
            <Text style={styles.SubTitle}>
              {" "}
              Date de Début planifiée:{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {initialDatePl}
              </Text> */}
            </Text>
            <Text style={styles.SubTitle}>
              {" "}
              Date Fin Planifiée :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {" "}
                {finalDatePl}{" "}
              </Text> */}
            </Text>
            <Text style={styles.SubTitle}>
              {" "}
              Date Début Actuel :
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {initialDateAct}
              </Text> */}
            </Text>
            <Text style={styles.SubTitle}>
              {" "}
              Date Fin Actuel :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {" "}
                {finalDateAct}
              </Text> */}
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text style={styles.SubTitle}>
              {" "}
              Avancement Global Planifié :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {TotalAvPl}
              </Text> */}
            </Text>
            <Text style={styles.SubTitle}>
              {" "}
              Avancement Global Réel :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {TotalAvAct}
              </Text> */}
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
            <Text style={styles.SubTitle}>
              {" "}
              Total Float :{" "}
              {/* <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {TotalFloat}
              </Text> */}
            </Text>
            <Text style={styles.SubTitle}>
              {" "}
              Mark_up Initial :{" "}
              <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {markupPl}
              </Text>
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
                color: "#2DAAF1",
                marginLeft: 3,
              }}
            >
              Mark_up Actuel :
              <Text style={{ marginLeft: 10, textAlign: "right" }}>
                {markupAct}
              </Text>
            </Text>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
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
                Total Facturation Prévisionnel :
                <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {FactPrev}
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
                Total Encaissement Prévisionnel :
                <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {EncPrev}
                </Text>
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
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
                Total Facturation Réel :{" "}
                <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {FactReel}
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
                Total Encaissement Réel :{" "}
                <Text style={{ marginLeft: 10, textAlign: "right" }}>
                  {EncReel}
                </Text>
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderColor: "#ddd",
                marginTop: 10,
                marginBottom: 30,
              }}
            ></View>
          </View>
        </View>
      </div>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  Header: {
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  content: {
    backgroundColor: "#ffff",
    marginBottom: 50,
  },
  input: {
    margin: 15,
    height: 40,
    backgroundColor: "#FFF",
  },
  UpDate: {
    textAlign: "left",
    marginLeft: 10,
    marginBottom:50,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
  doc: {
    textAlign: "left",
    padding: 10,
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    paddingBottom: 35,
  },
  SubTitle: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 15,
    color: "#2DAAF1",
  },
});
export default ProjectShow;
