import { View} from 'react-native';
import {ImageDetail} from '../components/ImageDetail';
import * as beachImage from "../../assets/beach.jpg";

export const ImageScreen = ()=> {
  return (
    <View>
      <ImageDetail title="Beach" imageSource={beachImage}/>
    </View>
  );
}
