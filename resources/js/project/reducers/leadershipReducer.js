import { leadershipConstants } from "../constants";

const initialState = {
  leaderships: "",
  loading: "",
  leadshipError: "",
};

export function leadershipReducer(state = initialState, action) {
  switch (action.type) {
    case leadershipConstants.fetch_leadership_success:
      return {
        ...state,
        loading: "",
        leaderships: action.payload,
      };
    case leadershipConstants.fetch_leadership_fail:
      return {
        ...state,
        leadshipError: action.payload,
      };
    case leadershipConstants.leadershipLoading:
      return {
        ...state,
        loading: "Loading",
      };

    default:
      return state;
  }
}
