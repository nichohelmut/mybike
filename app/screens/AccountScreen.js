import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import AccountItem from "../components/AccountItem";
import { FlatList, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import ListItemSeperatorComponent from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Nicholas Utikal"
          subTitle="nicholasutikal@gmail.com"
          image={require("../assets/thumbnail.jpeg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeperatorComponent={ListItemSeperatorComponent}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AccountItem
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        ></FlatList>
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<AccountItem name="logout" backgroundColor="#ffe66d" />}
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
