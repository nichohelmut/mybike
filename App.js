import React, { useState } from "react";
import Screen from "./app/components/Screen";

import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furnituer", value: 1 },
  { label: "Cloth", value: 2 },
  { label: "Macs", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      ></AppPicker>
      <AppTextInput icon="email" placeholder="Email"></AppTextInput>
    </Screen>
  );
}
