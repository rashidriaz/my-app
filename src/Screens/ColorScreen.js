import {useState} from "react";
import {View, Text, Pressable} from "react-native";
import {CounterScreenStyles} from "./styles/CounterScreenStyles";
import {HomeScreenStyles} from "./styles/HomeScreenStyles";

export const ColorScreen = () => {
  const {textStyle} = HomeScreenStyles;
  const { buttonStyle, buttonTextStyle,buttonRowStyle, containerStyle} = CounterScreenStyles;
  const [red, setRed] = useState(100);
  const [green, setGreen] = useState(100);
  const [blue, setBlue] = useState(100);
  const increaseColor = (value, setColor) => {
    setColor(value+1);
  }
  const decreaseColor = (value, setColor) => {
    setColor(value-1);
  }
  const viewStyles = () => {
    return {
      marginHorizontal: "auto",
      marginVertical: 20,
      height: 200, width: 200, backgroundColor: randomRGB({red, green, blue}),
    }
  };
  return (
    <View style={containerStyle}>
      <View style={viewStyles()}/>
     <View>
       <Text style={textStyle}>Red Color Value: {red}</Text>
       <View style={buttonRowStyle}>
         <Pressable style={buttonStyle} onPress={()=>increaseColor(red, setRed)}>
           <Text style={buttonTextStyle}>Increase</Text>
         </Pressable>
         <Pressable style={buttonStyle} onPress={()=>decreaseColor(red, setRed)}>
           <Text style={buttonTextStyle}>Decrease</Text>
         </Pressable>
       </View>
     </View>

      <View>
        <Text style={textStyle}>Green Color Value: {green}</Text>
        <View style={buttonRowStyle}>
          <Pressable style={buttonStyle} onPress={()=>increaseColor(green, setGreen)}>
            <Text style={buttonTextStyle}>Increase</Text>
          </Pressable>
          <Pressable style={buttonStyle} onPress={()=>decreaseColor(green, setGreen)}>
            <Text style={buttonTextStyle}>Decrease</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <Text style={textStyle}>Blue Color Value: {blue}</Text>
        <View style={buttonRowStyle}>
          <Pressable style={buttonStyle} onPress={()=>increaseColor(blue, setBlue)}>
            <Text style={buttonTextStyle}>Increase</Text>
          </Pressable>
          <Pressable style={buttonStyle} onPress={()=>decreaseColor(blue, setBlue)}>
            <Text style={buttonTextStyle}>Decrease</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const randomRGB = ({red, green, blue}) =>`rgb(${red},${green},${blue})`;

