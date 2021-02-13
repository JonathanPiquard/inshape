/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';



export default StyleSheet.create({

    main : {
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
            }

});
