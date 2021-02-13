/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';


var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


export default StyleSheet.create({

    form: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        height: deviceHeight - 42,
        paddingVertical: 20,
        paddingHorizontal: 15
    },
        inputGroup: {
            marginBottom: 25,
            paddingHorizontal: 10,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        },
            label: {
                marginHorizontal: -10
            },
            inputText: {
                alignSelf: 'stretch',
                paddingTop: 0,
                paddingBottom: 7.5,
                color: '#181818'
            },
            recurrence: {
                borderRadius: 0,
                height: 30,
                borderWidth: 0,
                borderBottomWidth: 1,
                paddingHorizontal: 5,
                paddingBottom: 2,
                justifyContent: 'flex-end',
                alignItems: 'flex-start'
            },
            period: {
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: -15
            },
                action: {
                    alignSelf: 'flex-end',
                    alignItems: 'center'
                }
});
