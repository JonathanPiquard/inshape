
'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dimensions, ScrollView, Animated, View, TouchableHighlight, Image, Text } from 'react-native';

import { popRoute } from '../actions/route';
import { openDrawer } from '../actions/drawer';

import PageAction from './pageAction';

var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


class Page extends Component {
    static propTypes = {
        title: PropTypes.string,
        leftActions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.object, PropTypes.component]),
        rightActions: PropTypes.oneOfType([PropTypes.bool, PropTypes.array, PropTypes.object, PropTypes.component]),
        hasHeader: PropTypes.bool
    }

    static defaultProps = {
        title: '',
        rightActions: <PageAction />,
        hasHeader: true,
    }

    _parseActions(actions) {
        if (typeof actions === 'object') {
            return <PageAction {...actions} />;
        }
        else if (Array.isArray(actions)) {
            return (
                <View>
                    {actions.map((action) => {
                        if (typeof action === 'object') {
                            return <PageAction {...action} />;
                        } else {
                            return action;
                        }
                    })}
                </View>
            );
        }
        else if (actions) { //component maybe default value
            return actions;
        }
        else { //false or equivalent but not undefined because it will be the default value => no actions so standard placeholder
            return <View style={{marginHorizontal: 10, width: 24}}></View>;
        }
    }

    _renderHeader() {
        const leftActionsDefault = ( //can't be defined within defaultProps because it needs to access this.props
            <TouchableHighlight onPress={this.props.openDrawer} style={{marginHorizontal: 10}}>
                <Image source={require('../../images/icons/glyphs/menu.png')} style={{height: 24, width: 24}} />
            </TouchableHighlight>
        );

        return (
            <View style={{flexDirection: 'row', height: 42, width: deviceWidth, alignItems: 'center', justifyContent: 'space-between'}}>
                {(typeof this.props.leftActions !== 'undefined') ? this._parseActions(this.props.leftActions) : leftActionsDefault}

                <Text style={{flex: 1, textAlign: 'center', fontSize: 20, color: '#f9f9f9'}}>{this.props.title}</Text>

                {this._parseActions(this.props.rightActions)}
            </View>
        );
    }

    render() {
        return (
            <Image source={require('../../images/backgrounds/bg2-1.jpg')} style={{flex: 1, width: deviceWidth, height: deviceHeight}}>

                {(this.props.hasHeader) ? this._renderHeader() : null}

                <ScrollView style={[{width: deviceWidth, height: deviceHeight - 42}, this.props.style]}>
                    {this.props.children}
                </ScrollView>
            </Image>
        );
    }

}

const mapDispatchToProps = {
    popRoute,
    openDrawer
};

export default connect(null, mapDispatchToProps)(Page);
