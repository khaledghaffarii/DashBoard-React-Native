import React from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";
import {StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Disipline({ navigation }) {
 

  console.log(navigation.getParam("poids"));
  return (
    <View>
      <View style={styles.Header}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => navigation.navigate("ProjectShow")}
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