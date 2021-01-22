import api from "../api";
import { newsConstants } from "../constants";
import store from "../store";

const actionLoad = () => {
    return {
        type: newsConstants.newsLoading
    };
};

export const fetch_news = () => {
    return dispatch => {
        dispatch(actionLoad());

        return api
            .fetch_news()
            .then(response => {
                dispatch({
                    type: newsConstants.fetch_news_success,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: newsConstants.fetch_news_fail,
                    payload: error
                });
            });
    };
};

export const filter_news = filterVariable => {
    return dispatch => {
        dispatch(actionLoad());

        return api
            .filter_news(filterVariable)
            .then(response => {
                console.log(response);
                dispatch({
                    type: newsConstants.filter_news_success,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: newsConstants.filter_news_fail,
                    payload: error
                });
            });
    };
};

export const infinitNewsFetch = () => {
    if (store.getState().News.loading !== "Loading") {
        var offsetLength = store.getState().News.newsData.length;
        return dispatch => {
            dispatch(actionLoad());

            return api
                .infinitFetchNews({ offset: offsetLength })
                .then(response => {
                    console.log(response.data);
                    dispatch({
                        type: newsConstants.fetch_infinit_news_success,
                        payload: response.data
                    });
                })
                .catch(error => {
                    dispatch({
                        type: newsConstants.fetch_news_fail,
                        payload: error
                    });
                });
        };
    }
};
