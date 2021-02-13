/**
 * Created by kylefang on 4/30/16.
 * @flow
 */

'use strict';

import { globalNav } from '../AppNavigator';
import { REHYDRATE } from 'redux-persist/constants';

const initialState = { routes: ['login'], params: [{}] };
const defaultParams = {};


export default (state = initialState, {type, route, params = defaultParams, payload}) => ({

    PUSH_NEW_ROUTE() {
        globalNav.navigator.push({id: route, params});
        return {
            params: [...state.params, params],
            routes: [...state.routes, route]
        };
    },

    REPLACE_ROUTE() {
        globalNav.navigator.replace({id: route, params});
        state.routes.pop();
        state.params.pop();

        return {
            params: [...state.params, params],
            routes: [...state.routes, route]
        };
    },

    RESET_TO_ROUTE() {
        globalNav.navigator.resetTo({id: route, params});
        return {
            params: [params],
            routes: [route]
        };
    },

    POP_ROUTE() {
        globalNav.navigator.pop();
        state.routes.pop();
        state.params.pop();

        return {
            params: state.params,
            routes: state.routes
        };
    },

    POP_TO_ROUTE() {
        globalNav.navigator.popToRoute({id: route, params});
        while (state.routes.pop() !== route) { state.params.pop(); } //the removed route === the route to access

        return {
            params: state.params, //the route to access has not been removed because while stop right before
            routes: [...state.routes, route]
        };
    },

    LOGIN: () => ({
        params: [...state.params, {}],
        routes: [...state.routes, 'overview']
    }),

    [REHYDRATE]() {
        return (payload) ? {...state, ...payload} : state; //action.payload === saved data (redux-persist)
    }

}[type] || (() => state))()



/*

import type { Action } from '../actions/types';
import { globalNav } from '../AppNavigator';
import { PUSH_NEW_ROUTE, POP_ROUTE, POP_TO_ROUTE, REPLACE_ROUTE, RESET_TO_ROUTE } from '../actions/route';
import { REHYDRATE } from 'redux-persist/constants'

export type State = {
    routes: Array<string>
}

const initialState = {
    routes: ['login']
};


export default function (state:State = initialState, action:Action): State {

    if (action.type === PUSH_NEW_ROUTE) {
        globalNav.navigator.push({id: route});
        return {
            routes: [...state.routes, route]
        };
    }

    if (action.type === REPLACE_ROUTE) {
        globalNav.navigator.replace({id: route});
        let routes = state.routes;
        routes.pop();

        return {
            routes: [...routes, route]
        };
    }

    if (action.type === RESET_TO_ROUTE) {
        globalNav.navigator.resetTo({id: route});
        return {
            routes: [route]
        };
    }

    if (action.type === POP_ROUTE) {
        globalNav.navigator.pop();
        let routes = state.routes;
        routes.pop();

        return {
            routes: routes
        };
    }

    if (action.type === POP_TO_ROUTE) {
        globalNav.navigator.popToRoute({id: route});
        let routes = state.routes;

        while (routes.pop() !== route) {}

        return {
            routes: [...routes, route]
        };
    }

    if (action.type === REHYDRATE) {
        const savedData = action['payload']['route'] || state;
        return {
            ...savedData
        };
    }

    return state;
}
*/
