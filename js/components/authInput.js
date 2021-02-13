'use strict';

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class AuthInput extends Component {
    static defaultProps = {
        label: '',
        keyboardType: 'default',
        secureTextEntry: false,
        placeholder: '',
        validate: () => null,
        onValidityChange: () => null
    }

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            errMsg: null,
            borderColor: '#f9f9f9',
            isValid: false
        };

        this.isValid = this.state.isValid; //not to use in render because the ref is not available yet
        this.value = this.state.value;
    }

    onChange(value) {
        const errMsg = this.props.validate(value); //null if valid else err msg
        const isValid = !errMsg;

        if (isValid !== this.state.isValid) this.props.onValidityChange(isValid);

        this.setState({
            value,
            errMsg,
            borderColor: (isValid) ? '#46af5a' : '#e02626',
            isValid: isValid
        });
    }

    renderDefaultInput() {
        return (
            <TextInput
                style={{paddingTop: 0, paddingBottom: 2.5, paddingHorizontal: 6.66, color: '#f9f9f9'}}
                keyboardType={this.props.keyboardType}
                secureTextEntry={this.props.secureTextEntry}
                placeholder={this.props.placeholder}
                placeholderTextColor="#a1a1a1"
                underlineColorAndroid={'transparent'}
                value={this.state.value}
                onChangeText={this.onChange.bind(this)}
            />
        );
    }

    render() {
        const { label, renderInput } = this.props;
        var { borderColor, value, errMsg } = this.state;

        return (
            <View style={{marginBottom: 5}}>
                <Text style={{color: '#f9f9f9'}}>{label}</Text>
                <View style={{borderBottomWidth: 1.5, borderColor}}>
                    {(typeof renderInput !== 'undefined') ? renderInput(value) : this.renderDefaultInput.call(this)}
                </View>
                <Text style={{color: '#f54e4e', fontSize: 11, marginTop: 3.33, height: 13}}>{errMsg}</Text>
            </View>
        );
    }
}


export default AuthInput;
