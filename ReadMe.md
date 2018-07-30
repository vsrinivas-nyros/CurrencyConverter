
# Currency Converter

A quick android currency converter that uses exchange rates from http://fixer.io/			

### How To Install

1. Go to your android device's settings
2. Navigate to security settings
3. Ensure "Unknown sources" is enabled
4. Visit https://github.com/vsrinivas-nyros/CurrencyConverter/tree/master/android/app/apk/app-debug.apk in your android device's browser
5. Install

### How To Build

1. Install git
2. Clone the project (`git clone git@github.com:vsrinivas-nyros/CurrencyConverter.git`)
3. Run ”'npm install -g react-native-cli'' to install react native cli.
4. Install node modules by 'npm install' command from the cloned project root directory.
5. Run “sudo react-native start --port= 1234” to start application
6. Connect your mobile device and run 'adb devices' to check device connectivity for USB debugging.
7. Then Run “react-native run-android” to debug app in android mobile or react-native run-ios for IOS mobiles.
8. Run “react-native log-android” to view logs.
9. Enable Live Reloade and Hot Reloading for instant debugging. 


### Project Structure

```
CurrencyConverter
	|
	|---android
	|	|---app(folder)
	|	|---build(folder)
	|	|---gradle(folder)
	|	|---keystores(folder)
	|	|---build.gradle
	|	|---gradle.properties
	|	|---gradlew
	|	|---local.properties
	|	|---settings.gradle
	|
	|-----Ios
	|	|---SampleApp
	|	|---SampleApp.xcodeproj
	|	|---SampleAppTests
	|	|---SampleApp-tvOS
	|	|---SampleApp-tvOSTests
	|
	|-----app(React Native root directory)
	|	|---actions
	|	|	|---currencies.js
	|	|	|---theme.js
	|	|
	|	|---components (component contains UI desing and styles)
	|	|	|---alert
	|	|	|---buttons
	|	|	|---Container
	|	|	|---Header
	|	|	|---List
	|	|	|---Logo
	|	|	|---Text
	|	|	|---TextInput
	|	|
	|	|---config
	|	|	|---routes.js
	|	|	|---sagas.js
	|	|	|---store.js
	|	|
	|	|-----data
	|	|	|---currencies.js
	|	|
	|	|---reducers
	|	|	|---currencies.js
	|	|	|---theme.js
	|	|	|---index.js
	|	|
	|	|---screens
	|	|	|---CurrencyList.js
	|	|	|---Home.js
	|	|	|---Options.js
	|	|	|---Themes.js
	|	|---index.js
	|
	|----Nodemodules
	|----app.json
	|----App.js
	|----currency-converter.keystore
	|----index.js
	|----package.json
	|----package-lock.json
```




