import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index';

import feathers from 'feathers-client';
import io from 'socket.io-client';

const defaultState = {};

const store = createStore(rootReducer, defaultState);

const host = 'http://localhost:3030';
const socket = io(host);
export const app = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.hooks())

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
