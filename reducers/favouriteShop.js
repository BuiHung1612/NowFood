const initState = {
  shop: [],
};
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case 'addShop':
      // => { type: 'ADD_CART', detail: detail }
      var newCart = [];
      var checkExist = false;
      // console.log(action.data);
      // if (state.shop == null) {
      //   newCart = [...state.shop, {...action.data}];
      // }
      state.shop?.length == 0
        ? (console.log('check0'), (newCart = [...state.shop, {...action.data}]))
        : ((checkExist = state.shop?.find(
            e => e.idShop === action.data?.idShop,
          )),
          (newCart = checkExist // truong hợp đã có sản phẩm đấy trong list
            ? state.shop?.filter(e => e.idShop != action.data.idShop)
            : // truong hợp đã có sản phẩm đấy không nằm trong list

              [...state.shop, {...action.data}]));

      // (newCart = checkExist
      //   ? // truong hợp đã có sản phẩm đấy trong list
      //     state.shop?.map(e => {
      //       if (e.idShop === action.data.idShop) {
      //         console.log('check1');
      //         return {
      //           ...state.shop.filter(
      //             item => item.idShop != action.data.idShop,
      //           ),
      //         };
      //       }
      //       console.log('check2');
      //       return e;
      //     })
      //   : // truong hợp đã có sản phẩm đấy không nằm trong list
      //     console.log('chec3k')),
      // [...state.shop, {...action.data}],

      return {
        ...state,
        shop: newCart,
      };
    case 'removeShop':
      console.log(action);
      return {};

    default:
      return state;
  }
}
