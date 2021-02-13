'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Image, View, ListView, Text, TextInput, TouchableHighlight } from 'react-native';

import Swipeout from './swipeout/';

import UsersList from './usersList';
import ChatBtn from './chatBtn';
import { Trash } from './swipeoutBtns';


class UsersEditTab extends Component {

    render() {
        return (
            <View>
                <View style={styles.addUserWrap}>
                    <TextInput style={styles.addUserInput} placeholder="+User" placeholderTextColor="#a1a1a1" underlineColorAndroid={'transparent'} />
                    <TouchableHighlight style={styles.addUserBtn}>
                        <Image source={this.props.searchIcon} style={styles.addUserImg} />
                    </TouchableHighlight>
                </View>
                <UsersList users={this.props.users} actions={[<ChatBtn />]} swipeoutBtns={[Trash]} />
            </View>
        );
    }

}


const styles = StyleSheet.create({

    addUserWrap: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 20,
        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 2
    },
        addUserInput: {
            flex: 1,
            color: '#f9f9f9',
            borderWidth: 0,
            paddingVertical: 0,
            paddingHorizontal: 6.66
        },
        addUserBtn: {
            width: 39,
            paddingVertical: 3.33
        },
            addUserImg: {
                height: 39,
                width: 39
            }

});


export default UsersEditTab;
