const initState = [
  //   {
  //     idShop: '',
  //     id_Product: '',
  //     dish_type_id: '',
  //     service_type: '',
  //     price: '',
  //     img: '',
  //     title: '',
  //   },
];
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case 'addShop':
      console.log('ADDSHOP', state);
      return [
        ...state,
        {
          idShop: action.data.idShop,
          idScreen: action.data.idScreen,
          img: action.data.img,
          promotion: action.data.promotion,
          rating: action.data.rating,
          title: action.data.title,
        },
      ];
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
