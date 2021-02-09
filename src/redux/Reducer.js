const listInit = {
    rawList: [],
  };

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

  export default listReducer;