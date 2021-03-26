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
export default function TypeDetails(props) {

  const navigation = props.navigation;
  const { state } = props.navigation;
  const UpdatedDate = state.params.UpdatedDate;
  const [Type, setType] = useState(false);


  // //////////////////////////// civil   ////////////////////////////////////////////////
  // const [QtyCivilType, setQtyCivilType] = useState(false);
  // //console.log(QtyCivilType);

  // //////////////////////////// instrumentation   ////////////////////////////////////////////////
  // const [InstrType, setInstrType] = useState(false);
  // //console.log(QtyCivilType);

  // //////////////////////////// electric   ////////////////////////////////////////////////
  // const [ElectricType, setElectricType] = useState(false);
  // //console.log(QtyCivilType);

  useEffect(() => {
    

    async function fetchData() {
      const res = await fetch(
        "https://localhost:3000/activity_type/" +
        state.params.data["MPROJECT_id"] +
        "/" +
        state.params.data["id"]
        );
        const project = await res.json();
        
        console.log(project);
        setType(project);
      }
      
      fetchData();
    }, []);

    // ////////////////////////////   civil   ////////////////////////////////////////////////

    // async function fetchDataCivil() {
    //   const res = await fetch(
    //     "https://localhost:3000/civil/" + state.params.data["MPROJECT_id"]
    //   );

    //   const project = await res.json();
    //   //console.log(project);

    //   setQtyCivilType(project);
    // }

    // ////////////////////////////   instrumentation   ////////////////////////////////////////////////

    // async function fetchDataInstrumentation() {
    //   const res = await fetch(
    //     "https://localhost:3000/inst/" + state.params.data["MPROJECT_id"]
    //   );

    //   const project = await res.json();
    //   //console.log(project);

    //   setInstrType(project);
    // }

    // //////////////////////////// electric   ////////////////////////////////////////////////

    // async function fetchDataElectric() {
    //   const res = await fetch(
    //     "https://localhost:3000/inst/" + state.params.data["MPROJECT_id"]
    //   );

    //   const project = await res.json();
    //   //console.log(project);

    //   setElectricType(project);
    // }
    // fetchDataElectric();
    // fetchDataInstrumentation();
    // fetchDataCivil();

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
      {" "}
      <View>
        <View style={{ marginTop: 70 }}>
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
          </View>{" "}
          {Object.values(Type).map((Types, i) => (
            <TouchableOpacity
              key={i}
              onPress={() =>
                navigation.navigate("Quantity_Tracking", {
                  data: Types,
                  UpdatedDate: UpdatedDate,
                })
              }
            >
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title
                    style={{
                      fontSize: 17,
                      textAlign: "left",
                      marginTop: 10,
                      backgroundColor: "#f5fcff",
                      height: 50,
                      paddingLeft: 20,
                      color: "#2DAAF1",
                      marginBottom: 3,
                    }}
                  >
                    {Types.type}
                  </ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          ))}
        </View>

        {/* {state.params.data["discipline"] === "Civil Engineering" ? (
          <View style={{ marginTop: 30 }}>
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
            </View>{" "}
            {Object.values(QtyCivilType).map((QtyCivilTypes, i) => (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  navigation.navigate("Civil_Engineering", {
                    data: QtyCivilTypes,
                    UpdatedDate: UpdatedDate,
                  })
                }
              >
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        fontSize: 17,
                        textAlign: "left",
                        marginTop: 10,
                        backgroundColor: "#f5fcff",
                        height: 50,
                        paddingLeft: 50,
                        color: "#2DAAF1",
                        marginBottom: 3,
                      }}
                    >
                      {QtyCivilTypes.type}
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {state.params.data["discipline"] === "Instrumentation Engineering" ? (
          <View style={{ marginTop: 30 }}>
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
            </View>{" "}
            {Object.values(InstrType).map((InstrTypes, i) => (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  navigation.navigate("Intrumentation", {
                    data: InstrTypes,
                    UpdatedDate: UpdatedDate,
                  })
                }
              >
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        fontSize: 17,
                        textAlign: "left",
                        marginTop: 10,
                        backgroundColor: "#f5fcff",
                        height: 50,
                        paddingLeft: 25,
                        color: "#2DAAF1",
                        marginBottom: 3,
                      }}
                    >
                      {InstrTypes.type}
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
        {state.params.data["discipline"] === "Electrical Engineering" ? (
          <View style={{ marginTop: 30 }}>
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
            </View>{" "}
            {Object.values(ElectricType).map((ElectricTypes, i) => (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  navigation.navigate("Electrical_Engineering", {
                    data: ElectricTypes,
                    UpdatedDate: UpdatedDate,
                  })
                }
              >
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title
                      style={{
                        fontSize: 17,
                        textAlign: "left",
                        marginTop: 10,
                        backgroundColor: "#f5fcff",
                        height: 50,
                        paddingLeft: 25,
                        color: "#2DAAF1",
                        marginBottom: 3,
                      }}
                    >
                      {ElectricTypes.type}
                    </ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            ))}
          </View>
        ) : null} */}
      </View>
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
