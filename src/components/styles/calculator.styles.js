import {StyleSheet} from "react-native";


export const CalculatorStyles = StyleSheet.create({
  displayContainer: {
    height: 100,
    width: "98%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    borderWidth: 2,
  },
  displayText: {
    color: "#0e1117",
    fontSize: 70,
    fontWeight: "bold",
    marginVertical: "auto",
  },
  placeholderText: {
    color: "#a6abb3",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: "auto",
  },
  largeDisplayText: {
    color: "#0e1117",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: "auto",
  },
  buttonsRow: {
    width: "100%",
    flexDirection: "row",
  },
  button: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#192031",
    marginVertical: 10,
    paddingVertical: "auto",
    marginHorizontal: 10,
    height: 80,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    textAlignVertical: "center",
    marginVertical: "auto"
  }
})
