import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-ionicons';
import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
 
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handlePressTheme = () => {
    this.props.navigation.navigate('Themes', { title: 'Themes', type: 'themes', color: this.props.primaryColor });
  };

  handlePressSite = () => {
    Linking.openURL('https://nyros.com/').catch(() =>
      this.props.alertWithType('error', 'Sorry!', "Nyros  can't be opened now!"));
  };

  render() 
  {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default"/>
        <ListItem
          text="Themes"
          onPress={this.handlePressTheme}
          customIcon={
            <Icon name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />
          }
          
        />
        <Separator />
        <ListItem
          text="Nyros"
          onPress={this.handlePressSite}
          customIcon={<Icon name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
        
        />
        <Separator />
      </ScrollView>
    );
  }
}


const mapStateToProps = (state) => {

  return {
    primaryColor: state.theme.primaryColor,
  };

};

export default connect(mapStateToProps)(connectAlert(Options));
