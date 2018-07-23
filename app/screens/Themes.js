import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ListItem, Separator } from '../components/List';
import { changePrimaryColor } from '../actions/theme';

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

class Themes extends Component 
{
  static propTypes = {

    navigation: PropTypes.object,
    dispatch: PropTypes.func,

  };

  handleThemePress = (color) =>
   {
    //this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack(null);

  };

  render() 
  {
    return (
      <ScrollView>

  <StatusBar translucent={false} barStyle="default" />
  <ListItem
    text="Blue"
    onPress={() => this.handleThemePress(styles.$blue)}
    selected
    checkmark={false}
    iconBackground={styles.$blue}
  />
    <Separator />


    <ListItem
      text="Orange"
      onPress={() => this.handleThemePress(styles.$orange)}
      selected
      checkmark={false}
      iconBackground={styles.$orange}
    />
    <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handleThemePress(styles.$green)}
          selected
          checkmark={false}
          iconBackground={styles.$green}
        />
    <Separator />
            <ListItem
              text="Purple"
              onPress={() => this.handleThemePress(styles.$purple)}
              selected
              checkmark={false}
              iconBackground={styles.$purple}
            />
    <Separator />
    <ListItem
          text="Red"
          onPress={() => this.handleThemePress(styles.$red)}
          selected
          checkmark={false}
          iconBackground={styles.$red}
        />
    <Separator />
            <ListItem
              text="Yellow"
              onPress={() => this.handleThemePress(styles.$yellow)}
              selected
              checkmark={false}
              iconBackground={styles.$yellow}
            />
    <Separator />
    <ListItem
          text="Black"
          onPress={() => this.handleThemePress(styles.$black)}
          selected
          checkmark={false}
          iconBackground={styles.$black}
        />
    <Separator />
            <ListItem
              text="Violet"
              onPress={() => this.handleThemePress(styles.$violet)}
              selected
              checkmark={false}
              iconBackground={styles.$violet}
            />
    <Separator />

      </ScrollView>
    );
  }
}

export default Themes;
