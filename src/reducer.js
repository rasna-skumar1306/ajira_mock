import * as actionTypes from "./actions/actions";

const initialPageState = {
  currentPage: "/",
};

const page_reducer = (state = initialPageState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      return {
        currentPage: action.payload.currentPage,
      };
    default:
      return { ...state };
  }
};

export default page_reducer;
