import EstyleSheet from  'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';


export default EstyleSheet.create({

container : 
{
position: 'absolute',
left:0,
right:0,
top:0,
'@media ios' : {
	paddingTop:20,
},
'@media android':{
	paddingTop: StatusBar.currentHeight,
},
},

button: {

	alignSelf: 'flex-end',
	paddingVertical:5,
	paddingHorizontal:20,
},

icon:{

	width:30,
	height: 30,
},

text:
{
fontWeight: '100',
fontSize:25,
letterSpacing: -0.5,
marginTop:15,
backgroundColor: '$primaryBlue',
color: '$white',
},

}); 
