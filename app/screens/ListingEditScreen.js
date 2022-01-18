import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";
import { Form, FormField, FormPicker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";

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
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField name="title" maxLength={255} placeholder="Title" />
        <FormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          name="category"
          numberOfColumns={3}
          placeholder="Category"
          items={categories}
          width="50%"
          PickerItemComponent={CategoryPickerItem}
        />
        <FormField
          name="description"
          multiline
          numberOfLine={3}
          autoCapitalize="none"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  }
});

export default ListingEditScreen;
