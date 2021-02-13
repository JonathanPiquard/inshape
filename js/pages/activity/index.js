
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import Carousel from '../../components/carousel';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { replaceRoute } from '../../actions/route';
import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';

import TabBar from '../../components/tabBar';
import Events from './tabs/events/';
import UsersDisplayTab from '../../components/usersDisplayTab';
import ForumsTab from '../../components/forumsTab';


const deviceWidth = Dimensions.get('window').width;

const Esther = require('../../../images/esther-crawford.jpg');
const Mike = require('../../../images/mike-lane.jpg');

class Activity extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activity: {
                title: 'Mountain Bike',
                description: 'A trip accross the Alaskan mountains over 60 miles throught snow and ice ...',
                tags: [ 'bike', 'mountain', 'Alaska', '60miles' ],
                location: 'Alaska',
                images: [ 'https://webconception.fr/images/hero.jpg', 'https://webconception.fr/images/contact.jpg', 'https://webconception.fr/images/hero.jpg', 'https://webconception.fr/images/contact.jpg', 'https://webconception.fr/images/hero.jpg' ], //urls
                events: [
                    {
                        title: 'Cyclism',
                        description: 'A two hours ride with the crew.',
                        from: {
                            date: '05:00 03/04/16',
                            location: 'McLarens Bar'
                        },
                        to: {
                            date: '09:00 03/04/16',
                            location: 'Empire State Building'
                        },
                        providers: [],
                        clients: [],
                        _id: 1
                    }, {
                        title: 'Cyclism',
                        description: 'A two hours ride with the crew.',
                        from: {
                            date: '05:00 03/04/16',
                            location: 'McLarens Bar'
                        },
                        to: {
                            date: '09:00 03/04/16',
                            location: 'Empire State Building'
                        },
                        providers: [],
                        clients: [],
                        _id: 2
                    }
                ],
                providers: [
                    {
                        username: 'Esther Crawford',
                        avatar: Esther,
                        nextEvent: {
                            title: 'Cyclism'
                        },
                        _id: '64644646499964'
                    }, {
                        username: 'Mike Lane',
                        avatar: Mike,
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
                ]
            }
        };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Page title="Activity" rightActions={{icon: require('../../../images/icons/glyphs/edit.png'), redirectTo: 'editActivity'}}>
                <Carousel style={{width: deviceWidth, height: 200}}>
                    {this.state.activity.images.map((image, i) => {
                        return <Image source={{uri: image}} key={i} style={{resizeMode: 'cover', flex: 1}} />;
                    })}
                </Carousel>
                <View style={styles.essentials}>
                    <Text style={styles.title}>{this.state.activity.title}</Text>
                    <Text style={styles.description}>{this.state.activity.description}</Text>
                    <View style={styles.tags}>
                        {this.state.activity.tags.map((tag, i) => {
                            return <TouchableHighlight style={styles.tagWrap}><Text style={styles.tag} key={i}>{tag}</Text></TouchableHighlight>;
                        })}
                    </View>
                </View>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar />}
                >
                    <Events tabLabel={require('../../../images/icons/event.png')} events={this.state.activity.events} />
                    <UsersDisplayTab tabLabel={require('../../../images/icons/provider.png')} users={this.state.activity.providers} />
                    <ForumsTab tabLabel={require('../../../images/icons/forum.png')} forums={this.state.activity.forums} />
                </ScrollableTabView>
            </Page>
        );
    }
}


const mapDispatchToProps = {
    replaceRoute
};

export default connect(null, mapDispatchToProps)(Activity);
