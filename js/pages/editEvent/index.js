'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';

import Page from '../../components/page';

import TabBar from '../../components/tabBar';
import EssentialsEditTab from '../../components/essentialsEditTab';
import UsersEditTab from '../../components/usersEditTab';
import Providers from './tabs/providers/';
import Itinerary from './tabs/itinerary/';


const tabBarActions = [
    {
        style: styles.save,
        component: <Image source={require('../../../images/icons/save.png')} style={{width: 32, height: 32}} />
    }
];


class EditEvent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activity: {
                title: '',
                description: '',
                tags: [],
                location: '',
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
                        clients: []
                    },
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
                        clients: []
                    }
                ],
                defaultEvent: {},
                providers: [
                    {
                        username: 'Esther Crawford',
                        avatar: require('../../../images/esther-crawford.jpg'),
                        nextEvent: {
                            title: 'Surf'
                        },
                        _id: '64644646499964'
                    }, {
                        username: 'Mike Lane',
                        avatar: require('../../../images/mike-lane.jpg'),
                        nextEvent: {
                            title: 'Canoe'
                        },
                        _id: '646446589964964'
                    }
                ]
            },
            event: {
                title: '',
                description: '',
                tags: [],
                itinerary:[
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
                ],
                providers: [
                    {
                        username: 'Esther Crawford',
                        avatar: require('../../../images/esther-crawford.jpg'),
                        nextEvent: {
                            title: 'Surf'
                        },
                        _id: '64644646499964'
                    },
                    {
                        username: 'Mike Lane',
                        avatar: require('../../../images/mike-lane.jpg'),
                        nextEvent: {
                            title: 'Canoe'
                        },
                        _id: '646446589964964'
                    }
                ],
                clients: [
                    {
                        username: 'Esther Crawford',
                        avatar: require('../../../images/esther-crawford.jpg'),
                        nextEvent: {
                            title: 'Surf'
                        },
                        _id: '64644646499964'
                    },
                    {
                        username: 'Mike Lane',
                        avatar: require('../../../images/mike-lane.jpg'),
                        nextEvent: {
                            title: 'Canoe'
                        },
                        _id: '646446589964964'
                    }
                ]
            },
            selectedTab: 'essentials'
        };
    }

    render() {
        return (
            <Page title="Edit Event" rightActions={{icon: require('../../../images/icons/glyphs/close.png'), redirectTo: 'back'}}>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar actions={tabBarActions} />}
                >

                    <EssentialsEditTab tabLabel={require('../../../images/icons/notepad.png')} data={this.state.event} />
                    <Providers tabLabel={require('../../../images/icons/provider.png')} event={this.state.event} activity={this.state.activity} />
                    <UsersEditTab tabLabel={require('../../../images/icons/client.png')} searchIcon={require('../../../images/icons/add-provider.png')} users={this.state.event.clients} />
                    <Itinerary tabLabel={require('../../../images/icons/map-location.png')} itinerary={this.state.event.itinerary} />

                </ScrollableTabView>
            </Page>
        );
    }
}


const mapDispatchToProps = {
    
};

export default connect(null, mapDispatchToProps)(EditEvent);
