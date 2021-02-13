
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';

const TabBar = React.createClass({
  icons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    actions: React.PropTypes.array, //side buttons
    underlineColor: React.PropTypes.string,
    underlineHeight: React.PropTypes.number
  },

  getDefaultProps() {
    return {
      activeTab: 0,
      tabs: [],
      actions: [],
      underlineColor: '#48648b',
      underlineHeight: 2
    };
  },

  onPressTab(i) {
    this.icons.forEach((icon, index) => {
      if (index !== i) {
        icon.setNativeProps({ style: { opacity: 0.4 } });
      } else {
        icon.setNativeProps({ style: { opacity: 1 } });
      }
    });
    this.props.goToPage(i);
  },

  _renderAction(action, i) {
    return (
      <TouchableOpacity key={i + 100} onPress={action.onPress} style={[styles.action, action.style]}>
        {action.component}
      </TouchableOpacity>
    );
  },

  _renderTab(tab, i) {
    return (
      <TouchableOpacity key={i} onPress={() => this.onPressTab(i)} style={styles.tab}>
        <Image style={[styles.icon, { opacity: (this.props.activeTab === i) ? 1 : 0.4 }]} source={tab} ref={(icon) => { this.icons[i] = icon; }} />
      </TouchableOpacity>
    );
  },

  render() {
    const tabWidth = (this.props.containerWidth - (this.props.actions.length * 65)) / this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: tabWidth,
      height: this.props.underlineHeight,
      backgroundColor: this.props.underlineColor,
      bottom: 0,
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  tabWidth, ],
    });

    return (
      <View style={[styles.tabs, this.props.style]}>
        {this.props.tabs.map((tab, i) => {
          return this._renderTab(tab, i);
        })}
        {this.props.actions.map((action, i) => {
          return this._renderAction(action, i);
        })}
        <Animated.View style={[tabUnderlineStyle, { left, }, ]} />
      </View>
    );
  }

});

const styles = StyleSheet.create({
  tabs: {
    height: 40,
    flexDirection: 'row',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.033)',
    backgroundColor: 'transparent'
  },
    tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 7.5,
      paddingBottom: 7.5
    },
      icon: {
        width: 32,
        height: 32
      },
    action: {
      width: 55,
      height: 30,
      margin: 5,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default TabBar;
