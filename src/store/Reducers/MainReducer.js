import update from 'react-addons-update';
import {
  SET_FIRST_TIME_LOGIN,
  SET_SPLASH_VISIBLE,
  USER
} from '../Actions/ActionTypes';

const initialState = {
  isLoggedIn: false,
  isFirstLogin: false,
  user: null,
  splashVisible: true,
  forms: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_TIME_LOGIN:
      return (state = update(state, {
        isFirstLogin: { $set: action.isFirst },
      }));
    case SET_SPLASH_VISIBLE:
      return (state = update(state, {
        splashVisible: { $set: action.splashVisible },
      }));
    case USER:
      return (state = update(state, {
        user: { $set: action.user },
      }));
    default:
      return state;
  }
};

export default reducer;
