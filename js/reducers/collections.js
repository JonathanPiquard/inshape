/**
 * Created by kylefang on 4/30/16.
 * @flow
 */

'use strict';

import { globalNav } from '../AppNavigator';
import { REHYDRATE } from 'redux-persist/constants';
import { AsyncStorage } from 'react-native';

const initialState = {
    activities: []
};


export default (state = initialState, action) => ({

    UPDATE_ACTIVITIES: () => ({
        ...state,
        activities: action.activities
    })

}[action.type] || (() => state))()
