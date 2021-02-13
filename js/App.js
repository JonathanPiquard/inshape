/* @flow */

'use strict';

import React, { Component } from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { connect } from 'react-redux';

import CodePush from 'react-native-code-push';
import AppNavigator from './AppNavigator';
import { setConnected, setDisconnected, login, clearToken } from './actions/auth';

import feathers from 'feathers/client'
import hooks from 'feathers-hooks';
import socketio from 'feathers-socketio/client';
import authentication from 'feathers-authentication/client';
import rx from 'feathers-reactive';
import RxJS from 'rxjs';

import './UserAgent';

import io from 'socket.io-client/socket.io';


class App extends Component {
    constructor(props) {
        super(props);

        //Feathers server
        const options = {transports: ['websocket']};
        const socket = io('http://localhost:3030', options);

        this.app = feathers()
            .configure(socketio(socket))
            //.configure(rx(RxJS))
            .configure(hooks())
            // Use AsyncStorage to store our login toke
            .configure(authentication({
                storage: AsyncStorage
            }));
    }

    componentDidMount() {

        //Feathers server
        const { setConnected, setDisconnected, login, clearToken } = this.props;
        var app = this.app;

        app.io.on('connect', () => {
            setConnected();

            AsyncStorage.getItem('feathers-jwt', (err, token) => {
                if (err) {
                    console.log('read token err', err);
                    AsyncStorage.getAllKeys((err, keys) => console.log('async keys: err', err, 'keys', keys))
                    return clearToken();
                }

                console.log('token', token);

                app.authenticate({
                    type: 'token',
                    'token': token
                }).then(
                    login,
                    clearToken
                );
            });
        });

        app.io.on('disconnect', setDisconnected);


        //CodePush
        //CodePush.sync();
    }

    render() {
        return (
            <AppNavigator store={this.props.store} app={this.app} />
        );
    }
}

const mapDispatchToProps = {
    setConnected,
    setDisconnected,
    login,
    clearToken
};

export default connect(null, mapDispatchToProps)(App);
