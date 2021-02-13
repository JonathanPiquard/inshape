
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight, ListView } from 'react-native';

import { pushNewRoute } from '../../actions/route';
import theme from '../../themes/base-theme';
import styles from './styles';

import ModalPicker from 'react-native-modal-picker';

import Page from '../../components/page';
import ElementsList from '../../components/elementsList';

const typeOptions = [
    { key: 'activity', label: 'Activity' },
    { key: 'event', label: 'Event' },
    { key: 'rent', label: 'Rent' }
];


class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            type: 'activity',
            elements: require('./mockupActivities')
        };
    }

    render() {
        return (
            <Page title="Search" rightActions={false}>
                <View style={styles.city}>
                    <TextInput style={styles.cityInput} placeholder="City" placeholderTextColor="#a1a1a1" underlineColorAndroid={'transparent'} />
                    <ModalPicker data={typeOptions} selectStyle={styles.model} selectTextStyle={styles.modelText} initValue="Activity" />
                </View>

                <ElementsList
                    elements={this.state.elements}
                    type={this.state.type}
                />
            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(Search);
