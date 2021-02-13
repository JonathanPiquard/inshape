'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import styles from './styles';

import Page from '../../components/page';
import ChatBtn from '../../components/chatBtn';


class Profile extends Component {

    constructor(props) {
        super(props);

        //for now
        this.state = {
            profile: {
                username: 'John Doe',
                stats: {
                    asProvider: {
                        events: {
                            total: 18,
                            rate: 4.0,
                        },
                        rents: {
                            total: 13,
                            rate: 3.7,
                        }
                    },
                    asClient: {
                        events: {
                            total: 32
                        },
                        rents: {
                            total: 17
                        }
                    }
                }
            }
        };
    }

    render() {
        return (
            <Page title="Profile" rightActions={{icon: require('../../../images/icons/glyphs/edit.png'), redirectTo: 'editProfile'}}>
                <View style={styles.hero}>
                    <TouchableHighlight style={styles.action}>
                        <Image source={require('../../../images/icons/plus.png')} style={{height: 28, width: 28}} />
                    </TouchableHighlight>

                    <View style={styles.avatarContainer}>
                        <Image source={require('../../../images/mike-lane.jpg')} style={styles.avatar} />
                        <Text style={styles.username}>{this.state.profile.username}</Text>
                    </View>

                    <ChatBtn style={styles.action} size={48} />
                </View>

                <View style={styles.rates}>
                    <View style={styles.rate}>
                        <AnimatedCircularProgress
                            size={80}
                            width={4}
                            fill={this.state.profile.stats.asProvider.events.rate / 5 * 100}
                            tintColor="#00ff75"
                            backgroundColor="#3d7554"
                            style={styles.rateCircle}
                        >
                            {
                                (fill) => {
                                    return <Text style={styles.rateText}>{this.state.profile.stats.asProvider.events.rate} / 5</Text>;
                                }
                            }
                        </AnimatedCircularProgress>
                        <Text style={styles.rateLabel}>Events</Text>
                    </View>

                    <View style={styles.rate}>
                        <AnimatedCircularProgress
                            size={80}
                            width={4}
                            fill={this.state.profile.stats.asProvider.rents.rate / 5 * 100}
                            tintColor="#00e0ff"
                            backgroundColor="#3d5875"
                            style={styles.rateCircle}
                        >
                            {
                                (fill) => {
                                    return <Text style={styles.rateText}>{this.state.profile.stats.asProvider.rents.rate} / 5</Text>;
                                }
                            }
                        </AnimatedCircularProgress>
                        <Text style={styles.rateLabel}>Rents</Text>
                    </View>
                </View>

                <View style={styles.tiles}>
                    <View style={styles.tilesGroup}>
                        <View style={styles.tilesLabel}>
                            <Image source={require('../../../images/icons/provider.png')} style={styles.tilesLabelIcon} />
                            <Text style={styles.tilesLabelText}>Provider</Text>
                        </View>

                        <TouchableHighlight style={styles.tile}>
                            <View style={styles.tileContent}>
                                <View style={styles.tileLeftContent}>
                                    <View style={[styles.tilePoint, styles.tilePointEvents]}></View>
                                    <Text style={styles.tileText}>Events</Text>
                                </View>
                                <Text style={styles.tileText}>{this.state.profile.stats.asProvider.events.total}</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.tile}>
                            <View style={styles.tileContent}>
                                <View style={styles.tileLeftContent}>
                                    <View style={[styles.tilePoint, styles.tilePointRents]}></View>
                                    <Text style={styles.tileText}>Rents</Text>
                                </View>
                                <Text style={styles.tileText}>{this.state.profile.stats.asProvider.rents.total}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.tilesGroup}>
                        <View style={styles.tilesLabel}>
                            <Image source={require('../../../images/icons/client.png')} style={styles.tilesLabelIcon} />
                            <Text style={styles.tilesLabelText}>Client</Text>
                        </View>

                        <TouchableHighlight style={styles.tile}>
                            <View style={styles.tileContent}>
                                <View style={styles.tileLeftContent}>
                                    <View style={[styles.tilePoint, styles.tilePointEvents]}></View>
                                    <Text style={styles.tileText}>Events</Text>
                                </View>
                                <Text style={styles.tileText}>{this.state.profile.stats.asClient.events.total}</Text>
                            </View>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.tile}>
                            <View style={styles.tileContent}>
                                <View style={styles.tileLeftContent}>
                                    <View style={[styles.tilePoint, styles.tilePointRents]}></View>
                                    <Text style={styles.tileText}>Rents</Text>
                                </View>
                                <Text style={styles.tileText}>{this.state.profile.stats.asClient.rents.total}</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

            </Page>
        );
    }
}


const mapDispatchToProps = {
    
};

export default connect(null, mapDispatchToProps)(Profile);
