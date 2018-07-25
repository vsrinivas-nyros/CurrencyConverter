import React, { PropTypes }from 'react';
import { Text } from 'react-native'
import moment from 'moment-timezone';
import styles from './styles';


const Convert =  ({ base , quote,  conversionRate }) => 
{
    return(

        <Text style= {styles.smallText}> 
        1 {base} = {conversionRate} {quote} 
    </Text>
    );
  
};

export default Convert;



