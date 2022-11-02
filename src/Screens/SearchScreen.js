import {View, TextInput} from 'react-native';
import {HomeScreenStyles} from "./styles/HomeScreenStyles";
import {useState} from "react";
import {InputStyles} from "./styles/inputStyles";
import {IconStyles} from "./styles/IconStyles";
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchViews} from "../components/SearchViews";

export const SearchScreen = () => {
  const {containerStyle} = HomeScreenStyles;
  const {searchIcon} = IconStyles;
  const {textInputStyle} = InputStyles;
  const [text, setText] = useState('');

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
        {text.length > 0 && <View><SearchViews text={text} /></View>}
      </View>

    </View>
  );


}


