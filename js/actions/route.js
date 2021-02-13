/* @flow */

'use strict';

module.exports = {

    replaceRoute: (route, params) => ({
        type: 'REPLACE_ROUTE',
        route,
        params
    }),

    pushNewRoute: (route, params) => ({
        type: 'PUSH_NEW_ROUTE',
        route,
        params
    }),

    resetToRoute: (route, params) => ({
        type: 'RESET_TO_ROUTE',
        route,
        params
    }),

    popRoute: () => ({
        type: 'POP_ROUTE'
    }),

    popToRoute: (route, params) => ({
        type: 'POP_TO_ROUTE',
        route,
        params
    }),


    /**
     *  Thunk Action : a function that returns a function which takes dispatch and getState as arguments.
     *  This is used to dispatch multiple action in one, which is useful when working with
     *  asynchronous requests like an action to tell it's requesting the data and another one
     *  called when the data has been received.
    **/
    thunkAction: (...params) => (dispatch, getState) => ({

    })

};




/*
import type { Action } from './types'

export const PUSH_NEW_ROUTE = "PUSH_NEW_ROUTE";
export const REPLACE_ROUTE = "REPLACE_ROUTE";
export const RESET_TO_ROUTE = "RESET_TO_ROUTE";
export const POP_ROUTE = "POP_ROUTE";
export const POP_TO_ROUTE = "POP_TO_ROUTE";

export const replaceRoute = (route:string):Action => ({
    type: REPLACE_ROUTE,
    route: route
});

export const pushNewRoute = (route:string):Action => ({
    type: PUSH_NEW_ROUTE,
    route: route
});

export const resetToRoute = (route:string):Action => ({
    type: RESET_TO_ROUTE,
    route: route
});

export const popRoute = (route:string):Action => ({
    type: POP_ROUTE,
    route: route
});

export const popToRoute = (route:string):Action => ({
    type: POP_TO_ROUTE,
    route: route
});

*/
