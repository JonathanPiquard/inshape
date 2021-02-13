'use strict';

import React, { Component } from 'react';
import { connect} from 'react-redux';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';

import { pushNewRoute } from '../../actions/route';
import { closeDrawer } from '../../actions/drawer';


class Link extends Component {

    onPress(event) {
        if (typeof this.props.link.onPress !== 'undefined') {
             return this.props.link.onPress(event);
        } else {
            this.props.closeDrawer();
            this.props.pushNewRoute(this.props.link.redirectTo);
        }
    }

    render() {
        return (
            <TouchableHighlight onPress={this.onPress.bind(this)} style={[styles.link, this.props.style]} key={this.props.link.title}>
                <View style={styles.linkContent}>
                    <View style={styles.linkMain}>
                        <Image source={this.props.link.icon} style={styles.linkIcon} />
                        <Text style={styles.linkText}>{this.props.link.title}</Text>
                    </View>
                    <View style={styles.linkBadges}>
                        {
                            ((typeof this.props.link.badges !== 'undefined') ? this.props.link.badges : []).map((badge) => {
                                return (
                                    <View style={[styles.linkBadge, badge.style]}>
                                        <Text style={styles.linkBadgeText}>{badge.value}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

Link.defaultProps = {
    link: { badges: [] }
};


const styles = StyleSheet.create({

    link: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
        linkContent: {
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
        },
            linkMain: {
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center'
            },
                linkIcon: {
                    height: 36,
                    width: 36,
                    marginRight: 10
                },
                linkText: {
                    color: '#f9f9f9',
                    fontSize: 15
                },

            linkBadges: {
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: -3.33
            },
                linkBadge: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 2,
                    paddingHorizontal: 5 ,
                    marginHorizontal: 3.33,
                    borderRadius: 2,
                    backgroundColor: '#ccc'
                },
                    linkBadgeText: {
                        fontWeight: 'bold',
                        fontSize: 11,
                        color: '#f9f9f9',
                        textAlign: 'center'
                    }

});

const mapDispatchToProps = {
    pushNewRoute,
    closeDrawer
};

export default connect(null, mapDispatchToProps)(Link);
