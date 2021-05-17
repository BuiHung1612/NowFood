import {combineReducers} from 'redux';
import idShop from './idShop';
import cartReducer from './cart';
import favouriteShop from './favouriteShop';
import Screen from './Screen';

const rootReducer = combineReducers({
  idShop,
  cartReducer,
  favouriteShop,
  Screen,
});
export default rootReducer;
