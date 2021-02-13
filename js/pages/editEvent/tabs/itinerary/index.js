'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './styles';

import CheckpointsList from '../../../../components/checkpointsList';
import { Edit, Trash } from '../../../../components/swipeoutBtns';


class Itinerary extends Component {

    _renderSeparator(sectionID: string, rowID: string, adjacentRowHighlighted: bool) {
        if (rowID == this.props.itinerary.length - 1) return <View style={{marginBottom: 27.66}}></View>; //string == number

        return (
            <TouchableHighlight style={styles.listSeparator}>
                <View style={styles.listSeparatorContent}>
                    <View style={styles.listSeparatorImages}>
                        <Image source={require('../../../../../images/icons/dashes.png')} style={{width: 28, height: 20.5, resizeMode: 'stretch'}} />
                        <Image source={require('../../../../../images/icons/add-checkpoint.png')} style={{height: 18, width: 18, marginVertical: 3.33}} />
                        <Image source={require('../../../../../images/icons/dashes.png')} style={{width: 28, height: 20.5, resizeMode: 'stretch'}} />
                    </View>
                    <Text style={{color: '#f9f9f9', marginLeft: 6.66}}>Checkpoint</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <CheckpointsList
                checkpoints={this.props.itinerary}
                swipeoutBtns={[Edit, Trash]}
                renderSeparator={this._renderSeparator.bind(this)}
            />
        )
    }
}

export default Itinerary;
