
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import { pushNewRoute, resetToRoute } from '../../actions/route';
import { login } from '../../actions/auth';

import AuthInput from '../../components/authInput';
import validation from '../../utils/validation';

import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            validity: {
                email: false,
                password: false
            }
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

    loginFB() {
        //todo
    }

    login() { //enabled only if fields valid
        const { app, login } = this.props;
        var { email, password } = this.refs;

        console.log('test');

        app.authenticate({
          type: 'local',
          'email': 'john.doe@protonmail.com',
          'password': 'er86g6es4gfMFe%'
        }).then(function(result){
          console.log('Authenticated!', result, app.get('user'));
        }).catch(function(error){
          console.error('Error authenticating!', error);
        });

        /*app.authenticate({
            type: 'local',
            email: email.value,
            password: password.value
        }).then(
            //login,
            (result) => {
                console.log('success', result);
                const userService = app.service('users');
                userService.get().then(
                    (user) => console.log(user)
                );
            },
            (err) => console.log('login err', err)
        ).catch(
            (err) => console.log('failure', err)
        );*/
    }

    render() {
        const isFormValid = Object.keys(this.state.validity).every((key) => this.state.validity[key]);

        return (
            <Page hasHeader={false}>


                <View style={styles.hero}>
                    <Text style={styles.title}>TALENTED</Text>
                    <View style={styles.iconContainer}><Image source={require('../../../images/logo.png')} style={styles.icon} /></View>
                    <Text style={styles.subtitle}>Take advantage of your skills !</Text>
                </View>


                <View style={styles.form}>

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

                    <TouchableHighlight style={[styles.btn, styles.submit, {opacity: (isFormValid) ? 1 : 0.5}]} onPress={this.login.bind(this)} disabled={!isFormValid}>
                        <Text style={styles.btnText}>Log in !</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.btn, styles.facebook]} onPress={this.loginFB.bind(this)}>
                        <Text style={styles.btnText}>Log in with Facebook</Text>
                    </TouchableHighlight>

                    <View style={styles.additionals}>
                        <TouchableHighlight style={styles.btn} onPress={() => this.props.pushNewRoute('password-forgotten')}>
                            <Text style={[styles.btnText, styles.additionalsText]}>Password Forgotten</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.btn} onPress={() => this.props.pushNewRoute('register')}>
                            <Text style={[styles.btnText, styles.additionalsText, styles.registerText]}>SIGN UP</Text>
                        </TouchableHighlight>
                    </View>

                </View>


            </Page>
        );
    }
}

const mapDispatchToProps = {
    pushNewRoute,
    resetToRoute,
    login
};

export default connect(null, mapDispatchToProps)(Login);
