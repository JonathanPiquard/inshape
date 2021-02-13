/* @flow */
'use strict';

import { StyleSheet, Dimensions } from 'react-native';


var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');


export default StyleSheet.create({

    tabView: {
        height: deviceHeight - 42
    },

});
