
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import { resetToRoute, popRoute } from '../../actions/route';
import theme from '../../themes/base-theme';
import styles from './styles';

import { login } from '../../actions/auth';

import AuthInput from '../../components/authInput';
import validation from '../../utils/validation';

import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-datepicker';
import Page from '../../components/page';

const defaultAvatar = require('../../../images/icons/profile.png');


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validity: {
                username: false,
                email: false,
                password: false,
                birthday: false,
                city: false
            },
            avatar: defaultAvatar
        };

        this.setValidity = this.setValidity.bind(this);
    }

    setValidity(field) {
        return (isValid) => this.setState({
            validity: {
                ...this.state.validity,
                [field]: isValid }
            }
        );
    }

    pickAvatar() {
        ImagePicker.openPicker({
            width: 128,
            height: 128,
            cropping: true
        }).then((image) => {
            console.log(image);
            this.setState({avatar: image});
        });
    }

    createUser(avatar) {
        const { username, email, password, birthday, city } = this.refs;
        const { app, login } = this.props;

        return app.service('users')
            .create({
                username: username.value,
                email: email.value,
                password: password.value,
                birthday: birthday.value,
                city: city.value,
                avatar
            }).then(
                (profile) => {
                    console.log('register profile', profile);

                    app.authenticate({
                        type: 'local',
                        email: email.value,
                        password: password.value
                    })
                    .then(
                        login,
                        (err) => {
                            console.log('register then login err', err);
                            //display register err
                        }
                    )
                },
                (err) => {
                    console.log('register err', err);
                    //display register err
                }
            );
    }

    register() {
        if (this.state.avatar !== defaultAvatar) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(this.state.avatar); // encode file

            // when encoded, upload
            fileReader.addEventListener('load', () => this.createUser.call(this, fileReader.result), false);
        } else {
            this.createUser.call(this, null);
        }
    }

    render() {
        const isFormValid = Object.keys(this.state.validity).every((key) => this.state.validity[key]);

        return (
            <Page hasHeader={false}>

                <TouchableHighlight onPress={this.props.popRoute} style={{marginHorizontal: 10, height: 42, position: 'absolute', top: 0, left: 0, justifyContent: 'center'}}>
                    <Image source={require('../../../images/icons/glyphs/back.png')} style={{height: 24, width: 24}} />
                </TouchableHighlight>

                <View style={styles.form}>
                    <View style={styles.iconBtn}>
                        <TouchableHighlight onPress={this.pickAvatar.bind(this)}>
                            <Image source={this.state.avatar} style={styles.icon} />
                        </TouchableHighlight>
                        {
                            (this.state.avatar === defaultAvatar)
                            ?
                                <TouchableHighlight onPress={this.pickAvatar.bind(this)}>
                                    <Image source={require('../../../images/icons/add-camera.png')} style={styles.pickIcon} />
                                </TouchableHighlight>
                            :
                                <TouchableHighlight onPress={() => this.setState({avatar: defaultAvatar})}>
                                    <Image source={require('../../../images/icons/glyphs/close.png')} style={styles.pickIcon} />
                                </TouchableHighlight>
                        }
                    </View>

                    <AuthInput
                        ref="username"
                        label="USERNAME"
                        placeholder="John Doe"
                        validate={validation.username}
                        onValidityChange={this.setValidity('username')}
                    />
                    <AuthInput
                        ref="email"
                        label="EMAIL"
                        placeholder="john.doe@gmail.com"
                        validate={validation.email}
                        onValidityChange={this.setValidity('email')}
                        keyboardType="email-address"
                    />
                    <AuthInput
                        ref="password"
                        label="PASSWORD"
                        placeholder="J*5s^Lt9gi#%3Fp..."
                        validate={validation.password}
                        onValidityChange={this.setValidity('password')}
                        secureTextEntry={true}
                    />
                    <AuthInput
                        ref="birthday"
                        label="BIRTHDAY"
                        validate={validation.birthday}
                        onValidityChange={this.setValidity('birthday')}
                        renderInput={(value) =>
                            <DatePicker
                                date={value}
                                style={{alignItems: 'flex-start', marginTop: -6.66}}
                                mode="date"
                                format="L"
                                minDate="2016-05-01"
                                maxDate="2016-06-01"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                iconSource={require('../../../images/icons/calendar.png')}
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        top: 9.5,
                                        left: 0,
                                        width: 24,
                                        height: 24,
                                        alignSelf: 'flex-end'
                                    },
                                    dateInput: {
                                        color: '#f9f9f9',
                                        marginLeft: -3.33,
                                        paddingBottom: -6.66,
                                        paddingHorizontal: 6.66,
                                        borderWidth: 0
                                    }
                                }}
                            />
                        }
                    />
                    <AuthInput
                        ref="city"
                        label="CITY"
                        placeholder="New York"
                        validate={validation.city}
                        onValidityChange={this.setValidity('city')}
                    />

                    <TouchableHighlight style={[styles.submit, {opacity: (isFormValid) ? 1 : 0.5}]} onPress={this.register.bind(this)} disabled={!isFormValid}>
                        <Text style={styles.submitText}>Sign up !</Text>
                    </TouchableHighlight>
                </View>
            </Page>
        );
    }
}

const mapDispatchToProps = {
    popRoute,
    resetToRoute,
    login
};

export default connect(null, mapDispatchToProps)(Register);
