'use strict';

var React = require('react-native');

var {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} = React;

var SecondPageComponent = require('./SecondPageComponent')

var FirstPageComponent = React.createClass({
  getInitialState: function() {
    return {
      id:2,
      user: null,
    };
  },
  componentDidMount: function() {
  },
  _pressButton: function() {
    var _this = this;
    const { navigator } = this.props;
    if(navigator) {
      navigator.push({
        name: 'SecondPageComponent',
        component: SecondPageComponent,
        // 传参
        params: {
          id: this.state.id,
          getUser:function(user){_this.setState({user:user})}
        }
      })
    }
  },
  render: function() {
      if (this.state.user) {
        return (
          <View style={styles.container}>
            <Text>{JSON.stringify(this.state.user)}</Text>
            <TouchableOpacity style={styles.button} onPress={this._pressButton}>
                <Text>点我跳转</Text>
            </TouchableOpacity>
          </View>
        );
      }else {
        return (<View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this._pressButton}>
              <Text>点我跳转</Text>
          </TouchableOpacity>
        </View>)
      }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    flexDirection: 'column',
    backgroundColor: '#ED5565'
  },
  button: {
    padding:20,
    width: 100,
    backgroundColor: '#E6E9ED'
  }
})

module.exports = FirstPageComponent;
