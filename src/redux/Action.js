import {REGISTER_DATA, REGISTER_RANDOM_DATA, UPDATE_DATA} from './actionTypes';

export const registerUserData = data => ({
  type: REGISTER_DATA,
  data,
});
export const registerRandomData = data => ({
  type: REGISTER_RANDOM_DATA,
  data,
});
export const updateData = (userId, newData) => ({
  type: UPDATE_DATA,
  payload: newData,
  userId: userId,
});
