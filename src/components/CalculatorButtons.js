import {View} from "react-native";
import {CalculatorStyles} from "./styles/calculator.styles";
import {CalculatorButton} from "./CalculatorButton";
import {useState} from "react";

export const CalculatorButtons = ({setValue, value,}) => {
  const [previousValue, setPreviousValue] = useState('');
  const [previousOperator, setPreviousOperator] = useState();
  const {buttonsRow} = CalculatorStyles
  const onClick = (number) => {
    setValue(value + number);
  }

  const calculate = () => {
    switch (previousOperator) {
      case "+":
        return Number(previousValue) + Number(value);
      case "-":
        return Number(previousValue) - Number(value);
    }

  }
  const onOperatorPressed = (operator) => {
    if (!previousOperator) {
      setPreviousOperator(operator);
      setPreviousValue(value);
      setValue('');
      return;
    }
    let newValue = calculate();
    setPreviousOperator(operator);
    setPreviousValue(newValue);
    setValue('');
  }

  const submit = () => {
    if (!previousOperator) return;
    let newValue = calculate();
    setValue(newValue);
    setPreviousValue('');
    setPreviousOperator('');
  }
  const clearAll = () => {
    setValue('');
    setPreviousValue('');
    setPreviousOperator('');
  }
  const backspace = () => {
    const newValue = value.slice(0, value.length - 1);
    setValue(newValue);
  }
  return (
    <View>
      <View style={buttonsRow}>
        <CalculatorButton title="1" onClick={() => {
          onClick("1")
        }}/>
        <CalculatorButton title="2" onClick={() => {
          onClick("2")
        }}/>
        <CalculatorButton title="3" onClick={() => {
          onClick("3")
        }}/>
      </View>
      <View style={buttonsRow}>
        <CalculatorButton title="4" onClick={() => {
          onClick("4")
        }}/>
        <CalculatorButton title="5" onClick={() => {
          onClick("5")
        }}/>
        <CalculatorButton title="6" onClick={() => {
          onClick("6")
        }}/>
      </View>
      <View style={buttonsRow}>
        <CalculatorButton title="7" onClick={() => {
          onClick("7")
        }}/>
        <CalculatorButton title="8" onClick={() => {
          onClick("8")
        }}/>
        <CalculatorButton title="9" onClick={() => {
          onClick("9")
        }}/>
      </View>
      <View style={buttonsRow}>
        <CalculatorButton title="+" onClick={() => {
          onOperatorPressed("+")
        }}/>
        <CalculatorButton title="0" onClick={() => {
          onClick("0")
        }}/>
        <CalculatorButton title="-" onClick={() => {
          onOperatorPressed("-")
        }}/>
      </View>
      <View style={buttonsRow}>
        <CalculatorButton title="C" onClick={backspace}/>
        <CalculatorButton title="=" onClick={() => {
          submit()
        }}/>
        <CalculatorButton title="AC" onClick={clearAll}/>
      </View>
    </View>
  )
}
