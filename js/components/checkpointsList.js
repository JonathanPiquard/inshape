'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight } from 'react-native';
import Swipeout from './swipeout/';

import Checkpoint from './checkpoint';


class CheckpointsList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(this.props.checkpoints)
        };
    }

    _renderRow(rowData: object, sectionID: string, rowID: string) {
        const isFirst = rowID === (this.props.checkpoints.length - 1).toString();
        const isLast = rowID === '0';

        if (typeof this.props.swipeoutBtns !== 'undefined') {
            return (
                <Swipeout right={this.props.swipeoutBtns} autoClose={true} style={{marginHorizontal: 10}}>
                    <Checkpoint checkpoint={rowData} isFirst={isFirst} isLast={isLast} />
                </Swipeout>
            );
        } else {
            return (
                <View style={{marginHorizontal: 10}}>
                    <Checkpoint checkpoint={rowData} isFirst={isFirst} isLast={isLast} />
                </View>
            );
        }
    }

    _renderSeparator(sectionID: string, rowID: string, adjacentRowHighlighted: bool) {
        if (rowID != this.props.checkpoints.length - 1) { //string == number
            return <View style={{flex: 1, left: 69.5, width: 2, height: 13.33, backgroundColor: '#f9f9f9'}}></View>;
        }
        else {
            return;
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                renderSeparator={this.props.renderSeparator || this._renderSeparator.bind(this)}
                style={{paddingVertical: 13.33, flex: 1}}
            />
        )
    }
}

export default CheckpointsList;
