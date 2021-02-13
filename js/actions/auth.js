/* @flow */

'use strict';
//import type { Action } from './types';

module.exports = {
    setConnected: () => { type: 'SET_CONNECTED' },
    setDisconnected: () => { type: 'SET_DISCONNECTED' },
    //login: (profile) => { type: 'LOGIN', profile },
    login(profile) {
        console.log('profile', profile);
        return { type: 'LOGIN', profile };
    },
    logout: () => { type: 'LOGOUT' },
    clearToken: () => { type: 'CLEAR_TOKEN' }
};






/*
export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";

export const openDrawer = ():Action => ({
    type: OPEN_DRAWER
});

export const closeDrawer = ():Action => ({
    type: CLOSE_DRAWER
});
*/
