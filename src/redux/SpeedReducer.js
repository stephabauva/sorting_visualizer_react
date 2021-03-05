const speedInit = {
    niceSpeed: 30,
  }

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

export default sortSpeedReducer;