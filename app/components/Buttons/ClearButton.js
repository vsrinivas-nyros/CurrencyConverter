import React, { PropTypes }from 'React';
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './styles';

const ClearButton = ( {text, onPress }) => (

 <TouchableOpacity style= {styles.container} onPress= {onPress}>
	 <View style= {styles.wrapper}>
		 <Image resizeMode="contain" style= {styles.image } source={require('./images/updown.png')}/>
		 {/* <Text style= {styles.text}> Reverse Currencies </Text> */}
	 </View>
 </TouchableOpacity>
	);


	ClearButton.propTypes = {

		// text: PropTypes.string,
		// onPress: PropTypes.func,
	}

	export default ClearButton;
 
 