import api from "../api";
import { memberRegister } from "../constants";

const actionLoad = () => {
  return {
    type: memberRegister.registerLoading,
  };
};

export const register_member = (member_number) => {
  return (dispatch) => {
    dispatch(actionLoad());

    return api
      .register_member(member_data)
      .then((response) => {
        dispatch({
          type: memberRegister.register_member_success,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: memberRegister.register_member_fail,
          payload: error,
        });
      });
  };
};

export const selected_member = (selectedValue) => {
  return {
    type: memberRegister.selected_membership,
    payload: selectedValue,
  };
};
