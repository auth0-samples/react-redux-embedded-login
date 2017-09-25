import {
  // CHANGE_EMAIL_SUCCESS,
  // CHANGE_PASSWORD_SUCCESS,
  AUTHENTICATED_CLEARDOWN
} from './homeTypes';

export function cleardown() {
  return {
    type: AUTHENTICATED_CLEARDOWN
  };
}
