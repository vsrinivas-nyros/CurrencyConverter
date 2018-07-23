import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../screens/Home';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import CurrencyList from '../screens/CurrencyList';
import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
    $blue: '$primaryBlue',
    $orange: '$primaryOrange',
    $green: '$primaryGreen',
    $purple: '$primaryPurple',
    $red: '$primaryRed',
    $yellow: '$primaryYellow',
    $black: '$primaryBlack',
    $violet: '$primaryViolet',
  });

export default StackNavigator({

    Home:{
        screen: Home,
        navigationOptions:{
            header: () => null,
        },
    },
    Options: {
        screen: Options,
        navigationOptions: {
          headerTitle: 'Options',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#4F6D7A'
         }
        },
      },

      Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: 'Themes',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#4F6D7A'
           }
          },
      },
      
    CurrencyList:{
        screen:CurrencyList,
        navigationOptions:({navigation}) => ({
            headerTitle: navigation.state.params.title,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#4F6D7A'
           }
        })
    },

},
{
    mode: 'modal',

});

