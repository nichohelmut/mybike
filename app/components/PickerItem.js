import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function PickerItem({ label, icon, color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={40}
        style={{
          alignSelf: "center",
          backgroundColor: color,
          width: 70,
          color: colors.white,
          height: 70,
          textAlign: "center",
          paddingTop: 15,
        }}
      />
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
