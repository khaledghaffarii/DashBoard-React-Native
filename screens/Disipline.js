import React from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";



export default function Disipline({ navigation }) {
 

  console.log(navigation.getParam("poids"));
  return (
    <View>
      <View>
        <Text> hello </Text>
        <Text> {navigation.getParam("id")} </Text>
      </View>
    </View>
  );
}
 //navigation.getParam("descdisci"), navigation.getParam("descdisci");