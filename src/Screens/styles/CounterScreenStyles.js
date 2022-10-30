import {StyleSheet} from "react-native";
import {buttonColor, fontColorDark} from "../../utils/constants";

export const CounterScreenStyles = StyleSheet.create({
  containerStyle: {
    marginVertical: "auto"

  },
  counterStyle: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "w700",
    color: fontColorDark
  },
  buttonStyle: {
    backgroundColor: buttonColor,
    borderStyle: "solid",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 50,
    marginHorizontal: "1%",
    width: '46%',
    justifyContent: "center"
  },
  buttonTextStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginHorizontal: "auto"
  },
  buttonRowStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
