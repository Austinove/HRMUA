// import { api } from "../api";
import { coporateForms } from "../constants";

const actionLoad = () => {
    return {
        type: coporateForms.submiting
    };
};

export const submit_coporate = userData => {
    return dispatch => {
        dispatch(actionLoad());

        return api
            .coporate_member(userData)
            .then(response => {
                dispatch({
                    type: coporateForms.submit_coporate_success,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: coporateForms.submit_coporate_fail,
                    payload: error
                });
            });
    };
};
