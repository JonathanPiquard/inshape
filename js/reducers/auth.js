/**
 * Created by kylefang on 4/30/16.
 * @flow
 */

'use strict';

import { globalNav } from '../AppNavigator';
import { REHYDRATE } from 'redux-persist/constants';
import { AsyncStorage } from 'react-native';

const initialState = {
    profile: null,
    connected: false,
    authenticated: false
};


export default (state = initialState, action) => ({

    SET_CONNECTED: () => ({
        ...state,
        connected: true
    }),

    SET_DISCONNECTED: () => ({
        ...state,
        connected: false
    }),

    /*LOGIN: () => ({
        ...state,
        profile: action.profile,
        authenticated: true
    }),*/

    LOGIN() {
        console.log('profile', profile);

        return {
            ...state,
            profile: action.profile,
            authenticated: true
        };
    },

    LOGOUT: () => initialState,

    CLEAR_TOKEN() {
        AsyncStorage.removeItem('token');

        return {
            ...state,
            profile: null,
            authenticated: false
        };
    }

}[action.type] || (() => state))()
