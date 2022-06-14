import { GET_USERS, SINGLE_USER, USERS_ERROR } from "../types";
// import store from '../store';
import axios from "axios";
export const getUsers = () => async dispatch => {
  
  try {
    setTimeout(async()=>{
      const res = await axios.get(`https://reqres.in/api/users`);

      dispatch({
        type: GET_USERS,
        payload: res.data.data
      });
      
    })
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    })
  }
  
};

export const singleuser = (id) => async dispatch => {
  
  try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      dispatch({
        type: SINGLE_USER,
        payload:res
      });
   
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};
