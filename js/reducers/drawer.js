/* @flow */

'use strict';

const initialState = { isOpened: false };


export default (state = initialState, action) => ({

    OPEN_DRAWER: () => ({
        ...state,
        isOpened: true
    }),

    CLOSE_DRAWER: () => ({
        ...state,
        isOpened: false
    })

}[action.type] || (() => state))()







/*
export default (state = initialState, action) => {

    const handlers = {
        OPEN_DRAWER: () => ({
            ...state,
            isOpened: true
        }),

        CLOSE_DRAWER: () => ({
            ...state,
            isOpened: false
        })
    };

    return (typeof handlers[action.type] !== 'undefined')
            ? handlers[action.type]()
            : state;
};
*/


/*
import type { Action } from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

export type State = {
    isOpened: boolean
}

const initialState = {
    isOpened: false
};

export default function (state:State = initialState, action:Action): State {
    if (action.type === OPEN_DRAWER) {
        return {
            ...state,
            isOpened: true
        };
    }

    if (action.type === CLOSE_DRAWER) {
        return {
            ...state,
            isOpened: false
        };
    }
    return state;
}
*/
