/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  Navigator,
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
            // ./node_modules/Libraries/CustomComponents/NavigatorSceneConfigs.js 文件可以看到支持的进场动画
            return Navigator.SceneConfigs.HorizontalSwipeJump;
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
