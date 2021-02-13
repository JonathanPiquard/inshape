'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';


class Forum extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} style={this.props.style}>
                <View style={styles.forum}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{this.props.forum.title}</Text>
                        <View style={styles.typeWrap}>
                            <Text style={styles.type}>{this.props.forum.type}</Text>
                        </View>
                    </View>
                    <Text style={styles.description}>{this.props.forum.description}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>{this.props.forum.state}, {this.props.forum.createdAt}, by {this.props.forum.author.title}</Text>
                        <Image source={this.props.forum.author.avatar} style={styles.avatar} />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({

    forum: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#f9f9f9'
    },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
            title: {
                fontSize: 16,
                fontWeight: 'bold'
            },
            typeWrap: {
                marginTop: -10,
                marginRight: -15,
                paddingHorizontal: 5,
                justifyContent: 'center',
                alignItems: 'center',
                height: 24,
                backgroundColor: '#54c867'
            },
                type: {
                    color: '#f9f9f9'
                },
        description: {
            fontSize: 13,
            marginVertical: 5
        },

        footer: {
            marginTop: 5,
            marginBottom: -5,
            marginRight: -7.5,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end'
        },
            footerText: {
                marginHorizontal: 6.66,
                fontSize: 11.5
            },
            avatar: {
                borderRadius: 28,
                width: 28,
                height: 28
            },

});


export default Forum;
