'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight } from 'react-native';
import Swipeout from './swipeout/';

import User from './user';


class UsersList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(this.props.users)
        };
    }

    _renderRow(rowData: object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        if (typeof this.props.swipeoutBtns === 'undefined') {
            return (
                <User user={rowData} key={rowData._id} actions={this.props.actions} style={{marginTop: 10}} />
            );
        } else {
            return (
                <Swipeout right={this.props.swipeoutBtns} autoClose={true} key={rowData._id} style={{marginTop: 10}}>
                    <User user={rowData} actions={this.props.actions} />
                </Swipeout>
            );
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                style={[{marginTop: 15, marginBottom: 10, paddingTop: -10, paddingHorizontal: 10}, this.props.style]}
            />
        )
    }
}

export default UsersList;
