import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
      },
    },
    Options: {
      screen: Options,
    navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTintColor: '#FFFFFF',
        headerStyle:{
          backgroundColor : navigation.state.params.color,  
        },
        headerTitleStyle: {
        
        }
      }),
    },
    Themes: {
      screen: Themes,  
    navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
        headerTintColor: '#FFFFFF',
        headerStyle:{
          backgroundColor : navigation.state.params.color,  
        },
        headerTitleStyle: {
      
        }
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = StackNavigator({
  CurrencyList: {
    screen: CurrencyList,

    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
      headerTintColor: '#FFFFFF',
      headerStyle:{
        backgroundColor : navigation.state.params.color,  
      },
      headerTitleStyle: {
     
      }
    }),
  },
});

export default StackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);