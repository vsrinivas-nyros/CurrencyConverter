import { Dimensions } from 'react-native';
import EstyleSheet from  'react-native-extended-stylesheet';


const imageWidth = Dimensions.get('window').width / 2;

export default EstyleSheet.create({

container : 
{
alignItems: 'center', 
},

wrapper:
{

	flexDirection: 'row',
	alignItems: 'center',
},


image: 
{
width: 30,
height:30,
},


text:
{
fontWeight: '100',
fontSize:15,
letterSpacing: -0.5,
marginTop:15,
backgroundColor: '$primaryBlue',
color: '$white',
},

}); 