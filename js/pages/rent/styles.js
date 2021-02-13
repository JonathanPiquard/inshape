/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';


var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


export default StyleSheet.create({

    tabView: {
        height: deviceHeight - 42
    },

    essentials: {
        backgroundColor: '#f9f9f9'
    },
        title: {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#383636',
            margin: 10
        },
        description: {
            fontSize: 14,
            color: '#4d4b4b',
            marginHorizontal: 10,
            marginBottom: 3.33
        },
        location: {
            fontSize: 13,
            fontStyle: 'italic',
            color: '#4d4b4b',
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 3.33
        },
        tags: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            margin: 6.66
        },
            tagWrap: {
                height: 16,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 3.33,
                margin: 3.33,
                backgroundColor: '#b1aeae'
            },
                tag: {
                    color: '#f9f9f9',
                    fontSize: 11
                }

});
