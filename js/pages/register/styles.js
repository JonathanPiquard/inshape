/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';

var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


export default StyleSheet.create({
    form: {
        height: deviceHeight,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        //backgroundColor: '#f9f9f9',
        paddingTop: 20,
        paddingBottom: 35,
        paddingHorizontal: 40
    },
        iconBtn: {
            alignItems: 'center'
        },
        pickIcon: {
            position: 'absolute',
            top: 5,
            right: -8,
            width: 28,
            height: 28,
        },
        icon: {
            width: 110,
            height: 110,
        },
        submit: {
            marginTop: 10,
            marginBottom: 20,
            height: 35,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#d92343'
        },
            submitText: {
                color: '#f9f9f9',
                textAlign: 'center'
            }
});
