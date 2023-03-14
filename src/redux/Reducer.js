import {REGISTER_DATA, REGISTER_RANDOM_DATA, UPDATE_DATA} from './actionTypes';

const initialState = {
  usersData: [],
  randomData: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_DATA:
      return {
        ...state,
        usersData: [...state.usersData, {...action.data}],
      };
    case REGISTER_RANDOM_DATA:
      return {
        ...state,
        randomData: action.data,
      };
    case UPDATE_DATA: {
      console.log('RecievedId', action.userId, 'count', action.payload);
      let updatedUserDetails = state.randomData.map(user => {
        // if (user.id === action.userId) {
        //   // console.log('userIdMatch', action.userId, 'count', action.payload);
        //   return {
        //     ...user,
        //     count: action.payload,
        //   };
        // } else {
        //   // console.log('userIdMisMatch', user.id, 'count', user.count);
        //   return user;
        // }
        return {
          ...user,
          count: user.count + 1,
        };
      });

      return {
        ...state,
        randomData: updatedUserDetails,
      };
    }
    default:
      return state;
  }
};
