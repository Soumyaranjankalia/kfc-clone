import {  GET_CHICKEN_DATA, ADD_CHICKEN_CART, GET_CHICKEN_CART, REMOVE_CHICKEN_CART } from "./action";

const initialstate = {
  chickendata: [],
  cart:[],
  loading: true,
};

export const chickenReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_CHICKEN_DATA: {
      return {
        ...state,
        chickendata: action.payload,
        loading: false,
      };
    }

    case ADD_CHICKEN_CART:{
      return{
        ...state,
        cart:[...state.cart, action.payload],
        loading:false
      }
    }

    case REMOVE_CHICKEN_CART:{
      return{
        ...state,
        cart:[...state.cart, action.payload],
        loading:false
      }
    }

    case GET_CHICKEN_CART:{
      return{
        ...state,
        cart: [...action.payload],
        loading:false
      }
    }

    default:
      return state;
  }
};