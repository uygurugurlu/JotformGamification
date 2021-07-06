import update from 'react-addons-update';
import {
  FIRST_TIME_LOGIN,
  SET_LANGUAGE,
  GET_USER_AGENT,
  TRIGGER_SAVINGS_PAGE,
  GET_USER_AVATAR_SOURCE,
  GET_CAPTURED_IMAGE_URI,

} from '../Actions/ActionTypes';

const initialState = {
  isLoggedIn: false,

  auth_token: '',

  is_the_login_first_time: null,

  language: {
    languageTag: 'tr',
    isRTL: false,
  },

  user_agent: '',

  captured_image_uri: '',

  savings_page_refresh_trigger: 0,

  userAvatarSource: '',
  userAvatarB64: '',

  selected_to_delete_count: 0,

  delete_list: [],

  detected_face_count: 0,

  user_data: [],

  face_sharing: false,

  in_app: false,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_TIME_LOGIN:
      return (state = update(state, {
        is_the_login_first_time: { $set: action.is_first },
      }));

    case SET_LANGUAGE:
      return (state = update(state, {
        language: { $set: action.language },
      }));


    case GET_USER_AGENT:
      return (state = update(state, {
        user_agent: { $set: action.agent },
      }));

    case TRIGGER_SAVINGS_PAGE:
      return (state = update(state, {
        savings_page_refresh_trigger: {
          $set: state.savings_page_refresh_trigger + 1,
        },
      }));

    case GET_USER_AVATAR_SOURCE:
      return (state = update(state, {
        userAvatarSource: { $set: action.source },
        userAvatarB64: { $set: action.base64_data },
      }));

    case GET_CAPTURED_IMAGE_URI:
      return (state = update(state, {
        captured_image_uri: { $set: action.image_uri },
      }));

    default:
      return state;
  }
};

export default reducer;
