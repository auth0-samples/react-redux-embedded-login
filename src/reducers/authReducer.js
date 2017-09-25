import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_IN_PROGRESS,
  AUTH_ERROR,
  FORGOT_SUCCESS,
  CLEARDOWN
} from '../actions/auth/authTypes';

const INIT = {
  forgotMsg: '',
  error: '',
  timestamp: '',
  loading: false,
  authenticated: false
}

export default function(state = {}, action) {
  switch(action.type) {
    case CLEARDOWN:
      return { ...state, ...INIT };
    case AUTH_USER:
      return { ...state, ...INIT, authenticated: true };
    case AUTH_IN_PROGRESS:
      return { ...state, ...INIT, loading:true };
    case UNAUTH_USER:
      return { ...state, ...INIT };
    case FORGOT_SUCCESS:
      return { ...state, ...INIT, forgotMsg: action.message };
    case AUTH_ERROR:
      return { ...state, ...INIT, error: action.error, timestamp: action.timestamp };
    default:
      return state;
  }
}
