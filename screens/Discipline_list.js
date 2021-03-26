import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function ListDisip(props) {
  const navigation = props.navigation;
  const { state } = props.navigation;

  const UpdatedDate = state.params.date;

  // UpdatedDate = this.props.route.params;

  /////////////////////////////////// Progress /////////////////////////////////////////////////////////

  const [dataDisip, setDataDisip] = useState("");

  //console.log(dataDisip);
  useEffect(() => {
    //////////////////////////////////// Disip ///////////////////////////////////////////////////////////
    async function fetchDataDisip() {
      try {
        const res = await fetch(
          "https://127.0.0.1:3000/disciplined/" + state.params.id
        );
        const project = await res.json();

        // const count = project.unshift({ UpdatedDate: UpdatedDate });
        // console.log(count);
        setDataDisip(project);
      } catch (error) {
        console.log(error);
      }
    }
    async function callAPI() {
      try {
        await fetchDataDisip();
      } catch (e) {
        console.log(e);
      }
    }

    callAPI();
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

        {Object.values(dataDisip).map((dataDisips) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Disciplined", {
                data: dataDisips,
                UpdatedDate: UpdatedDate,
              })
            }
            style={{
              backgroundColor: "#fff",
              marginTop: 20,
              marginBottom: 3,
            }}
          >
            <View>
              {" "}
              <Text
                style={{
                  fontSize: 17,
                  textAlign: "left",
                  display: "flex",
                  marginTop: 10,
                  backgroundColor: "#f5fcff",
                  borderBottomWidth: 1,
                  borderColor: "#ddd",
                  height: 50,
                  paddingLeft: 50,
                  color: "#2DAAF1",
                  marginBottom: 20,
                }}
              >
                {" "}
                {dataDisips.name}{" "}
              </Text>{" "}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  Header: {
    marginLeft: 60,
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 20,
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
    marginLeft: 40,
    marginTop: 20,
    marginBottom: 10,
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
  tot: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#f5fcff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 50,
    // textAlign:"center",
    paddingLeft: 100,
  },
  Disip: {
    display: "flex",
    marginTop: 10,
    backgroundColor: "#f5fcff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    height: 50,
    // textAlign:"center",
    paddingLeft: 100,
    color: "#4DC7F8",
    //fontWeight: "bold",
  },
});
export default ListDisip;
