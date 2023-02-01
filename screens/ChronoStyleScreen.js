import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";

function ChronoStyleScreen() {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Number Input</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
      />
      <Text style={styles.title}>Text Input</Text>
      <TextInput style={styles.textInput}/>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
    
        </View>
        <View style={styles.buttonContainer}>
      
    
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
export default ChronoStyleScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#2E1152',
    borderRadius: 8,
    // android only
    elevation: 4,
    // Ios and maybe web
    shadowColor: '#9745FC',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#14EE98",
    borderBottomWidth: 2,
    color: "#14EE98",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#C38FFB",
  },
  textInput: {
    height: 50,
    width: 200,
    fontSize: 32,
    borderBottomColor: "#14EE98",
    borderBottomWidth: 2,
    color: "#14EE98",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#C38FFB",
  },
  title: {
    fontSize: 32,
    color: "#5BC4F0",
    padding: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    // flex: 1,
  },

  // rootContainer: {
  //   flex: 1,
  //   marginTop: 100,
  //   alignItems: 'center',
  // },
  // numberInput: {
  //   height: 50,
  //   width: 50,
  //   fontSize: 32,
  //   borderBottomColor: Colors.accent500,
  //   borderBottomWidth: 2,
  //   color: Colors.accent500,
  //   marginVertical: 8,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  // buttonsContainer: {
  //   flexDirection: 'row',
  // },
  // buttonContainer: {
  //   flex: 1,
  // },
});
