import { combineReducers } from "redux";
import auth from './auth';
import registration from './registration';
import card from './card'
import addresses from "./addresses";
import route from "./route"

export default combineReducers({auth, registration, card, addresses, route});