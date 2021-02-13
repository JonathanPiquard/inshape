/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';



export default StyleSheet.create({

    main : {
        backgroundColor: '#252121',
        flex: 1
    },
        buttonGroup: {
          flexDirection: 'row',
          backgroundColor: '#f9f9f9',
          height: 48,
          marginHorizontal: 10,
          marginTop: 10
        },
            button: {
                alignSelf: 'stretch',
                justifyContent: 'center'
            },
                buttonContent: {
                    flexDirection: 'row',
                    alignItems: 'center'
                },
            mainButton: {
                padding: 6.66,
                flex: 1,
            },
                mainButtonText: {
                    fontSize: 16,
                    fontWeight: 'bold',
                },
            sideButton: {
                width: 48,
                alignItems: 'center',
                borderLeftWidth: 0.5,
                borderLeftColor: '#ccc'
            },

        list: {

        },
            listItem: {
                backgroundColor: '#f5f5f5',
                marginHorizontal: 10,
                marginTop: 10
            },
                listItemContent: {
                    padding: 10,
                },
                    header: {
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    },
                        date: {
                            marginTop: -5,
                            marginBottom: 5,
                            fontSize: 15,
                            fontWeight: 'bold'
                        },
                        recurrenceWrapper: {
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            top: -10,
                            right: -10,
                            paddingHorizontal: 5,
                            paddingVertical: 3.33,
                            backgroundColor: '#347bbd'
                        },
                            recurrence: {
                                fontSize: 14,
                                color: '#f9f9f9'
                            },
                    periods: {
                        marginLeft: 10
                    },
                        period: {
                            fontSize: 13
                        }


});
