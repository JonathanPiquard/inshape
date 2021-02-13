'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';


class ChatTab extends Component {

    render() {
        return (
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    inputGroup: {
        marginBottom: 25,
    },
        inputText: {
            alignSelf: 'flex-start',
            paddingTop: 0,
            paddingBottom: 7.5,
            color: '#181818'
        },

});

export default ChatTab;
