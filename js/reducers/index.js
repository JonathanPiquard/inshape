/* @flow */

'use strict';

import { combineReducers } from 'redux';

import auth from './auth';
import drawer from './drawer';
import route from './route';
import collections from './collections';

export default combineReducers({
  auth,
 	drawer,
 	route,
  collections
})
