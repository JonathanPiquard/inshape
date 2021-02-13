
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Text, TextInput, TouchableHighlight, ListView } from 'react-native';

import { pushNewRoute } from '../../actions/route';
import theme from '../../themes/base-theme';
import styles from './styles';

import Page from '../../components/page';
import ElementsList from '../../components/elementsList';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from '../../components/tabBar';


class Events extends Component {

    constructor(props) {
        super(props);

        this.state = {
            events: require('./mockupEvents')
        };
    }

    render() {
        return (
            <Page title="Events" rightActions={{icon: require('../../../images/icons/glyphs/add.png'), redirectTo: 'editEvent'}}>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar />}
                >

                <ElementsList
                    tabLabel={require('../../../images/icons/provider.png')}
                    elements={this.state.events.filter((event) => event.providers /* contains the choosen provider : the curevent user or another */)}
                    type={'event'}
                />

                <ElementsList
                    tabLabel={require('../../../images/icons/client.png')}
                    elements={this.state.events.filter((event) => event.clients /* contains the choosen client : the curevent user or another */)}
                    type={'event'}
                />

                </ScrollableTabView>
            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(Events);
