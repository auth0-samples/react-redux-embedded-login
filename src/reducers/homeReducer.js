import {
  CHANGE_EMAIL_SUCCESS,
  CHANGE_PASSWORD_SUCCESS,
  AUTHENTICATED_CLEARDOWN
} from '../actions/home/homeTypes';

const INIT = {
  emailMsg: '',
  passwordMsg: ''
}

export default function(state = {}, action) {
  switch(action.type) {
    case AUTHENTICATED_CLEARDOWN:
      return { ...state, ...INIT };
    case CHANGE_EMAIL_SUCCESS:
      return { ...state, ...INIT, emailMsg: action.message };
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state, ...INIT, passwordMsg: action.message };
    default:
      return state;
  }
}
