import React from 'react';
import EstyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import store from './config/store';
import './reducers';

EstyleSheet.build({

  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#FFA500',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryRed: '#FF0000',
  $primaryYellow: '#FFFF00',
  $primaryBlack: '#000000',
  $primaryViolet: '#8A2BE2',

  $white: '#FFFFFF',
  $lightGray: '#f0f0f0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText:  '#343434',

});

export default () => <Provider store={store}> 
<AlertProvider>
  <Navigator onNavigationStateChange={null}/>
  </AlertProvider>
  </Provider>;