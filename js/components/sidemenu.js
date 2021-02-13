
import React, { Component, PropTypes } from 'react';
import { Dimensions } from 'react-native';

import SideMenu from 'react-native-side-menu';

var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


class FacebookStyle extends Component {
  render() {
    return (
      <SideMenu {...this.props}>
        {this.props.children}
      </SideMenu>
    );
  }
}


class AirBnbStyle extends Component {
  static propTypes = {
    openMenuOffset: PropTypes.number
  }

  static defaultProps = {
    openMenuOffset: deviceWidth * 2 / 3,
  }

  animationStyle(value) {
    const { openMenuOffset } = this.props;
    return {
      transform: [{
        translateX: value.interpolate({
          inputRange: [0, openMenuOffset],
          outputRange: [0, openMenuOffset + 42]
        })
      }, {
        scale: value.interpolate({
          inputRange: [0, openMenuOffset],
          outputRange: [1, 0.7]
        })
      }]
    };
  }

  render() {
    return (
      <SideMenu {...this.props} animationStyle={this.animationStyle.bind(this)}>
        {this.props.children}
      </SideMenu>
    );
  }
}

export default {
  FacebookStyle,
  AirBnbStyle
};
