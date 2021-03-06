import EstyleSheet from  'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';


const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;


export default EstyleSheet.create({


	container :
	{
	backgroundColor: '$white',
	width: '90%',
	height: INPUT_HEIGHT,
	borderRadius: BORDER_RADIUS,
	flexDirection: 'row',
	alignItems: 'center',
	marginVertical: 11,
	},


	smallText:
	{
		fontSize: 14,
		color: '$white',
		textAlign: 'center',
	}


 
}); 