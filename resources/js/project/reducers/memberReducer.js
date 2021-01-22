import { memberRegister } from "../constants";

const initialState = {
  regResponse: "",
  loading: "",
  registerError: "",
  selectMembers: "",
};

export function memberReducer(state = initialState, action) {
  switch (action.type) {
    case memberRegister.fetch_member_success:
      return {
        ...state,
        loading: "",
        regResponse: action.payload,
      };
    case memberRegister.fetch_member_fail:
      return {
        ...state,
        registerError: action.payload,
      };
    case memberRegister.registerLoading:
      return {
        ...state,
        loading: "Loading",
      };
    case memberRegister.selected_membership:
      return {
        ...state,
        selectMembers: action.payload,
      };

    default:
      return state;
  }
}
