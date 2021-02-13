'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';


class Event extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} style={this.props.style}>
                <View style={styles.event}>
                    <View style={styles.people}>
                        <View style={styles.peopleBadge}><Text style={styles.peopleBadgeText}>{this.props.event.clients.length}</Text></View>
                        <Text style={styles.peopleText}> clients </Text>
                        <View style={styles.peopleBadge}><Text style={styles.peopleBadgeText}>{this.props.event.providers.length}</Text></View>
                        <Text style={styles.peopleText}> providers</Text>
                    </View>
                    <Text style={styles.title}>{this.props.event.title}</Text>
                    <Text style={styles.description}>{this.props.event.description}</Text>
                    <View style={styles.checkpoints}>
                        <Image source={require('../../images/icons/map-A-to-B.png')} style={{height: 42, width: 42}} />
                        <View style={styles.checkpointsContent}>
                            <Text style={styles.checkpoint}>{this.props.event.from.date}, {this.props.event.from.location}</Text>
                            <Text style={styles.checkpoint}>{this.props.event.to.date}, {this.props.event.to.location}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({

    event: {
        padding: 10,
        flex: 1,
        justifyContent: 'center'
    },
        title: {
            fontSize: 15,
            fontWeight: 'bold'
        },
        description: {
            fontSize: 14,
            marginVertical: 2.5
        },
        checkpoints: {
            flexDirection: 'row'
        },
            checkpoint: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 6.66,
                fontSize: 12
            },
        people: {
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            top: 3.33,
            right: 6.66
        },
            peopleText: {
                fontSize: 12
            },
            peopleBadge: {
                backgroundColor: '#169fa8',
                alignItems: 'center',
                justifyContent: 'center',
                height: 14,
                padding: 3.33,
                marginTop: 2.5,
                borderRadius: 10
            },
                peopleBadgeText: {
                    color: '#f9f9f9',
                    fontSize: 12
                }

});


export default Event;
