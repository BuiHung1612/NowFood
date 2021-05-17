const initState = {
  idScreen: '',
};
export default function Screen(state = initState, action) {
  switch (action.type) {
    case 'Screen':
      console.log('screen:', state.idScreen);
      return {
        ...state,
        idScreen: action.data,
      };

    default:
      return state;
  }
}
