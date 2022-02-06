import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {localizationService} from './src/services/localization/i18n'; // need for React i18n initialization
import {name} from './app.json';
import {App} from './src/App';

LogBox.ignoreAllLogs();
localizationService.init();
enableScreens();

AppRegistry.registerComponent(name, () => App);
