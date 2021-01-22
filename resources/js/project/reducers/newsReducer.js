import { newsConstants } from "../constants";

const initialState = {
    newsData: [],
    loading: "",
    newsError: ""
};

export function newsReducer(state = initialState, action) {
    switch (action.type) {
        case newsConstants.fetch_news_success:
            return {
                ...state,
                loading: "",
                newsData: action.payload
            };
        case newsConstants.fetch_infinit_news_success:
            return {
                ...state,
                loading: "",
                newsData: [...state.newsData, ...action.payload]
            };
        case newsConstants.fetch_news_fail:
            return {
                ...state,
                newsError: action.payload
            };
        case newsConstants.newsLoading:
            return {
                ...state,
                loading: "Loading"
            };
        case newsConstants.filter_news_success:
            return {
                ...state,
                loading: "",
                newsData: action.payload
            };
        case newsConstants.filter_news_fail:
            return {
                ...state,
                newsError: action.payload
            };

        default:
            return state;
    }
}
