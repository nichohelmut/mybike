import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().integer().min(1).max(10000).required().label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, icon: "floor-lamp", color: "#fc5c65" },
  { label: "Clothing", value: 2, icon: "shoe-heel", color: "#2bcbba" },
  { label: "Cameras", value: 3, icon: "camera", color: "#fed330" },
  { label: "Cars", value: 4, icon: "car", color: "#fd9644" },
  { label: "Games", value: 5, icon: "cards", color: "#26de81" },
  { label: "Sports", value: 6, icon: "basketball", color: "#45aaf2" },
  { label: "Movies & Music", value: 7, icon: "headphones", color: "#4b7bec" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          maxLength={255}
          placeholder="Title"
          style={styles.container2}
        />
        <AppFormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
        />
        <AppFormField
          name="description"
          multiline
          numberOfLine={3}
          autoCapitalize="none"
          placeholder="Description"
          style={styles.container2}
        />
        <SubmitButton title="Post" style={styles.container2} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: "flex-start",
  },
  container2: {
    padding: 10,
    width: "100%",
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default ListingEditScreen;
