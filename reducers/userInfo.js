const initState = {
  userInfo: null,
  token: null,
};
export default function userInfo(state = initState, action) {
  switch (action.type) {
    case 'Login':
      console.log('userInfo:', action.data);
      return {
        userInfo: action.data.userInfo,
        token: action.data.token,
      };

    default:
      return state;
  }
}
