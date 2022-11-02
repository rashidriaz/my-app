import {View} from "react-native";
import {useState} from "react";

import {CalculatorButtons} from "../components/CalculatorButtons";
import {CalculatorDisplay} from "../components/CalculatorDisplay";

export const CalculatorScreen = () => {
  const [value, setValue] = useState('');
  return <View>
    <CalculatorDisplay text={value}/>
    <CalculatorButtons setValue={setValue} value={value}/>
  </View>
}
