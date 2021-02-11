const listInit = {
    rawList: [],
  };

const speedInit = {
  speedInit: 10,
}

const listReducer = (state = listInit, action) => {
    switch (action.type) {
      case "SET_LIST":
        return {
          ...state,
          listState: action.payload,
        };
      default:
        return state;
    }
  };

  const sortSpeedReducer = (state = speedInit, action) => {
    switch (action.type) {
      case "SET_SORT_SPEED":
        return {
          ...state,
          sortSpeed: action.payload,
        };
      default:
        return state;
    }
  };


  export default listReducer;