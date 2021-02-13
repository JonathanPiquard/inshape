'use strict';

import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native';

class SubmitBtn extends Component {
    render() {
        return (
            <TouchableHighlight style={[styles.submit, this.props.style]} onPress={this.props.onPress}>
                <Text style={styles.submitText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

SubmitBtn.defaultProps = {
    text: 'Save'
};

const styles = StyleSheet.create({

    submit: {
        marginTop: 5,
        position: 'absolute',
        backgroundColor: '#d92343',
        bottom: 0,
        left: 0,
        height: 35,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center'
    },
        submitText: {
            color: '#f9f9f9'
        }

});

export default SubmitBtn;
