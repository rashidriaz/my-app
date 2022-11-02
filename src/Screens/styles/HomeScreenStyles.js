import {StyleSheet} from "react-native";
import {buttonColor} from "../../utils/constants";

export const HomeScreenStyles = StyleSheet.create({
  containerStyle: {
    marginVertical: "auto",
    marginHorizontal: "auto",
  },
  textStyle:
    {
      fontSize: 15,
      color: '#ff00000',
      fontWeight: 'bold',
      alignSelf: 'center'
    },
  headingStyle: {
    fontSize: 30,
    paddingBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: buttonColor,
    borderStyle: "solid",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    justifyContent: "center",
  },
  buttonTextStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginHorizontal: "auto"
  },

  inlineComponents:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
