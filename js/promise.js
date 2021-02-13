
'use strict';

function warn(error) {
 	console.warn(error.message || error);
  	throw error; // To let the caller handle the rejection
}


//function(store)(next)(action)
module.exports = (store) => (next) => (action) => //each function return another function which receives an argument
 	typeof action.then === 'function' //action is a promise
    	? Promise.resolve(action).then(next, warn)
    	: next(action); //next === store.dispatch
