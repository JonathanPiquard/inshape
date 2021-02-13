/**
 * Created by kylefang on 4/28/16.
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackAndroid, Dimensions, Image } from 'react-native';

import SideMenu from './components/sidemenu';
import { openDrawer, closeDrawer } from './actions/drawer';
import { popRoute } from './actions/route';
import Navigator from 'Navigator';


import SideBar from './components/sideBar';

import Login from './pages/login/';
import Register from './pages/register/';

import Profile from './pages/profile/';
import Friends from './pages/friends/';
import Search from './pages/search/';
import Activity from './pages/activity/';
import Activities from './pages/activities/';
import EditActivity from './pages/editActivity/';
import Event from './pages/event/';
import Events from './pages/events/';
import EditEvent from './pages/editEvent/';
import Rent from './pages/rent/';
import Rents from './pages/rents/';
import EditRent from './pages/editRent/';
import EditRule from './pages/editRule/';
import Forum from './pages/forum/';

export var globalNav = {};
var { height:deviceHeight, width:deviceWidth } = Dimensions.get('window');

const searchResultRegexp = /^search\/(.*)$/;

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        var currentState = state;

        if (currentState) {
            while (currentState.children) {
                currentState = currentState.children[currentState.index]
            }
        }
        return defaultReducer(state, action);
    }
};

Navigator.prototype.replaceWithAnimation = function (route) {
    const activeLength = this.state.presentedIndex + 1;
    const activeStack = this.state.routeStack.slice(0, activeLength);
    const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
    const nextStack = activeStack.concat([route]);
    const destIndex = nextStack.length - 1;
    const nextSceneConfig = this.props.configureScene(route, nextStack);
    const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

    const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
    this._emitWillFocus(nextStack[destIndex]);
    this.setState({
        routeStack: nextStack,
        sceneConfigStack: nextAnimationConfigStack,
    }, () => {
        this._enableScene(destIndex);
        this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
            this.immediatelyResetRouteStack(replacedStack);
        });
    });
};


class AppNavigator extends Component {

    componentDidMount() {
        globalNav.navigator = this._navigator;

        BackAndroid.addEventListener('hardwareBackPress', () => {
            var routes = this._navigator.getCurrentRoutes();

            if (routes[routes.length - 2].id === 'register' || (routes[routes.length - 2].id === 'login' && routes[routes.length - 1].id !== 'register')) {
                return false;
            }
            else {
                this.props.popRoute();
                return true;
            }
        });
    }

    render() {
        return (
            <Image source={require('../images/backgrounds/bg13-1.jpg')} style={{width: deviceWidth, height: deviceHeight, alignItems: 'center', justifyContent: 'center'}} resizeMode='cover'>
                <SideMenu.AirBnbStyle
                    menu={<SideBar />}
                    isOpen={this.props.isOpened}
                    openMenuOffset={deviceWidth - 205}
                    onChange={(isOpened) => (isOpened) ? this.props.openDrawer() : this.props.closeDrawer()}
                >
                    <Navigator
                        ref={(ref) => this._navigator = ref}
                        configureScene={(route) => Navigator.SceneConfigs.FloatFromRight}
                        initialRoute={{id: 'login'}}
                        renderScene={this.renderScene.bind(this)}
                    />
                </SideMenu.AirBnbStyle>
            </Image>
        );
    }

    getPage(id) {
        switch (id) {
            case 'login':
                return Login;
            case 'register':
                return Register;
            case 'profile':
                return Profile;
            case 'friends':
                return Friends;
            case 'search':
                return Search;
            case 'activity':
                return Activity;
            case 'activities':
                return Activities;
            case 'editActivity':
                return EditActivity;
            case 'event':
                return Event;
            case 'events':
                return Events;
            case 'editEvent':
                return EditEvent;
            case 'rent':
                return Rent;
            case 'rents':
                return Rents;
            case 'editRent':
                return EditRent;
            case 'editRule':
                return EditRule;
            case 'forum':
                return Forum;
            default :
                return Login;
        }
    }

    renderScene({id, params}, navigator) { //route, navigator
        const { app } = this.props;

        let Page = this.getPage(id);
        return <Page navigator={navigator} app={app} params={params} />;
    }
}

/*
const mapDispatchToProps = (dispatch) => ({
    popRoute: () => dispatch(popRoute()),
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer())
});
*/

const mapDispatchToProps = {
    popRoute,
    openDrawer,
    closeDrawer
};

const mapStateToProps = (state) => ({
    isOpened: state.drawer.isOpened
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator)
