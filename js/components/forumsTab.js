'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, ListView, Text, TextInput, TouchableHighlight, StyleSheet } from 'react-native';

import Forum from './forum';


class ForumsTab extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: ds.cloneWithRows(this.props.forums)
        };
    }

    _renderRow(rowData: object, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
        return (
            <Forum forum={rowData} key={rowData._id} />
        );
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.searchWrap}>
                    <TextInput style={styles.searchInput} placeholder="Search ..." placeholderTextColor="#a1a1a1" underlineColorAndroid={'transparent'} />
                </View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    style={styles.list}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    main: {
        flex: 1
    },
        list: {
            paddingTop: -10
        },
        searchWrap: {
            marginTop: 15,
            marginBottom: 20,
            marginHorizontal: 20,
            borderBottomColor: '#f9f9f9',
            borderBottomWidth: 2
        },
            searchInput: {
                color: '#f9f9f9',
                borderWidth: 0,
                paddingVertical: 0,
                paddingHorizontal: 6.66
            }

});

export default ForumsTab;
