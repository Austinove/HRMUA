import { retiredForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function retiredReducer(state = initialState, action) {
  switch (action.type) {
    case retiredForms.submiting:
      return {
        ...state,
        loading: "submiting",
      };
    case retiredForms.submit_retired_fail:
      return {
        ...state,
        loading: "",
        userData: [],
        submitError: "error occuired",
      };
    case retiredForms.submit_retired_success:
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
