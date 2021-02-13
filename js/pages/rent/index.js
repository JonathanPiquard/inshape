
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceEventEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import Carousel from 'react-native-looped-carousel';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { pushNewRoute } from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';

import TabBar from '../../components/tabBar';
import Availability from './tabs/availability/';
import UsersDisplayTab from '../../components/usersDisplayTab';
import ForumsTab from '../../components/forumsTab';

const deviceWidth = Dimensions.get('window').width;


class Rent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rent: {
                title: 'Mountain Bike Carbon',
                description: 'A nice mountain bike, bought two years ago, ... 11kg, 25mm, 153 ...',
                tags: [ 'bike', 'mountain', 'Alaska', '60miles' ],
                location: 'Alaska',
                images: [ 'https://webconception.fr/images/hero.jpg', 'https://webconception.fr/images/contact.jpg', 'https://webconception.fr/images/hero.jpg', 'https://webconception.fr/images/contact.jpg', 'https://webconception.fr/images/hero.jpg' ], //urls
                availability: {
                    defaultRule: {
                        recurrence: 'one-time',
                        date: {
                            day: '12/07/16'
                        },
                        periods: [
                            { from: '8h00', to: '12h00' },
                            { from: '14h00', to: '18h00' }
                        ]
                    },
                    rules: [
                        {
                            recurrence: 'one-time',
                            date: {
                                day: '29/07/16'
                            },
                            periods: [
                                { from: '8h00', to: '12h00' },
                                { from: '14h00', to: '16h00' }
                            ]
                        },
                        {
                            recurrence: 'every-day',
                            date: {
                                from: '30/07/16',
                                to: '05/08/16'
                            },
                            periods: [
                                { from: '9h00', to: '12h00' },
                                { from: '15h00', to: '19h00' }
                            ]
                        }
                    ]
                },
                providers: [
                    {
                        username: 'Esther Crawford',
                        avatar: require('../../../images/esther-crawford.jpg'),
                        nextEvent: {
                            title: 'Crossfit'
                        },
                        _id: '64644646499964'
                    }, {
                        username: 'Mike Lane',
                        avatar: require('../../../images/mike-lane.jpg'),
                        nextEvent: {
                            title: 'Crossfit'
                        },
                        _id: '646446589964964'
                    }
                ],
                forums: []
            }
        };
    }


    render() {
        return (
            <Page title="Rent" rightActions={{icon: require('../../../images/icons/glyphs/edit.png'), redirectTo: 'editRent'}}>
                <Carousel style={{width: deviceWidth, height: 200}}>
                    {this.state.rent.images.map((image, i) => {
                        return <Image source={{uri: image}} key={'image' + i} style={{resizeMode: 'cover', flex: 1}} />;
                    })}
                </Carousel>
                <View style={styles.essentials}>
                    <Text style={styles.title}>{this.state.rent.title}</Text>
                    <Text style={styles.description}>{this.state.rent.description}</Text>
                    <Text style={styles.location}>Global Location : {this.state.rent.location}</Text>
                    <View style={styles.tags}>
                        {this.state.rent.tags.map((tag, i) => {
                            return (
                                <TouchableHighlight style={styles.tagWrap} key={'tag' + i}>
                                    <Text style={styles.tag}>{tag}</Text>
                                </TouchableHighlight>
                            );
                        })}
                    </View>
                </View>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar />}
                >

                    <Availability tabLabel={require('../../../images/icons/calendar.png')} rules={this.state.rent.availability.rules} />
                    <UsersDisplayTab tabLabel={require('../../../images/icons/provider.png')} users={this.state.rent.providers} />
                    <ForumsTab tabLabel={require('../../../images/icons/forum.png')} forums={this.state.rent.forums} />

                </ScrollableTabView>
            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(Rent);
