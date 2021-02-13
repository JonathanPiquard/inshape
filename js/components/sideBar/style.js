/* @flow */
/* @flow */
'use strict';

import { StyleSheet, Dimensions } from "react-native";

var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


export default StyleSheet.create({

    sidebar: {
        width: deviceWidth - 110,
        height: deviceHeight,
        alignItems: 'center',
        padding: 10
    },
        avatarWrap: {
            justifyContent: 'center',
            marginTop: 20
        },
            avatar: {
                width: 100,
                height: 100,
                borderRadius: 100
            },
            username: {
                marginTop: 10,
                textAlign: 'center',
                fontSize: 16,
                color: '#f9f9f9'
            },

        links: {
            flex: 1,
            alignSelf: 'flex-start',
            marginVertical: 30,
            marginHorizontal: 5,
            width: deviceWidth - 110 - 40,
        },
            linkBadgeActivities: {
                backgroundColor: '#e6b96d'
            },
            linkBadgeFriends: {
                backgroundColor: '#9956da'
            },
            linkBadgeChat: {
                backgroundColor: '#e74545'
            },
            linkBadgeProvider: {
                backgroundColor: '#1bd570'
            },
            linkBadgeClient: {
                backgroundColor: '#17c6de'
            }

});
