import {
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_IN_PROGRESS,
  CHANGE_PASSWORD_ERROR,
  AUTHENTICATED_CLEARDOWN
} from '../actions/password/passwordTypes';

const INIT = {
  error: '',
  timestamp: '',
  loading: false
}

export default function(state = {}, action) {
  switch(action.type) {
    case AUTHENTICATED_CLEARDOWN:
      return { ...state, ...INIT };
    case CHANGE_PASSWORD:
      return { ...state, ...INIT };
    case CHANGE_PASSWORD_IN_PROGRESS:
      return { ...state, ...INIT, loading: true };
    case CHANGE_PASSWORD_ERROR:
      return { ...state, ...INIT, error: action.error, timestamp: action.timestamp };
    default:
      return state;
  }
}
