import {View, Text} from "react-native";
import {CalculatorStyles} from "./styles/calculator.styles";

export const CalculatorDisplay = ({text}) => {
  const {displayContainer, displayText, placeholderText, largeDisplayText} = CalculatorStyles;

  const getStyles = ()=>{
    const textLength = text.length;
    if (textLength === 0){
      return placeholderText;
    }
    if (textLength > 6){
      return largeDisplayText;
    }
    return displayText;
  }
  return (<View style={displayContainer}>
    <Text style={getStyles()}>{text.length===0? "Calculator": text}</Text>
  </View>);
}
