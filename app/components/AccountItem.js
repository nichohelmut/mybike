import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListItemSeperator from "../components/ListItemSeperator";

function AccountItem({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor, justifyContent: "center", alignItems: "center" }}>
        <MaterialCommunityIcons 
        name={name} 
        color={iconColor} 
        size={size * .5}/>
    </View>
  );
}

export default AccountItem;
