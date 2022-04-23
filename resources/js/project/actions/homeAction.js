import api from "../api";
import { homeConstants } from "../constants";
import store from "../store";

const actionLoad = () => {
    return {
        type: homeConstants.homeLoading
    };
};

export const fetch_homeData = () => {
    return dispatch => {
        dispatch(actionLoad());

        return api
            .fetch_homeData()
            .then(response => {
                dispatch({
                    type: homeConstants.fetch_homeData_success,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: homeConstants.fetch_homeData_fail,
                    payload: error
                });
            });
    };
};
export const infinitEventsFetch = () => {
    if (store.getState().HomeData.loading !== "Loading") {
        var offsetLength = store.getState().HomeData.homeData.length;
        return dispatch => {
            dispatch(actionLoad());

            return api
                .infinitFetchEvents({ offset: offsetLength })
                .then(response => {
                    console.log(response.data);
                    dispatch({
                        type: homeConstants.fetch_infinit_event_success,
                        payload: response.data
                    });
                })
                .catch(error => {
                    dispatch({
                        type: homeConstants.fetch_homeData_fail,
                        payload: error
                    });
                });
        };
    }
};
