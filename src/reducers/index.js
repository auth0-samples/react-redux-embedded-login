import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './authReducer';
import forgot from './forgotPasswordReducer';
import home from './homeReducer';
import password from './changePasswordReducer';

const rootReducer = combineReducers({
  form,
  auth,
  forgot,
  home,
  password
});

export default rootReducer;
