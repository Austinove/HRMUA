import { studentsForms } from "../constants";

const initialState = {
  userData: [],
  loading: "",
  submitError: "",
};

export function studentReducer(state = initialState, action) {
  switch (action.type) {
    case studentsForms.submiting:
      return {
        ...state,
        loading: "submiting",
      };
    case studentsForms.submit_student_fail:
      return {
        ...state,
        loading: "",
        userData: [],
        submitError: "error occuired",
      };
    case studentsForms.submit_student_success:
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
