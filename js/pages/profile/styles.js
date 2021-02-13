/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({

    hero: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 180
    },
        action: {
            flex: 1,
            alignSelf: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 33.33
        },
        avatarContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
            avatar: {
                width: 100,
                height: 100,
                borderRadius: 100
            },
            username: {
                marginTop: 10,
                fontWeight: 'bold',
                fontSize: 18,
                textAlign: 'center',
                color: '#f9f9f9'
            },

    rates: {
        marginTop: -15,
        marginBottom: 0,
        paddingHorizontal: -15,
        flexDirection: 'row'
    },
        rate: {
            flex: 1,
            alignItems: 'center'
        },
            rateCircle: {

            },
                rateText: {
                    backgroundColor: 'transparent',
                    position: 'absolute',
                    top: 26.66,
                    left: 0,
                    width: 80,
                    textAlign: 'center',
                    color: '#f9f9f9',
                    fontSize: 20,
                    fontWeight: "100"
                },
            rateLabel: {
                marginTop: 5,
                textAlign: 'center',
                color: '#f9f9f9',
                fontSize: 16
            },

    tiles: {
        marginTop: 20,
        marginBottom: 15,
        marginHorizontal: 25,
        paddingBottom: -10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 1.5,
    },
        tilesGroup: {
            marginBottom: 20
        },
            tilesLabel: {
                flexDirection: 'row',
                alignItems: 'flex-end'
            },
                tilesLabelIcon: {
                    height: 42,
                    width: 42
                },
                tilesLabelText: {
                    marginLeft: 5,
                    marginBottom: 2,
                    color: '#f9f9f9',
                    fontSize: 16,
                    fontWeight: 'bold'
                },
            tile: {
                height: 35,
                marginTop: 13.33,
                marginLeft: 20,
                paddingHorizontal: 10,
                backgroundColor: '#f9f9f9',
                justifyContent: 'center'
            },
                tileContent: {
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                },
                    tileLeftContent: {
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                    },
                        tilePoint: {
                            borderRadius: 8,
                            borderWidth: 1,
                            height: 8,
                            width: 8,
                            marginRight: 6.66
                        },
                        tilePointEvents: {
                            borderColor: '#00e0ff'
                        },
                        tilePointRents: {
                            borderColor: '#00ff75'
                        },
                    tileText: {
                        color: '#525050'
                    }

});
