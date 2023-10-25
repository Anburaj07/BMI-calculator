import axios from "axios";
import { FAILURE, REGISTER_SUCCESS, REQUEST } from "./actionTypes";

const reqAction = () => {
  return { type: REQUEST };
};

const registerAction = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};

const failureAction = () => {
  return { type: FAILURE };
};

export const register = (user) => (dispatch) => {
  dispatch(reqAction());
  return axios
    .post("http://localhost:8080/profile", user)
    .then((res) => {
      console.log("res:", res.data.name);
      dispatch(registerAction(res.data));
    })
    .catch((err) => {
      console.log('err:', err)
      dispatch(failureAction());
    });
};
