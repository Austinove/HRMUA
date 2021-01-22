import { coporateForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function coporateReducer(state = initialState, action) {
  switch (action.type) {
    case coporateForms.submiting:
      return {
        ...state,
        loading: "submiting",
      };
    case coporateForms.submit_coporate_fail:
      return {
        ...state,
        loading: "",
        userData: [],
        submitError: "error occuired",
      };
    case coporateForms.submit_coporate_success:
      return {
        ...state,
        loading: "",
        submitError: "success",
        userData: action.payload,
      };

    default:
      return state;
  }
}
