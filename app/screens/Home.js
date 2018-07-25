import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { Convert } from '../components/Text';
import { Header } from '../components/Header';
import { connectAlert } from '../components/Alert';
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';

class Home extends Component {

  state = {
    data: ''
 }

  handlePressBaseCurrency = () => 
  {
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base', color: this.props.primaryColor });
  };

  handlePressQuoteCurrency = () => {
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote', color: this.props.primaryColor });
  };



  handleChangeText = (amount) => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };



  handleSwapCurrencies = () =>
   {
   this.props.dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    this.props.navigation.navigate('Options', { title: 'Options', type: 'options', color: this.props.primaryColor });
  };



  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }
 
  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
      this.props.alertWithType('error', 'Error', nextProps.currencyError);
    }
  }



  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }



    return (
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        
        <Header onPress={this.handleOptionsPress} />
      
       <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={this.props.amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={this.props.primaryColor}/>

          <ClearButton  onPress={this.handleSwapCurrencies} />

          <InputWithButton
            buttonText={this.props.quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            defaultValue={quotePrice}
            editable={false}
            textColor={this.props.primaryColor}
          />

          <Convert
            base={this.props.baseCurrency}
            quote={this.props.quoteCurrency}
            date={this.props.lastConvertedDate}
            conversionRate={this.props.conversionRate}
          />
        
        </KeyboardAvoidingView>
      </Container>
    );
  }
}




const mapStateToProps = (state) => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  
  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    isFetching: conversionSelector.isFetching,
    lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
    primaryColor: state.theme.primaryColor,
    currencyError: state.currencies.error,
  };

};

export default connect(mapStateToProps)(connectAlert(Home));