import {
  SET_FIRST_TIME_LOGIN,
} from './ActionTypes';
import {getUserForms} from "../../api/api";
export const firstTimeLogin = (isFirst) => ({
  type: SET_FIRST_TIME_LOGIN,
  isFirst,
});

const fetchUserForms = (dispatch, getState) => {
  // Make an async HTTP request
  getUserForms().then(forms => {
    // Dispatch an action with the todos we received
    dispatch({ type: 'user/forms', payload: forms })
    // Check the updated store state after dispatching
    console.log('all user forms', forms)
    const allForms = getState().forms
    console.log('Number of forms after loading: ', allForms.length)

  })
}

