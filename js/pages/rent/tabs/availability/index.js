'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './styles';

import _times from 'lodash/times';

import Swipeout from '../../../../components/swipeout/';
import Week from '../../../../components/week';


const recurrenceLabels = {
    'one-time': 'One Time',
    'every-day': 'Every Day',
    'every-working-day': 'Every Working Day (Mon - Fri)',
    'every-weekend': 'Every Weekend',
    'every-monday': 'Every Monday',
    'every-tuesday': 'Every Tuesday',
    'every-wednesday': 'Every Wednesday',
    'every-thursday': 'Every Thursday',
    'every-friday': 'Every Friday',
    'every-saturday': 'Every Saturday',
    'every-sunday': 'Every Sunday'
};


class Availability extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        const weeks = _times(53, (i) => { //53 weeks (next year from now)
            return i * 7;
        });

        this.state = {
            dataSource: ds.cloneWithRows(weeks)
        };
    }

    _renderRow(rowData: object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <Week rules={this.props.rules} add={rowData} />
        );
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.search}>

                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={styles.list}
                />
            </View>
        )
    }
}

export default Availability;
