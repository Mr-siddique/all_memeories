import {combineReducers} from 'redux';
import auth from './Auth';
import posts from './posts';
export default combineReducers({posts,auth});