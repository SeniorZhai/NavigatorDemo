/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity,
  AppRegistry
} = React;

var FirstPageComponent = require('./FirstPageComponent')

var NavigatorDemo = React.createClass({
  render: function() {
    var defaultName = 'FirstPageComponent';
    var defaultComponent = FirstPageComponent;
    return (
       <Navigator
         initialRoute={{ name: defaultName, component: defaultComponent }}
         configureScene={() => {
           return Navigator.SceneConfigs.VerticalDownSwipeJump;
         }}
         renderScene={(route, navigator) => {
           let Component = route.component;
           if(route.component) {
              //  把route.params里的每个key作为props的一个属性
              return <Component {...route.params} navigator={navigator} />
           }
         }} />
    );
  }
});



AppRegistry.registerComponent('NavigatorDemo', () => NavigatorDemo);
