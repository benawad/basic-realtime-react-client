import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tacos from './taco';

const rootReducer = combineReducers({tacos, routing: routerReducer});

export default rootReducer;
