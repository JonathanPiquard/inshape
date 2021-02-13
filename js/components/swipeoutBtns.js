'use strict';

import React, { Component } from 'react';
import { Image, View, Text, TouchableHighlight } from 'react-native';

module.exports = {

    Trash: {
        component:
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Image source={require('../../images/icons/glyphs/close.png')} style={{height: 32, width: 32}} />
            </View>,
        backgroundColor: '#da3451'
    },

    Edit: {
        component:
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <Image source={require('../../images/icons/glyphs/edit.png')} style={{height: 28, width: 28}} />
            </View>,
        backgroundColor: '#53c495'
    },

    ImageControls: {
        component:
            <View style={{alignItems: 'center', justifyContent: 'space-between', flex: 1, flexDirection: 'column'}}>
                <TouchableHighlight style={{alignItems: 'center', justifyContent: 'center', width: 100, backgroundColor: '#53c495'}}>
                    <Image source={require('../../images/icons/arrow-up-white.png')} style={{height: 24, width: 24, resizeMode: 'center'}} />
                </TouchableHighlight>
                <Text style={{color: '#f9f9f9'}}>#1</Text>
                <TouchableHighlight style={{alignItems: 'center', justifyContent: 'center', width: 100, backgroundColor: '#53c495'}}>
                    <Image source={require('../../images/icons/arrow-down-white.png')} style={{height: 24, width: 24, resizeMode: 'center'}} />
                </TouchableHighlight>
            </View>,
        backgroundColor: '#4ebb8e'
    }

};
