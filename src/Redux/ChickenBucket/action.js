import axios from "axios";
export const GET_CHICKEN_DATA = "GET_CHICKEN_DATA";

export const getChickenData = (payload) => ({
  type: GET_CHICKEN_DATA,
  payload,
});

export const fetchChickenData = () => (dispatch) => {
  axios
    .get("http://localhost:9002/chickendata")
    .then((res) => {
      console.log(res.data);
      dispatch(getChickenData(res.data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const ADD_CHICKEN_CART = "ADD_CHICKEN_CART";

export const addChickenCart = (payload) => ({
  type: ADD_CHICKEN_CART,
  payload,
});

export const addChickenToCart = (prop) => (dispatch) => {
  axios
    .post("http://localhost:9002/cart", prop)
    .then((res) => {
      console.log(res.data);
      dispatch(addChickenCart(res.data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const REMOVE_CHICKEN_CART = "ADD_CHICKEN_CART";

export const removeChickenCart = (payload) => ({
  type: REMOVE_CHICKEN_CART,
  payload,
});

export const removeChickenToCart = (prop) => (dispatch) => {
  axios
    .delete(`http://localhost:9002/cart/${prop._id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(removeChickenCart(res.data));
    })
    
    .catch((err) => {
      console.log(err.data);
    });
};

export const GET_CHICKEN_CART = "ADD_CHICKEN_CART";

export const getChickenCart = (payload) => ({
  type: GET_CHICKEN_CART,
  payload,
});

export const getChickenToCart = (payload) => (dispatch) => {
  axios
    .get("http://localhost:9002/cart")
    .then((res) => {
      console.log(res.data);
      dispatch(getChickenCart(res.data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};
