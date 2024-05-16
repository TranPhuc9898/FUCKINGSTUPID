/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


// Reactotron
if (__DEV__) {
    require("./ReactotronConfig");
  }
  
AppRegistry.registerComponent(appName, () => App);
