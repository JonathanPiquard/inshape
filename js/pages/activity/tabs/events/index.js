'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight } from 'react-native';

import Swipeout from '../../../../components/swipeout/';
import styles from './styles';

import { Edit, Trash } from '../../../../components/swipeoutBtns';
import Event from '../../../../components/event';

class Events extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(this.props.events)
        };
    }

    _renderRow(rowData: object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <Event event={rowData} key={rowData._id} style={styles.event} />
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                style={styles.list}
            />
        )
    }
}

export default Events;
