
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { pushNewRoute } from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';

import TabBar from '../../components/tabBar';
import Itinerary from './tabs/itinerary/';
import UsersDisplayTab from '../../components/usersDisplayTab';
import ForumsTab from '../../components/forumsTab';

const deviceWidth = Dimensions.get('window').width;


class Event extends Component {

    constructor(props) {
        super(props);

        this.state = {
            event: {
                title: 'Mountain Bike',
                description: 'A trip accross the Alaskan mountains over 60 miles throught snow and ice ...',
                tags: [ 'bike', 'mountain', 'Alaska', '60miles' ],

                providers: [
                    {
                        username: 'Esther Crawford',
                        avatar: require('../../../images/esther-crawford.jpg'),
                        nextEvent: {
                            title: 'Cyclism'
                        },
                        _id: '64644646499964'
                    }, {
                        username: 'Mike Lane',
                        avatar: require('../../../images/mike-lane.jpg'),
                        nextEvent: {
                            title: 'Cyclism'
                        },
                        _id: '646446589964964'
                    }
                ],
                forums: [
                    {
                        title: 'A rent to recommand ?',
                        description: 'I don\'t have a bike yet, I was wondering what rent is the more appropriated ...',
                        type: 'help',
                        createdAt: '9:00, 07/09/16',
                        author: {
                            title: 'Jarod'
                        },
                        state: 'opened',
                        _id: 156464646464
                    },
                    {
                        title: 'A rent to recommand ?',
                        description: 'I don\'t have a bike yet, I was wondering what rent is the more appropriated ...',
                        type: 'help',
                        createdAt: '9:00, 07/09/16',
                        author: {
                            title: 'Jarod'
                        },
                        state: 'closed',
                        _id: 6876524976566
                    }
                ],
                itinerary: [
                    {
                        title: 'Start',
                        description: 'A two hours ride with the crew.',
                        date: '05:00 03/04/16',
                        location: 'McLarens Bar'
                    },
                    {
                        title: 'Step 1',
                        description: 'A two hours ride with the crew.',
                        date: '05:00 03/04/16',
                        location: 'McLarens Bar'
                    },
                    {
                        title: 'Step 2',
                        description: 'A two hours ride with the crew.',
                        date: '05:00 03/04/16',
                        location: 'McLarens Bar'
                    },
                    {
                        title: 'Step 3',
                        description: 'A two hours ride with the crew.',
                        date: '05:00 03/04/16',
                        location: 'McLarens Bar'
                    },
                    {
                        title: 'End',
                        description: 'A two hours ride with the crew.',
                        date: '05:00 03/04/16',
                        location: 'McLarens Bar'
                    }
                ]
            }
        };
    }

    render() {
        return (
            <Page title="Event" rightActions={{icon: require('../../../images/icons/glyphs/edit.png'), redirectTo: 'editEvent'}}>
                <View style={styles.essentials}>
                    <Text style={styles.title}>{this.state.event.title}</Text>
                    <Text style={styles.description}>{this.state.event.description}</Text>
                    <View style={styles.tags}>
                        {this.state.event.tags.map((tag, i) => {
                            return <TouchableHighlight style={styles.tagWrap}><Text style={styles.tag} key={i}>{tag}</Text></TouchableHighlight>;
                        })}
                    </View>
                </View>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar />}
                >
                    <Itinerary tabLabel={require('../../../images/icons/map-location.png')} itinerary={this.state.event.itinerary} />
                    <UsersDisplayTab tabLabel={require('../../../images/icons/provider.png')} users={this.state.event.providers} />
                    <ForumsTab tabLabel={require('../../../images/icons/forum.png')} forums={this.state.event.forums} />
                </ScrollableTabView>
            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(Event);
