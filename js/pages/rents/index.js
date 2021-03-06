
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


class Rents extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rents: require('./mockupRents')
        };
    }

    render() {
        return (
            <Page title="Rents" rightActions={{icon: require('../../../images/icons/glyphs/add.png'), redirectTo: 'editRent'}}>
                <ScrollableTabView
                    style={styles.tabView}
                    initialPage={0}
                    renderTabBar={() => <TabBar />}
                >

                    <ElementsList
                        tabLabel={require('../../../images/icons/provider.png')}
                        elements={this.state.rents.filter((rent) => rent.providers /* contains the choosen provider : the current user or another */)}
                        type={'rent'}
                    />

                    <ElementsList
                        tabLabel={require('../../../images/icons/client.png')}
                        elements={this.state.rents.filter((rent) => rent.clients /* contains the choosen client : the current user or another */)}
                        type={'rent'}
                    />

                </ScrollableTabView>
            </Page>
        );
    }
}


const mapDispatchToProps = {
    pushNewRoute
};

export default connect(null, mapDispatchToProps)(Rents);
