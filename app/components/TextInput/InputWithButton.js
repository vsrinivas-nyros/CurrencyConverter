import React  from 'react';
import PropTypes from 'prop-types';
import { View, Text,TouchableHighlight,TextInput } from 'react-native';
import color from 'color';
import styles from './styles';


const InputWithButton = (props) => {

const {onPress, buttonText, editable=true} =props;

const unserlayColor =color(styles.$buttonBackgroundColorBase).
darken(styles.$buttonBackgroundColorModifier,
	);

const containerStyles = [styles.container];

const buttonTextStyles = [styles.buttonText];

if(props.textColor)
{
	buttonTextStyles.push({color: props.textColor})
}

if(editable === false)
{
	containerStyles.push(styles.containerDisabled);
}

return(
<View style={containerStyles}>
<TouchableHighlight 
   unserlayColor= {unserlayColor}
   style={styles.buttonContainer} 
   onPress={onPress}>
<Text style={buttonTextStyles}> {buttonText} </Text>
</TouchableHighlight>
<View style={styles.border} />
<TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
</View>
);

};

InputWithButton.propTypes = {

	onPress: PropTypes.func,
	buttonText:PropTypes.string,
	editable: PropTypes.bool,
	textColor: PropTypes.string,
};

export default InputWithButton;
