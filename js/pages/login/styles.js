/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';


var deviceHeight = Dimensions.get('window').height;


export default StyleSheet.create({

    hero: {
        height: 242,
        marginTop: 10,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center'
    },
        title: {
            flex: 1,
            color: '#f9f9f9',
            fontSize: 30,
            marginTop: 20
        },
        iconContainer: {
            flex: 5,
            justifyContent:'center'
        },
            icon: {
                width: 110,
                height: 110,
            },
        subtitle: {
            flex: 1,
            color: '#f9f9f9',
            fontSize: 15
        },
    form: {
        height: deviceHeight - 242 - 42,
        justifyContent: 'space-between',
        //backgroundColor: '#f9f9f9',
        paddingTop: 40,
        paddingBottom: 35,
        paddingHorizontal: 40
    },
        btn: {
            marginTop: 5,
            marginBottom: 5,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
            btnText: {
                color: '#f9f9f9',
                textAlign: 'center'
            },
        additionals: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
            additionalsText: {
                //color: '#181818',
                fontSize: 12
            },
            registerText: {
                fontWeight: 'bold',
                marginRight: 5
            },
        submit: {
            backgroundColor: '#d92343'
        },
        facebook: {
            backgroundColor: '#3b5998'
        }
});
