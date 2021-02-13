'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import styles from './styles';

import CheckpointsList from '../../../../components/checkpointsList';


class Itinerary extends Component {

    render() {
        return (
            <CheckpointsList
                checkpoints={this.props.itinerary}
            />
        )
    }
}

export default Itinerary;
