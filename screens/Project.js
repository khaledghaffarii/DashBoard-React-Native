import React, { useState, useEffect } from "react";
import { BottomNavigation, Text, TextInput } from "react-native-paper";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Icon } from "react-native-elements";
import projectShow from "./ProjectShow";
// import {creatStackNavigator} from 'react-navigation-stack'
// import {createAppContainer} from 'react-navigation';
import Constants from "expo-constants"; 
export default function Project({ navigation, props }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataProject, setDataProject] = useState("");
  // const [updatedDate, setUpdatedDate] = useState("");
  // const { navigation, route } = props;
  console.log(dataProject);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://127.0.0.1:3000/project");
  //     const project = await res.json();

  //     console.log(project);
  //     setDataProject(project);
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://127.0.0.1:3000/project");
        const project = await res.json();
        setDataProject(project);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(res.json());
    // setDataProject(res.json());
    async function callAPI() {
      try {
        await fetchData();
      } catch (e) {
        console.log(e);
      }
    }
    callAPI();

  }, []);
    //fetchData();
    //  axios.get("https://127.0.0.1:3000/project").then((response) => {
    //    console.log(response.data);
    //    setDataProject(response.data);
    //  });

  // console.log(dataProject);
  // //const { itemId } = route.params;
  return (
    <View>
      <View style={styles.Header}>
        <Text style={styles.title}>All_Project</Text>
      </View>

      {/* <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Search ... "
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          underlineColorAndroid="transparent"
        />
      </View> */}

      <KeyboardAwareScrollView
        style={{ marginVertical: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          {Object.values(dataProject)
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((dataProjects) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProjectShow", dataProjects)                                   }
              >
                <Text style={styles.container}>
                  {" "}
                  { dataProjects.projectname }
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
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
  Header: {
    marginBottom: 100,
    borderBottomWidth: 1,
    borderColor: "black",
    // marginTop: 20,
    // height: 45,
    // padding: 1,
    // paddingLeft: 35,
    // borderWidth: 1,
    // borderColor: "#dddd",
    // borderRadius: 5,
    // fontSize: 16,
    // backgroundColor: "white",
  },
  title: {
    marginTop: 30,
    height: 50,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    height: 45,
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});
//export default Project;
