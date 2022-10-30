import {HomeScreenStyles} from "./styles/HomeScreenStyles";
import {Text, View, TouchableOpacity, Pressable} from 'react-native';
import {backgroundColor} from "../utils/constants";

export const HomeScreen = ({navigation}) => {
  const {containerStyle, textStyle, headingStyle, buttonStyle, buttonTextStyle} = HomeScreenStyles;
  return (
    <View style={containerStyle}>
      <Text style={headingStyle}>Navigate to:</Text>
      <Pressable style={buttonStyle} onPress={() => {
        navigation.navigate('list')
      }}><Text style={buttonTextStyle}>List</Text></Pressable>
      <TouchableOpacity style={buttonStyle} onPress={() => {
        navigation.navigate('image')
      }}>
        <Text style={buttonTextStyle}>Photos</Text>
      </TouchableOpacity>

      <Pressable style={buttonStyle} onPress={() => {
        navigation.navigate('counter')
      }}><Text style={buttonTextStyle}>Counter</Text></Pressable>
      <Pressable style={buttonStyle} onPress={() => {
        navigation.navigate('inputScreen')
      }}><Text style={buttonTextStyle}>Text Input Screen</Text></Pressable>
      <Pressable style={buttonStyle} onPress={() => {
        navigation.navigate('searchScreen')
      }}><Text style={buttonTextStyle}>Search Screen</Text></Pressable>
      <Pressable style={buttonStyle} onPress={() => {
        navigation.navigate('color')
      }}><Text style={buttonTextStyle}>Random Color Generator</Text></Pressable>
    </View>
  );
}


