'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight } from 'react-native';

import Swipeout from '../../../../components/swipeout/';
import styles from './styles';

import { Edit, Trash } from '../../../../components/swipeoutBtns';


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

        this.state = {
            dataSource: ds.cloneWithRows(this.props.availability.rules)
        };
    }

    _renderRow(rowData: object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <View style={styles.rule}>
                <Swipeout right={[Edit, Trash]} autoClose={true} backgroundColor="#f9f9f9">
                    <TouchableHighlight onPress={() => {
                       //open the event
                    }}>
                        <View style={styles.listItemContent}>
                            <View style={styles.header}>
                                { (rowData.recurrence === 'one-time') ? <Text style={styles.date}>{rowData.date.day}</Text> : <Text style={styles.date}>{rowData.date.from} - {rowData.date.to}</Text> }
                                <View style={styles.recurrenceWrapper}>
                                    <Text style={styles.recurrence}>{recurrenceLabels[rowData.recurrence]}</Text>
                                </View>
                            </View>
                            <View style={styles.periods}>
                                {rowData.periods.map((period) => <Text style={styles.period}>{period.from} - {period.to}</Text>)}
                            </View>
                        </View>
                    </TouchableHighlight>
                </Swipeout>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.buttonGroup}>
                    <TouchableHighlight style={[styles.button, styles.mainButton]}>
                        <View style={styles.buttonContent}>
                            <Image source={require('../../../../../images/icons/add-rule.png')} style={{height: 39, width: 39}} />
                            <Text style={styles.mainButtonText}>New Rule</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, styles.sideButton]}>
                        <View style={styles.buttonContent}>
                            <Image source={require('../../../../../images/icons/gear-background.png')} style={{height: 42, width: 42}} />
                        </View>
                    </TouchableHighlight>
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    style={styles.list}
                />
            </View>
        )
    }
}

export default Availability;
