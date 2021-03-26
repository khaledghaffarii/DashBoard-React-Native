import React, { useState, useEffect } from "react";
import { Text, TextInput } from "react-native-paper";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { ListItem, Header , Input } from "react-native-elements";

export default function Project({ navigation }) {
  const [UpdatedDate, setUpdatedDate] = useState("");
  const [ShowDate, setShowDate] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [dataProject, setDataProject] = useState("");
  const [validateLength, setValidateLength] = useState(false);
  const [dateProject, setDateProject] = useState("");
  // const [updatedDate, setUpdatedDate] = useState("");
  // const { navigation, route } = props;
  //console.log(dataProject);

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
        //const res = await fetch("https://eppmdashboard.herokuapp.com/api/projects");

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
    async function fetchDateProject() {

      const res = await fetch("https://localhost:3000/project");
      const project = await res.json();

      var datedebutactu = project.map(function (projects) {
        return projects["datedebutactu"].slice(0, 10);
      });

      if (UpdatedDate) {
        const filterDate = datedebutactu.filter(
          (datedebutactus) => datedebutactus <= UpdatedDate
        );

        setDateProject(filterDate);
      } else {
        setDateProject(datedebutactu);
      }
    }

    fetchDateProject();
    callAPI();
  }, []);
  //fetchData();
  //  axios.get("https://127.0.0.1:3000/project").then((response) => {
  //    console.log(response.data);
  //    setDataProject(response.data);
  //  });

  // console.log(dataProject);
  // //const { itemId } = route.params;
  function HandleDateChange(e) {
    setUpdatedDate(e.target.value);
    // if (UpdatedDate.length > 10) {
    //   setValidateLength(true);
    // } else setValidateLength(false);
  }
  function HandleShowDate() {
    setShowDate(true);
    if (!UpdatedDate) {
      setShowDate(false);
    }
    //if (finalDatePl < UpdatedDate) console.log(finalDatePl);
  }
  return (
    <View style={styles.content}>
      <KeyboardAwareScrollView
        style={{ marginVertical: 40 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View>
            {/* <TextInput
              keyboardType={"numeric"}
              style={styles.input}
              placeholder=" Enter Date :  YYYY-MM-DD"
              onChange={HandleDateChange}
              //maxLength={10}
              value={UpdatedDate}
            /> */}
            <Input
              placeholder="Enter Date :  YYYY-MM-DD"
              //rightIcon={{ type: "font-awesome", name: "chevron-right" }}
              onChange={HandleDateChange}
              value={UpdatedDate}
            />
            {validateLength ? (
              <Text style={{ color: "#f00" }}>invalid date</Text>
            ) : null}

            {ShowDate && UpdatedDate ? (
              <Text style={styles.UpDate}>
                {" "}
                Updated Date :<Text> {UpdatedDate} </Text>{" "}
              </Text>
            ) : null}
          </View>
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
            .map((dataProjects, i) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProjectShow", {
                    dataProjects: dataProjects,
                    UpdatedDate: UpdatedDate,
                  })
                }
                key={i}
              >
                {/* <Text style={styles.container}> {dataProjects.name}</Text> */}
                {/* <Text style={styles.container}>
                  {" "}
                  {dataProjects.projectname}
                </Text> */}
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{dataProjects.projectname}</ListItem.Title>
                    <ListItem.Subtitle>
                      {dataProjects.datedefinactu.slice(0, 10)}
                    </ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
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
    backgroundColor: "#F5FCFF",
    borderBottomWidth: 2,
    borderColor: "#ddd",
    height: 50,
    textAlign: "center",
    paddingLeft: 100,
  },
  UpDate: {
    textAlign: "left",
    marginBottom: 50,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  content: {
    backgroundColor: "#ffff",
    paddingBottom: 10,
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

{
  /* <View style={styles.Header}>
        <Text style={styles.title}>All_Project</Text>
      </View> */
}

{
  /* <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Search ... "
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          underlineColorAndroid="transparent"
        />
      </View> */
}
