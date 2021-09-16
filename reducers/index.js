import {combineReducers} from 'redux';
import idShop from './idShop';
import cartReducer from './cart';
import favouriteShop from './favouriteShop';
import Screen from './Screen';
import getApI from './getApI';
import userInfo from './userInfo';
const rootReducer = combineReducers({
  idShop,
  cartReducer,
  favouriteShop,
  Screen,
  getApI,
  userInfo,
});
export default rootReducer;
