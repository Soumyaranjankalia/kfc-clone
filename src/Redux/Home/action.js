import axios from "axios";
export const GET_DATA = "GET_DATA";

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchData = () => (dispatch) => {
  axios
    .get("https://evening-meadow-93654.herokuapp.com/homedata")
    .then((res) => {
      console.log(res.data);
      dispatch(getData(res.data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};
