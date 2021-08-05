import update from 'react-addons-update';
import {
  SET_FIRST_TIME_LOGIN,
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
    default:
      return state;
  }
};

export default reducer;
