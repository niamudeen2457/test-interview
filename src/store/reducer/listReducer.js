const listReducer = (state = {}, action) => {
  console.log(action?.payload, "actions");
  switch (action.type) {
    case "FETCH_DATA":
      return action.payload;
    case "ADD_TO_LIST":
      let tempObj = { ...state };
      let arr = action.payload;
      arr.forEach((el, i) => {
        tempObj["key" + Math.random()] = el.url;
      });
      return tempObj;
    default:
      return state;
  }
};

export default listReducer;
