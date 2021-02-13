'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, View, ListView, Text, TouchableHighlight } from 'react-native';
import Swipeout from './swipeout/';

import { ImageControls, Trash } from './swipeoutBtns';


class ImagesEditTab extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(this.props.images)
        };
    }

    _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <View>
                <Swipeout key={rowData} left={[ImageControls]} right={[Trash]} style={styles.image}>
                    <Image source={{uri: rowData}} style={{resizeMode: 'cover', flex: 1}} />
                </Swipeout>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.btnGroup}>
                    <TouchableHighlight style={styles.btn}>
                        <View style={styles.btnContent}>
                            <Text style={styles.btnText}>Add Picture (max: 5)</Text>
                            <Image source={require('../../images/icons/add-camera.png')} style={styles.btnImage} />
                        </View>
                    </TouchableHighlight>
                </View>
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({

    main : {
        flex: 1,
        paddingVertical: 5
    },
        btnGroup: {
          flexDirection: 'row',
          height: 40,
          marginHorizontal: 10,
          marginVertical: 10,
          backgroundColor: '#f9f9f9'
        },
            btn: {
                flex: 1,
                alignSelf: 'stretch',
                justifyContent: 'center',
                padding: 6.66
            },
                btnContent: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 5
                },
                btnText: {
                    fontSize: 16,
                    fontWeight: 'bold',
                },
                btnImage: {
                    height: 42,
                    width: 42
                },

    list: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 6.66,
        marginHorizontal: 10
    },
        image: {
            marginVertical: 3.33,
            width: 166.66,
            height: 100
        }

});


export default ImagesEditTab;
