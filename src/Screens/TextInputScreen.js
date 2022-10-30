import {Text, View, TextInput} from 'react-native';
import {HomeScreenStyles} from "./styles/HomeScreenStyles";
import {useState} from "react";
import {InputStyles} from "./styles/inputStyles";

export const TextInputScreen = () => {
  const {containerStyle, textStyle} = HomeScreenStyles;
  const {textInputStyle} = InputStyles;
  const [text, setText] = useState('');
  return (
    <View style={containerStyle}>
      <TextInput
        style={textInputStyle}
        placeholder="Type anything here!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={textStyle}>Entered Text is: {text}</Text>
    </View>
  );
}


