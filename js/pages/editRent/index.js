'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';

import Page from '../../components/page';

import TabBar from '../../components/tabBar';
import EssentialsEditTab from '../../components/essentialsEditTab';
import Availability from './tabs/availability/';
import UsersEditTab from '../../components/usersEditTab';
import ImagesEditTab from '../../components/imagesEditTab';


const tabBarActions = [
    {
        style: styles.save,
        component: <Image source={require('../../../images/icons/save.png')} style={{width: 32, height: 32}} />
    }
];


class EditRent extends Component {

    constructor(props) {
        super(props);

        //for now
        this.state = {
            rent: {
                title: '',
                description: '',
                tags: [],
                location: '',
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
            <Page title="Edit Rent" rightActions={{icon: require('../../../images/icons/glyphs/close.png'), redirectTo: 'back'}}>>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar actions={tabBarActions} />}
                >

                    <EssentialsEditTab tabLabel={require('../../../images/icons/notepad.png')} data={this.state.rent} location={true} />
                    <UsersEditTab tabLabel={require('../../../images/icons/provider.png')} searchIcon={require('../../../images/icons/add-provider.png')} users={this.state.rent.providers} />
                    <Availability tabLabel={require('../../../images/icons/calendar.png')} availability={this.state.rent.availability} />
                    <ImagesEditTab tabLabel={require('../../../images/icons/camera.png')} images={this.state.rent.images} />

                </ScrollableTabView>
            </Page>
        );
    }
}


const mapDispatchToProps = {
    
};

export default connect(null, mapDispatchToProps)(EditRent);
