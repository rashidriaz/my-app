import {useState} from "react";
import {View, Text, Pressable} from 'react-native';
import {CounterScreenStyles} from "./styles/CounterScreenStyles";

export const CounterScreen = () => {
  const {counterStyle, buttonStyle, buttonTextStyle,buttonRowStyle, containerStyle} = CounterScreenStyles;
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  }
  return (
    <View style={containerStyle}>
      <Text style={counterStyle}>Counter: {counter}</Text>
      <View style={buttonRowStyle}>
      <Pressable style={buttonStyle} onPress={increase}>
        <Text style={buttonTextStyle}>Increase</Text>
      </Pressable>
      <Pressable style={buttonStyle} onPress={decrease}>
        <Text style={buttonTextStyle}>Decrease</Text>
      </Pressable>

      </View>
    </View>
  );
};

