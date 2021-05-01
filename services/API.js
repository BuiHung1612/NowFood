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
      29617,
      25939,
      15794,
      60927,
      82785,
      93466,
      78372,
      14695,
      60395,
      36544,
      123898,
      4211,
      3448,
      125388,
    ],
  });

export const getSelling = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      113632,
      33483,
      94746,
      25664,
      107613,
      16374,
      15400,
      1588,
      7172,
      17486,
      113738,
      19361,
      29813,
      7569,
    ],
  });
export const getRate = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      96386,
      29617,
      100242,
      82324,
      58031,
      76986,
      92094,
      4096,
      58378,
      82774,
      20118,
      113632,
      100898,
      102229,
    ],
  });

export const getShipNow = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      96386,
      76986,
      102229,
      33483,
      85360,
      25664,
      95780,
      96541,
      91290,
      94890,
      95628,
      113803,
      107965,
      4045,
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
