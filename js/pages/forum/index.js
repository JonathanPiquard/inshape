
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight, ListView } from 'react-native';

import { pushNewRoute } from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';


class Forum extends Component {

    constructor(props) {
        super(props);

        this.state = {
            forum: {
                title: 'Help : choosing the right machine',
                description: 'I don\'t know what machines I should use to throw up banana throught my ears ...',
                messages: [
                    {
                        content: 'I think I can help you. You should use the XP2000 oor the Millenium 1+. Tell me what you get with these machines.',
                        author: {
                            title: 'Esther Crawford',
                            avatar: require('../../../images/esther-crawford.jpg'),
                            _id: 68585854686
                        },
                        createdAt: '02/06/17 at 9:00',
                        _id: 87646548546
                    },
                    {
                        content: 'I think I can help you. You should use the XP2000 oor the Millenium 1+. Tell me what you get with these machines.',
                        author: {
                            title: 'Esther Crawford',
                            avatar: require('../../../images/esther-crawford.jpg'),
                            _id: 68585854686
                        },
                        createdAt: '02/06/17 at 9:22',
                        _id: 78645656456
                    }
                ],
                type: 'help',
                author: {
                    title: 'Mike Lane',
                    avatar: require('../../../images/mike-lane.jpg'),
                    _id: 6646787968787
                },
                state: 'opened',
                createdAt: '02/06/17 at 8:16'
            }
        };

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state.dataSource = ds.cloneWithRows(this.state.forum.messages);
    }

    _renderRow(rowData: object, sectionID: string, rowID: string) {
        return (
            <View style={styles.message} key={rowData._id}>
                <Text style={styles.description}>{rowData.content}</Text>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{rowData.createdAt}, by {rowData.author.title}</Text>
                    <Image source={rowData.author.avatar} style={styles.avatar} />
                </View>
            </View>
        );
    }

    render() {
        return (
            <Page title="Forum" style={styles.main}>

                <View style={[styles.message, {marginBottom: 5}]}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{this.state.forum.title}</Text>
                        <View style={styles.typeWrap}>
                            <Text style={styles.type}>{this.state.forum.type}</Text>
                        </View>
                    </View>
                    <Text style={[styles.description, {marginLeft: 13.33}]}>{this.state.forum.description}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>{this.state.forum.createdAt}, by {this.state.forum.author.title}</Text>
                        <Image source={this.state.forum.author.avatar} style={styles.avatar} />
                    </View>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                />

                <View style={styles.newMessage}>
                    <TextInput style={styles.inputContent} placeholder="Comment ..." placeholderTextColor="#a1a1a1" />
                    <TouchableHighlight style={styles.submitBtn}>
                        <Text style={styles.submitText}>Send</Text>
                    </TouchableHighlight>
                </View>

            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(Forum);
