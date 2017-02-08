import { combineReducers } from 'redux-immutable';
import { users } from './users';


const rootReducer = combineReducers({
  users
});

export default rootReducer;
