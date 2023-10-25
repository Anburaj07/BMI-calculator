import axios from "axios";
import {
  FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REQUEST,
} from "./actionTypes";

const reqAction = () => {
  return { type: REQUEST };
};

const registerAction = (payload) => {
  return { type: REGISTER_SUCCESS, payload };
};

const loginAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
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
      console.log("err:", err);
      dispatch(failureAction());
    });
};

export const login = (obj) => (dispatch) => {
  dispatch(reqAction());
  return axios
    .get("http://localhost:8080/profile")
    .then((res) => {
      let users = res.data;
      console.log("users:", users);
      let userName = "";
      let temp = users.filter((el) => {
        if (el.email == obj.email) {
          userName = el.name;
          return true;
        } else {
          return false;
        }
      });
      console.log("temp:", temp);
      if (temp.length == 1) {
        console.log("temp:", temp);
        dispatch(loginAction(userName));
      } else {
        dispatch(failureAction());
      }
    })
    .catch((err) => {
      console.log("err:", err);
      dispatch(failureAction());
    });
};
