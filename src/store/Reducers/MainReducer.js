import update from 'react-addons-update';
import {
  SET_FIRST_TIME_LOGIN,
  SET_SPLASH_VISIBLE,
  USER,
  SET_TASKS, SET_CHALLENGES,
  SET_SORTED_USER_LIST
} from '../Actions/ActionTypes';

const initialState = {
  isLoggedIn: false,
  isFirstLogin: false,
  user: null,
  splashVisible: true,
  forms: {},
  tasks: [],
  challenges: [],
  sortedUserList : []
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
    case SET_TASKS:
      return (state = update(state, {
        tasks: { $set: action.tasks },
      }));
    case SET_CHALLENGES:
      return (state = update(state, {
        challenges: { $set: action.challenges },
      }));
    case SET_SORTED_USER_LIST:
      return (state = update(state, {
        sortedUserList: { $set: action.sortedUserList },
      }));
    default:
      return state;
  }
};

export default reducer;
