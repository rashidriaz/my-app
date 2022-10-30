import {Text, View, TextInput} from 'react-native';
import {HomeScreenStyles} from "./styles/HomeScreenStyles";
import {useState} from "react";
import {InputStyles} from "./styles/inputStyles";
import {IconStyles} from "./styles/IconStyles";
import Icon from 'react-native-vector-icons/FontAwesome';


export const SearchScreen = () => {
  const {containerStyle, textStyle, inlineComponents} = HomeScreenStyles;
  const {searchIcon} = IconStyles;
  const {textInputStyle} = InputStyles;
  const [text, setText] = useState('');


  const getViews = () => {
    const colors = ["red", "green", "blue", "black", "brown", "black", "grey", "magenta"];
    let i = 0;
    return colors.map(color => {
      i++;
      return (<View key={i} style={{
        backgroundColor: color,
        height: (50 * i),
        width: (75 * i),
        marginVertical: 20,
        marginHorizontal: 10,
        display: "inline",
        padding: "auto",
        borderRadius: 10,
      }
      }><Text style={{
        color: "white",
        fontSize: (i * 10),
        textAlign: "center",
        margin: "auto",
      }}>{text}</Text></View>)
    })
  }
  return (
    <View style={containerStyle}>
      <View style={{display: "block", width: "100%"}}>
        <Icon name="search" style={searchIcon}/>
        <TextInput
          style={textInputStyle}
          placeholder="Search"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
        />
        {text.length > 0 && <View>{getViews()}</View>}
      </View>

    </View>
  );


}


