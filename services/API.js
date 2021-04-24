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
      85826,
      99761,
      109680,
      90936,
      110480,
      95780,
      36142,
      66916,
      76889,
      74422,
      85218,
      60927,
      91290,
      108349,
    ],
  });

export const getSelling = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      15400,
      6111,
      94746,
      107613,
      17486,
      25664,
      7172,
      19361,
      113632,
      16374,
      7040,
      3449,
      89274,
      7569,
      113738,
    ],
  });
export const getRate = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      96371,
      78659,
      100242,
      18620,
      11305,
      40193,
      15227,
      76986,
      7018,
      60403,
      85360,
      58378,
      91290,
      95628,
    ],
  });

export const getShipNow = params =>
  instance.post('/api/delivery/get_browsing_infos', {
    delivery_ids: [
      96371,
      15227,
      76986,
      10338,
      85360,
      91290,
      95628,
      102229,
      63877,
      25663,
      84373,
      13006,
      94890,
      17238,
    ],
  });
