import api from "../api";
import { leadershipConstants } from "../constants";

const actionLoad = () => {
  return {
    type: leadershipConstants.leadershipLoading,
  };
};

export const fetch_leadership = () => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .fetch_leadership()
      .then((response) => {
        console.log(response);
        dispatch({
          type: leadershipConstants.fetch_leadership_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: leadershipConstants.fetch_leadership_fail,
          payload: error,
        });
      });
  };
};
