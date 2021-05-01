import {combineReducers} from 'redux';
import idShop from './idShop';
import cartReducer from './cart';

const rootReducer = combineReducers({
  idShop,
  cartReducer,
});
export default rootReducer;
