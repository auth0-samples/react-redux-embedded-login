import axios from "axios";

import params from './../../auth0-params.json';

import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_IN_PROGRESS,
  FORGOT_PASSWORD_ERROR,
  CLEARDOWN
} from './forgotTypes';
import { FORGOT_SUCCESS } from '../auth/authTypes';


export function forgotPassword({ email }, callback) {

  return function(dispatch) {

    dispatch({ type: FORGOT_PASSWORD_IN_PROGRESS });

    console.log(`sending password reset for: ${email}`);

    const values = {
      client_id: params.clientId,
      email: email,
      connection: params.realm
    };

    axios
      .post(`https://${params.domain}/dbconnections/change_password`, values)
      .then(() => {
        setTimeout(() => {
          dispatch({
            type: FORGOT_SUCCESS,
            message: "Password reset mail sent. Please check your inbox"
          }, 1000);
        })
        dispatch({
          type: FORGOT_PASSWORD
        });
        return callback();
      })
      .catch(error => {
        return dispatch(forgotPasswordError(error.message || 'Error occurred'));
      });

    }

}

export function cleardown() {
  return {
    type: CLEARDOWN
  };
}


export function forgotPasswordError(error) {
  const timestamp = Date.now();
  return {
    type: FORGOT_PASSWORD_ERROR,
    error,
    timestamp
  };
}
