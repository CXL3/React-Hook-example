import React from "react";
import UseStateComponent from "./Hooks/UseStateComponent";
import UseCallback from "./Hooks/UseCallback";
import UseEffect from "./Hooks/UseEffect";
import EffectComponent2 from "./Hooks/UseEffect2";
import ContextComponent from "./Hooks/UseContext";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <UseStateComponent />
      <UseCallback />
      <EffectComponent2 />
      <ContextComponent />

      <UseEffect />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
