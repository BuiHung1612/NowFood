const initState = {
  quantity: 1,
  cart: [],
};

export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case 'addCart':
      console.log(action); // => { type: 'ADD_CART', detail: detail }
      const checkExist = state.cart?.find(
        e => e.id_Product === action.data.id_Product,
      );
      const newCart = checkExist
        ? // truong hợp đã có sản phẩm đấy trong list
          state.cart?.map(e => {
            if (e.id_Product === action.data.id_Product) {
              return {...e, quantity: e.quantity + 1};
            }
            return e;
          })
        : // truong hợp đã có sản phẩm đấy không nằm trong list
          [...state.cart, {...action.data, quantity: 1}];

      return {
        ...state,
        cart: newCart,
      };
    // console.log(state);
    // return [
    //   ...state,
    //   {
    //     idShop: action.data.idShop,
    //     id_Product: action.data.id_Product,
    //     dish_type_id: action.data.dish_type_id,
    //     service_type: action.data.service_type,
    //     price: action.data.price,
    //     img: action.data.img,
    //     title: action.data.title,
    //     idScreen: action.data.idScreen,
    //   },
    // ];
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
