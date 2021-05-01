const initState = {
  idShop: '',
  id_Product: [],
  dish_type_id: '',
};
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case 'addCart':
      console.log(state.idShop);
      return {
        idShop: action.data.idShop,
        id_Product: [...state.id_Product, action.data.id_Product],
        dish_type_id: [...state.dish_type_id, action.data.dishes_type_id],
      };
    case 'updateCart':
      return {};
    case 'removeCart':
      console.log('check');
      return {
        ...state,
        idShop: '',
        id_Product: [],
        dish_type_id: [],
      };

    default:
      return state;
  }
}
