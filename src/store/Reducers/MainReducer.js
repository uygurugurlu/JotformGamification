import update from 'react-addons-update';
import {
  SET_FIRST_TIME_LOGIN,
  SET_LOGGED_IN,
} from '../Actions/ActionTypes';

const initialState = {
  isLoggedIn: false,
  isFirstLogin: false,
  user_agent: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_TIME_LOGIN:
      return (state = update(state, {
        isFirstLogin: { $set: action.isFirst },
      }));
    case SET_LOGGED_IN:
      return (state = update(state, {
        isLoggedIn: { $set: action.isLoggedIn },
      }));
    default:
      return state;
  }
};

export default reducer;
