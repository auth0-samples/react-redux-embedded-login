import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_IN_PROGRESS,
  FORGOT_PASSWORD_ERROR,
  CLEARDOWN
} from '../actions/forgot/forgotTypes';

const INIT = {
  error: '',
  timestamp: '',
  authenticated: false,
  loading: false
}

export default function(state = {}, action) {
  switch(action.type) {
    case CLEARDOWN:
      return { ...state, ...INIT };
    case FORGOT_PASSWORD:
      return { ...state, ...INIT };
    case FORGOT_PASSWORD_IN_PROGRESS:
      return { ...state, ...INIT, loading: true };
    case FORGOT_PASSWORD_ERROR:
      return { ...state, ...INIT, error: action.error, timestamp: action.timestamp };
    default:
      return state;
  }
}
