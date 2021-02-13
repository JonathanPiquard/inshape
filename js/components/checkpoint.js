'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';


class Checkpoint extends Component {
    render() {
        return (
            <View style={styles.checkpoint}>
                <View style={styles.date}>
                    <Text style={[styles.dateText, styles.dateHour, this.props.dateTextStyle]}>{this.props.checkpoint.date.slice(0, 5)}</Text>
                    <Text style={[styles.dateText, styles.dateDay, this.props.dateTextStyle]}>{this.props.checkpoint.date.slice(6)}</Text>
                </View>
                <View style={styles.timeline}>
                    {
                        (this.props.isLast)
                        ?   null
                        :   <View style={[
                                styles.line,
                                {top: 0, height: 16},
                                this.props.lineStyle
                            ]}/>
                    }

                    <View style={[
                        styles.point,
                        (this.props.isFirst) ? {backgroundColor: '#44ebe7'} : {},
                        (this.props.isLast) ? {backgroundColor: '#40f285'} : {},
                        this.props.pointStyle
                    ]} />
                    {
                        (this.props.isFirst)
                        ?   null
                        :   <View style={[
                                styles.line,
                                {top: 26, bottom: 0},
                                this.props.lineStyle
                            ]} />
                    }
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{this.props.checkpoint.title}, {this.props.checkpoint.location}</Text>
                    <Text style={styles.description}>{this.props.checkpoint.description}</Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    checkpoint: {
        flexDirection: 'row'
    },
        date: {
            alignItems: 'center',
            top: 6.66
        },
            dateText: {
                color: '#f9f9f9'
            },
            dateHour: {
                fontSize: 18,
                fontWeight: 'bold'
            },
            dateDay: {
                fontSize: 10
            },
        timeline: {
            width: 28,
            alignItems: 'center'
        },
            line: {
                position: 'absolute',
                left: 13.33,
                width: 2,
                backgroundColor: '#f9f9f9',
            },
            point: {
                top: 16,
                width: 10,
                height: 10,
                borderRadius: 15,
                borderWidth: 1,
                borderColor: '#34da94',
            },
        content: {
            flex: 1,
            padding: 10,
            backgroundColor: '#f9f9f9'
        },
            title: {
                fontSize: 15,
                fontWeight: 'bold'
            },
            description: {
                fontSize: 14,
                marginVertical: 2.5
            }

});


export default Checkpoint;
