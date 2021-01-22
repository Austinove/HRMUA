import api from "../api";
import { knowledgeConstants, knowledgeSubscription } from "../constants";
import store from "../store";

const actionLoad = () => {
    return {
        type: knowledgeConstants.knowledgeLoading
    };
};
const submiting = () => {
    return {
        type: knowledgeSubscription.submiting
    };
};

export const fetch_knowledge = () => {
    return dispatch => {
        dispatch(actionLoad());

        return api
            .fetch_knowledge()
            .then(response => {
                dispatch({
                    type: knowledgeConstants.fetch_knowledge_success,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: knowledgeConstants.fetch_knowledge_fail,
                    payload: error
                });
            });
    };
};
export const infinitKnowledgeFetch = () => {
    if (store.getState().Knowledge.loading !== "Loading") {
        var offsetLength = store.getState().Knowledge.knowledgeData.length;
        return dispatch => {
            dispatch(actionLoad());

            return api
                .infinitFetchKnowledge({ offset: offsetLength })
                .then(response => {
                    console.log(response.data);
                    dispatch({
                        type:
                            knowledgeConstants.fetch_infinit_knowledge_success,
                        payload: response.data
                    });
                })
                .catch(error => {
                    dispatch({
                        type: knowledgeConstants.fetch_knowledge_fail,
                        payload: error
                    });
                });
        };
    }
};

export const knowledge_subscribe = userData => {
    return dispatch => {
        dispatch(submiting());

        return api
            .knowledgeSubscribe()
            .then(response => {
                dispatch({
                    type: knowledgeSubscription.submit_subscription_success,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: knowledgeSubscription.submit_subscription_fail,
                    payload: error
                });
            });
    };
};
