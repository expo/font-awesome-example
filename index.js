'use strict';

import { AppRegistry, Text, View } from 'react-native';

import { Font } from 'exponent';
import React from 'react';

class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'FontAwesome': require('./assets/fonts/fontawesome-webfont.ttf')
      // Please change this url to your local asset address
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {this.state.fontLoaded ? <FontAwesome>{Icons.addressBook}</FontAwesome> : null}
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('main', () => App);
