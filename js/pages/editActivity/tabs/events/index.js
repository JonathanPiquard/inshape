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
            dataSource: ds.cloneWithRows(this.props.activity.events)
        };
    }

    _renderRow(rowData: object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <View style={styles.listItem}>
                <Swipeout right={[Edit, Trash]} autoClose={true} backgroundColor="#f9f9f9">
                    <Event event={rowData} />
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
                            <Image source={require('../../../../../images/icons/add-event.png')} style={{height: 42, width: 42, marginRight: 10}} />
                            <Text style={styles.mainButtonText}>New Event</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.button, styles.sideButton]}>
                        <View style={styles.buttonContent}>
                            <Image source={require('../../../../../images/icons/gear-background.png')} style={{height: 48, width: 48}} />
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

export default Events;
