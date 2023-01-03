import { combineReducers } from 'redux';

import authReducer from './authReducer';
import statusReducer from './statusReducer';
import activityReducer from './activityReducer';

export const rootReducer = combineReducers({
  authReducer,
  statusReducer,
  activityReducer,
});