'use strict';

var React = require('react-native');

var {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} = React;

var FirstPageComponent = require('./FirstPageComponent');

var USER_MODELS = {
  1:{name:'z',age:23},
  2:{name:'t',age:24},
};

var SecondPageComponent = React.createClass({
  getInitialState: function() {
    return {
      id:null
    };
  },

  componentDidMount: function() {
        this.setState({
          id:this.props.id
        });
      },
  _pressButton: function() {
    const { navigator } = this.props;
    if (this.props.getUser) {
      var user = USER_MODELS[this.props.id];
      this.props.getUser(user);
    }
    if(navigator) {
      navigator.pop();
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>获得的参数id={this.state.id}</Text>
        <TouchableOpacity style={styles.button} onPress={this._pressButton}>
            <Text>点我回去</Text>
        </TouchableOpacity>
      </View>
    );}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    flexDirection: 'column',
    backgroundColor: '#4A89DC'
  },
  button: {
    padding:20,
    width: 100,
    backgroundColor: '#E6E9ED'
  }
})

module.exports = SecondPageComponent
