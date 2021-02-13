'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight } from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import styles from './styles';

import Page from '../../components/page';

import TabBar from '../../components/tabBar';
import Events from './tabs/events/';
import EssentialsEditTab from '../../components/essentialsEditTab';
import UsersEditTab from '../../components/usersEditTab';
import ImagesEditTab from '../../components/imagesEditTab';


const tabBarActions = [
    {
        style: styles.save,
        component: <Image source={require('../../../images/icons/save.png')} style={{width: 32, height: 32}} />
    }
];


class EditActivity extends Component {

    constructor(props) {
        super(props);

        //for now
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
            selectedTab: 'essentials'
        };
    }

    render() {
        return (
            <Page title="Edit Activity" rightActions={{icon: require('../../../images/icons/glyphs/close.png'), redirectTo: 'back'}}>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar actions={tabBarActions} />}
                >
                    <EssentialsEditTab tabLabel={require('../../../images/icons/notepad.png')} data={this.state.activity} location={true} />
                    <UsersEditTab tabLabel={require('../../../images/icons/provider.png')} searchIcon={require('../../../images/icons/add-provider.png')} users={this.state.activity.providers} />
                    <Events tabLabel={require('../../../images/icons/event.png')} activity={this.state.activity} />
                    <ImagesEditTab tabLabel={require('../../../images/icons/camera.png')} images={this.state.activity.images} />
                </ScrollableTabView>
            </Page>
        );
    }
}

const mapDispatchToProps = {
    
};

export default connect(null, mapDispatchToProps)(EditActivity);
