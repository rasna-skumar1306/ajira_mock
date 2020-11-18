import * as actionTypes from "./actions";

export const setCurrentPage = (page) => {
  return {
    type: actionTypes.SET_PAGE,
    payload: { currentPage: page },
  };
};
