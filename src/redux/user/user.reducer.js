import { userTypes } from "./user.types";

const {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
} = userTypes;

const initialState = {
  currentUser: null,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
