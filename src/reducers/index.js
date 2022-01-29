import { combineReducers } from "redux";
import auth from './auth';
import registration from './registration';
import card from './card'

export default combineReducers({auth, registration, card});