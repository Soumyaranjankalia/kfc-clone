import axios from "axios";
export const GET_DATA = "GET_DATA";

export const getData = (payload) => ({
  type: GET_DATA,
  payload,
});

export const fetchData = () => (dispatch) => {
  axios
    .get("http://localhost:9002/homedata")
    .then((res) => {
      console.log(res.data);
      dispatch(getData(res.data));
    })
    .catch((err) => {
      console.log(err.data);
    });
};
