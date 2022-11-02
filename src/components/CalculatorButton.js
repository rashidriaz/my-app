import {Text, TouchableOpacity} from "react-native";
import {CalculatorStyles} from "./styles/calculator.styles";

export const CalculatorButton = ({onClick, title}) => {
  const {button, buttonText} = CalculatorStyles;
  return (
    <TouchableOpacity style={button} onPress={onClick}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}
