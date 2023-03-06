import {REGISTER_DATA} from './actionTypes';

const initialState = {
  usersData: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_DATA:
      return {
        ...state,
        usersData: [...state.usersData, {...action.data}],
      };
    default:
      return state;
  }
};
