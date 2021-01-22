import { knowledgeConstants } from "../constants";

const initialState = {
    knowledgeData: "",
    loading: "",
    knowledgeError: ""
};

export function knowledgeReducer(state = initialState, action) {
    switch (action.type) {
        case knowledgeConstants.fetch_knowledge_success:
            return {
                ...state,
                loading: "",
                knowledgeData: action.payload
            };
        case knowledgeConstants.fetch_infinit_knowledge_success:
            return {
                ...state,
                loading: "",
                knowledgeData: [...state.knowledgeData, ...action.payload]
            };
        case knowledgeConstants.fetch_knowledge_fail:
            return {
                ...state,
                knowledgeError: action.payload
            };
        case knowledgeConstants.knowledgeLoading:
            return {
                ...state,
                loading: "Loading"
            };

        default:
            return state;
    }
}
