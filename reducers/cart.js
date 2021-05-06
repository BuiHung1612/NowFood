// const initState = {
//   idShop: '',
//   id_Product: [],
//   dish_type_id: '',
//   service_type: '',
//   price: '',
//   img: '',
//   title: '',
// };
const initState = [
  {
    idShop: '',
    id_Product: '',
    dish_type_id: '',
    service_type: '',
    price: '',
    img: '',
    title: '',
  },
];
export default function cartReducer(state = initState, action) {
  switch (action.type) {
    case 'addCart':
      console.log(state);
      return [
        ...state,
        {
          idShop: action.data.idShop,
          id_Product: action.data.id_Product,
          dish_type_id: action.data.dish_type_id,
          service_type: action.data.service_type,
          price: action.data.price,
          img: action.data.img,
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
