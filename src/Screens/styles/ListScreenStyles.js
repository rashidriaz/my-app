import {StyleSheet} from "react-native";

export const ListScreenStyles = StyleSheet.create({
  containerStyle: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
    borderRadius: 20,
    marginVertical: "auto",
    marginHorizontal: 200,
    alignContent: "center"
  },
  headingStyle:
    {
      textAlign: "center",
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
  listItemStyle: {
    marginVertical: 5,
    marginHorizontal: "auto",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center"
  }
});
