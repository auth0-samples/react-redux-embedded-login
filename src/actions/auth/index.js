import {
  AUTH_ERROR,
  AUTH_IN_PROGRESS,
  AUTH_USER,
  CLEARDOWN,
  UNAUTH_USER,
} from "./authTypes";

import Auth from "./Auth";

const auth = new Auth();

export function signinUser({ email, password }, callback) {

  return function (dispatch) {

    dispatch({ type: AUTH_IN_PROGRESS });

    auth.signin(email, password, callback)
      .then(() => {
        dispatch({ type: AUTH_USER });
        return callback();
      })
      .catch((error) => {
        const errorMsg = error.description || error.message || 'Unspecified error';
        return dispatch(authError(errorMsg));
      })
  }
}

export function authError(error) {
  const timestamp = Date.now();
  return {
    type: AUTH_ERROR,
    error,
    timestamp
  };
}

export function signoutUser() {
  auth.signout();
  return { type: UNAUTH_USER };
}

export function cleardown() {
  return {
    type: CLEARDOWN
  };
}

export function handleAuthentication(callback) {
  return function(dispatch) {
    auth
      .handleAuthentication()
      .then(() => {
        return dispatch({ type: AUTH_USER });
      })
      .catch(err => {
        return dispatch({ type: UNAUTH_USER });
      });
  };
}
