import axios from "axios";

export const fetchData = () => async (dispatch) => {
  try {
    let { data } = await axios.get("https://pokeapi.co/api/v2");
    dispatch({ type: "FETCH_DATA", payload: data });
  } catch (error) {}
};

export const addToList = (url) => async (dispatch) => {
  try {
    let { data } = await axios.get(url);
    dispatch({ type: "ADD_TO_LIST", payload: data?.results });
  } catch (error) {}
};
