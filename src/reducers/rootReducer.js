import { combineReducers } from 'redux';

import reducer from './reducer';
import authReducer from './authReducer';
import statusReducer from './statusReducer';

export const rootReducer = combineReducers({
  reducer,
  authReducer,
  statusReducer,
});