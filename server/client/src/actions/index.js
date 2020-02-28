import axios from "axios";
import * as actionTypes from "./actionTypes";

export const fetchUser = () => async dispatch => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: actionTypes.FETCH_USER, payload: response.data });
};
