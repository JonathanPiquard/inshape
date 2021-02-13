'use strict';

import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';

import moment from 'moment';
import _times from 'lodash/times';


class Week extends Component {

    render() {
        return (
            <View style={[styles.week, this.props.style]} key={'week' + this.props.add / 7}>
                <View style={styles.days}>
                    {   _times(7, (i) => {
                            const dayLabel = moment().startOf('week').add(this.props.add + i, 'days').format('ddd D, MMM');

                            return (
                                <View style={styles.day}>
                                    <Text style={styles.dayLabel}>{dayLabel}</Text>
                                    <Text style={styles.dayPeriods}>8:00 - 12:00; 14:00 - 18:00; ... getPeriods</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </View>
    );
    }
}


const styles = StyleSheet.create({

    week: {
        height: 130,
        paddingHorizontal: 13.33,
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#f9f9f9'
    },
        days: {
            alignItems: 'flex-start'
        },
            day: {
                flexDirection: 'row'
            },
                dayLabel: {
                    width: 64,
                    marginRight: 10,
                    fontSize: 11,
                    fontStyle: 'italic'
                },
                dayPeriods: {
                    fontSize: 12
                }

});


export default Week;
