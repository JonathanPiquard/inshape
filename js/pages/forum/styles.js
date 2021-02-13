/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';


var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


export default StyleSheet.create({

    main: {
        paddingVertical: 5
    },
        message: {
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginTop: 10,
            marginHorizontal: 10,
            backgroundColor: '#f9f9f9'
        },
            header: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
                title: {
                    fontSize: 16,
                    fontWeight: 'bold'
                },
                typeWrap: {
                    marginTop: -10,
                    marginRight: -15,
                    paddingHorizontal: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 24,
                    backgroundColor: '#54c867'
                },
                    type: {
                        color: '#f9f9f9'
                    },
            description: {
                fontSize: 13,
                marginVertical: 5
            },

            footer: {
                marginTop: 5,
                marginBottom: -5,
                marginRight: -7.5,
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end'
            },
                footerText: {
                    marginHorizontal: 6.66,
                    fontSize: 11.5
                },
                avatar: {
                    borderRadius: 28,
                    width: 28,
                    height: 28
                },

        newMessage: {
            marginTop: 10,
            marginHorizontal: 10
        },
            inputContent: {
                height: 70,
                paddingVertical: 3.33,
                paddingHorizontal: 6.66,
                backgroundColor: '#f9f9f9'
            },
            submitBtn: {
                backgroundColor: '#d92343',
                height: 25,
                alignItems: 'center',
                justifyContent: 'center'
            },
                submitText: {
                    color: '#f9f9f9'
                }

});
