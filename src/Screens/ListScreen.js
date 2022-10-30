import {ListScreenStyles} from "./styles/ListScreenStyles";
import {Text, View} from 'react-native';

export const ListScreen = () => {
  const {containerStyle, headingStyle, listItemStyle} = ListScreenStyles;
  const data = ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6",]
  return (
    <View style={containerStyle}>
      <Text style={headingStyle}>List Screen:</Text>
      {
        data.map(item => <Text key={item} style={listItemStyle}> {item}</Text>)
      }
    </View>
  );
}


