import { proffessionalForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function proffesionalReducer(state = initialState, action) {
  switch (action.type) {
    case proffessionalForms.submiting:
      return {
        ...state,
        loading: "submiting",
      };
    case proffessionalForms.submit_proffessional_fail:
      return {
        ...state,
        loading: "",
        userData: [],
        submitError: "error occuired",
      };
    case proffessionalForms.submit_proffessional_success:
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
