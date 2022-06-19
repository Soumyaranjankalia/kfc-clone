import { GET_DATA } from "./action";

const initialstate = {
  homedata: [],
  loading: true,
};

export const homeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        homedata: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};
