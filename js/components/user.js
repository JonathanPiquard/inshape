'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image, View, Text, TouchableHighlight } from 'react-native';

class User extends Component {
    render() {
        return (
            <View style={[styles.user, this.props.style]}>
                <Image style={styles.avatar} source={this.props.user.avatar} />
                <View style={styles.content}>
                    <Text style={styles.username}>{this.props.user.username}</Text>
                    <Text style={styles.nextEvent}>Next event: {this.props.user.nextEvent.title}</Text>
                </View>
                <View style={styles.actions}>
                    {this.props.actions}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    user: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 6.66,
        backgroundColor: '#f9f9f9'
    },
        avatar: {
            width: 42,
            height: 42,
            borderRadius: 42
        },
        content: {
            flex: 1,
            flexDirection: 'column',
            marginLeft: 10
        },
            username: {
                fontSize: 16,
                color: '#373737'
            },
        actions: {
            flexDirection: 'row'
        }

});

export default User;
