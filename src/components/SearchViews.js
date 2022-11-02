import {Text, View} from "react-native";


export const SearchViews = ({text})=>{
  const colors = ["red", "green", "blue", "black", "brown", "black", "grey", "magenta"];
  let i = 0;
  return colors.map(color => {
    i++;
    return (<View key={i} style={{
      backgroundColor: color,
      height: (10 * i),
      width: (30 * i),
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 10,
    }
    }><Text style={{
      color: "white",
      fontSize: (i * 5),
      textAlign: "center",
      margin: "auto",
    }}>{text}</Text></View>)
  })
}
