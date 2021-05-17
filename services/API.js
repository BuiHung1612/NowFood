import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://gappapi.deliverynow.vn',
  //   timeout: 100000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-foody-api-version': '1',
    'x-foody-app-type': '1004',
    'x-foody-client-id': '',
    'x-foody-client-language': 'vi',
    'x-foody-client-type': '1',
    'x-foody-client-version': '3.0.0',
  },
});
export const getNearMe = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      78372,
      117187,
      104014,
      93466,
      15957,
      15794,
      60927,
      107319,
      125388,
      4872,
      5654,
      36544,
      32048,
      100059,
    ],
  });

export const getSelling = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      17486,
      107613,
      29813,
      15400,
      78991,
      19361,
      7569,
      100871,
      7040,
      30603,
      90329,
      17553,
      39529,
      44387,
    ],
  });
export const getRate = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      101992,
      2324,
      39529,
      44387,
      78372,
      40952,
      40832,
      2319,
      16478,
      23674,
      24756,
      113632,
      63877,
      15227,
    ],
  });

export const getShipNow = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      101992,
      2324,
      39529,
      40952,
      40832,
      16478,
      4856,
      23674,
      24756,
      63877,
      15227,
      7172,
      97634,
      87097,
      17238,
    ],
  });

export const getShop = delivery_id =>
  instance.get(
    `/api/dish/get_delivery_dishes?id_type=2&request_id=${delivery_id}`,
  );
export const getCart = delivery_id =>
  instance.get(
    `/api/dish/get_delivery_dishes?id_type=2&request_id=${delivery_id}`,
  );
export const getCollection = params =>
  instance.post('https://gappapi.deliverynow.vn/api/collection/get_infos', {
    ids: [
      12156,
      13374,
      13843,
      13863,
      13853,
      13850,
      13849,
      13736,
      11703,
      10888,
      5736,
      9842,
      9788,
      12440,
      12441,
    ],
  });
export const getListCollection = params =>
  instance.post('https://gappapi.deliverynow.vn/api/collection/get_infos', {
    ids: [
      12156,
      13374,
      13843,
      13863,
      13853,
      13850,
      13849,
      13736,
      11703,
      10888,
      5736,
      9842,
      9788,
      12440,
      12441,
    ],
  });
