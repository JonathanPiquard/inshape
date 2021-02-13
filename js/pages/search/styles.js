/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';

var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


export default StyleSheet.create({

    city: {
        flexDirection: 'row',
        marginBottom: 15,
        borderBottomColor: '#f9f9f9',
        borderBottomWidth: 1
    },
        cityInput: {
            flex: 1,
            height: 35,
            paddingVertical: 0,
            paddingHorizontal: 7.5,
            color: '#f9f9f9',
            borderWidth: 0
        },
        model: {
            borderRadius: 0,
            borderWidth: 0,
            height: 35,
            paddingVertical: 0,
            paddingHorizontal: 10,
            justifyContent: 'center',
            backgroundColor: 'transparent'
        },
            modelText: {
                color: '#f9f9f9',
                fontSize: 14
            }

});
