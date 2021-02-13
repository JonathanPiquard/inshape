
'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { TouchableHighlight, Image } from 'react-native';

import { pushNewRoute, popRoute } from '../actions/route';


class PageAction extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        redirectTo: PropTypes.string,
        icon: PropTypes.any //e.i. require('icon.png')
    }

    static defaultProps = {
        redirectTo: 'search',
        icon : require('../../images/icons/glyphs/search.png')
    }

    onPress(event) {
        if (typeof this.props.onPress !== 'undefined') {
            return this.props.onPress(event);
        }
        else if (this.props.redirectTo === 'back') {
            return this.props.popRoute();
        } else {
            return this.props.pushNewRoute(this.props.redirectTo);
        }
    }

    render() {
        return (
            <TouchableHighlight onPress={this.onPress.bind(this)} style={{marginHorizontal: 10}}>
                <Image source={this.props.icon} style={{height: 24, width: 24}} />
            </TouchableHighlight>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute,
    popRoute
};

export default connect(null, mapDispatchToProps)(PageAction);
