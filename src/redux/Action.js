import {
  REGISTER_DATA,
  REGISTER_RANDOM_DATA,
  UPDATE_DATA,
  CHECK_INTERNET,
} from './actionTypes';
var interval = '';
export const registerUserData = data => ({
  type: REGISTER_DATA,
  data,
});
export const registerRandomData = data => ({
  type: REGISTER_RANDOM_DATA,
  data,
});
export const updateData = clear => {
  return dispatch => {
    if (clear) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        dispatch({
          type: UPDATE_DATA,
          // payload: newData,
          // userId: userId,
        });
      }, 2000);
    }
  };
};
export const checkInternet = data => ({
  type: CHECK_INTERNET,
  data,
});
