import {Dimensions, StyleSheet} from "react-native";

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 6 / 16);
const imageWidth = dimensions.width;
export const ImageStyles = StyleSheet.create(
  {
    imageStyle: {
      height: imageHeight,
      width: imageWidth,
      resizeMode: "cover"
    },
    imageTextStyle: {
      fontSize: 50,
      fontWeight: "bold",
      textAlign: "center",
      marginHorizontal: "auto",
    }
  }
)
