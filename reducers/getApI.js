import {getCollection, getNearMe} from '../services/API';

const initState = {
  Collection: [],
  NearMe: [],
};

export const CallCollection = params => async dispatch => {
  const result = await getCollection(params);
  dispatch({type: 'getCollection', data: result?.data?.reply.collections});
};
export const callNearme = params => async dispatch => {
  const result = await getNearMe(params);
  dispatch({type: 'getNearMe', data: result?.data?.reply.delivery_infos});
};
export default function getAPI(state = initState, action) {
  switch (action.type) {
    case 'getCollection':
      console.log('Collections', action.data);
      return {
        ...state,
        Collection: action.data,
      };
    case 'getNearMe':
      console.log('NearMe', action.data);
      return {
        ...state,
        NearMe: action.data,
      };

    default:
      return state;
  }
}
