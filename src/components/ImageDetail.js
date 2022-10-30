import {View, Text, Image} from 'react-native';
import {ImageStyles} from "../Screens/styles/ImageStyles";

export const ImageDetail = ({imageSource, title}) => {
  const {imageStyle, imageTextStyle} = ImageStyles;
  return (
    <View>
      <Image style={imageStyle} source={imageSource}></Image>
      <Text style={imageTextStyle}>{title}</Text>
    </View>
  );
};

