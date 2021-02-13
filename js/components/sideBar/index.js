
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableHighlight, Image, Text } from 'react-native';

import { closeDrawer } from '../../actions/drawer';
import styles from "./style";

import Link from './link';

const links = [
    {
        title: 'Overview',
        icon: require('../../../images/icons/volume.png'),
        redirectTo: 'overview'
    },
    {
        title: 'Search',
        icon: require('../../../images/icons/search.png'),
        redirectTo: 'search'
    },
    {
        title: 'Activities',
        icon: require('../../../images/icons/activity.png'),
        badges: [
            {
                value: 12,
                style: styles.linkBadgeActivities
            }
        ],
        redirectTo: 'activities'
    },
    {
        title: 'Events',
        icon: require('../../../images/icons/event.png'),
        badges: [
            {
                value: 18,
                style: styles.linkBadgeProvider
            },
            {
                value: 32,
                style: styles.linkBadgeClient
            }
        ],
        redirectTo: 'events'
    },
    {
        title: 'Rents',
        icon: require('../../../images/icons/rent.png'),
        badges: [
            {
                value: 12,
                style: styles.linkBadgeProvider
            },
            {
                value: 10,
                style: styles.linkBadgeClient
            }
        ],
        redirectTo: 'rents'
    },
    {
        title: 'Friends',
        icon: require('../../../images/icons/friends.png'),
        badges: [
            {
                value: 94,
                style: styles.linkBadgeFriends
            }
        ],
        redirectTo: 'friends'
    },
    {
        title: 'Chats',
        icon: require('../../../images/icons/paper-plane.png'),
        badges: [
            {
                value: 15,
                style: styles.linkBadgeChat
            }
        ],
        redirectTo: 'chats'
    },
    {
        title: 'Profile',
        icon: require('../../../images/icons/profile.png'),
        redirectTo: 'profile'
    },
    {
        title: 'Settings',
        icon: require('../../../images/icons/tools.png'),
        redirectTo: 'settings'
    },
    {
        title: 'Log out',
        icon: require('../../../images/icons/motor-cycle.png'),
        onPress: () => null //log out
    },
];


class SideBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: 'Mike McLane',
                avatar: require('../../../images/mike-lane.jpg')
            }
        };
    }

    render(){
        return (
            <View style={styles.sidebar}>
                <View style={styles.avatarWrap}>
                    <Image source={this.state.user.avatar} style={styles.avatar} />
                    <Text style={styles.username}>{this.state.user.username}</Text>
                </View>

                <View style={styles.links}>
                    {
                        links.map((link) => {
                            return <Link link={link} />
                        })
                    }
                </View>
            </View>
        );
    }
}


const mapDispatchToProps = {
    closeDrawer
};

export default connect(null, mapDispatchToProps)(SideBar);
