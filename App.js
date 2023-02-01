import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import ChronoStyleScreen from "./screens/ChronoStyleScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      // Background Linear Gradient
      colors={[
        "#2E1152",
        "#382253",
        "#593189",
        "#9745FC",
        "#593189",
        "#382253",
        "#2E1152",
      ]}
      style={styles.rootScreen}
    >
      <StatusBar style="light" />
      <ChronoStyleScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "black",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
