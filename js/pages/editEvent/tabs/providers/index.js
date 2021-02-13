'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight, Switch } from 'react-native';

import styles from './styles';
import UsersList from '../../../../components/usersList';

const SwitchAction = <Switch style={{flex: 1}} value={/*this.props.event.providers.indexOf(rowData._id) > -1*/ true} />;


class Providers extends Component {

    render() {
        return (
            <UsersList users={this.props.activity.providers} actions={[SwitchAction]} />
        );
    }

}

export default Providers;
