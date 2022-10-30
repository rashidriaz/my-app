import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeScreen} from './src/Screens/HomeScreen';
import {ListScreen} from './src/Screens/ListScreen';
import {ImageScreen} from './src/Screens/ImageScreen';
import {CounterScreen} from './src/Screens/CounterScreen'
import {ColorScreen} from './src/Screens/ColorScreen'
import {TextInputScreen} from "./src/Screens/TextInputScreen";
import {SearchScreen} from "./src/Screens/SearchScreen";

const navigator = createStackNavigator(
{
	home: HomeScreen,
  list: ListScreen,
  image: ImageScreen,
  counter: CounterScreen,
  color: ColorScreen,
  inputScreen: TextInputScreen,
  searchScreen: SearchScreen
},
{
	initialRouteName: "home"
}

);
export default createAppContainer(navigator);
