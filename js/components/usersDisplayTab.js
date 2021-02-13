'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

import UsersList from './usersList';
import ChatBtn from './chatBtn';

class UsersDisplayTab extends Component {

    render() {
        return (
            <View>
                <View style={styles.searchWrap}>
                    <TextInput style={styles.searchInput} placeholder="Search ..." placeholderTextColor="#a1a1a1" underlineColorAndroid={'transparent'} />
                </View>
                <UsersList users={this.props.users} actions={[<ChatBtn />]} swipeoutBtns={this.props.swipeoutBtns} />
            </View>
        )
    };
}

const styles = StyleSheet.create({

    searchWrap: {
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 20,
        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 2
    },
        searchInput: {
            color: '#f9f9f9',
            borderWidth: 0,
            paddingVertical: 0,
            paddingHorizontal: 6.66
        }

});

export default UsersDisplayTab;
