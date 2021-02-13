
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeviceFriendsEmitter, Dimensions, Image, View, Text, TextInput, TouchableHighlight } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import { pushNewRoute } from '../../actions/route';

import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';

import UsersDisplayTab from '../../components/usersDisplayTab';
import { Trash } from '../../components/swipeoutBtns';


class Friends extends Component {

    constructor(props) {
        super(props);

        this.state = {
            friends: [
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
                },
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
                },
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
                },
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
                },
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
                },
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
            ]
        };
    }

    render() {
        return (
            <Page title="Friends">
                <UsersDisplayTab users={this.state.friends} swipeoutBtns={[Trash]} />
            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(Friends);
