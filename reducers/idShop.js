const initState = {
  id: '',
  id_Product: '',
  service_type: '',
  dish_type_id: '',
};
export default function shopReducer(state = initState, action) {
  switch (action.type) {
    case 'idShop':
      console.log('idshop1:', action.data);
      return {
        ...state,
        id: action.data,
      };
    case 'idProduct':
      console.log('Product', action);
      return {
        ...state,
        id_Product: action.data.id_Product,
        dish_type_id: action.data.dish_type_id,
      };
    case 'service_type':
      return {
        ...state,
        service_type: action.data.service_type,
      };

    default:
      return state;
  }
}
