import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { homeData } from "./homeReducer";
import { knowledgeReducer } from "./knowledgeReducer";
import { leadershipReducer } from "./leadershipReducer";
import { memberReducer } from "./memberReducer";
import { newsReducer } from "./newsReducer";
import { studentReducer } from "./studentReducer";
import { proffesionalReducer } from "./proffesionalRedicer";
import { retiredReducer } from "./retiredReducer";
import { coporateReducer } from "./coporateReducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    HomeData: homeData,
    Knowledge: knowledgeReducer,
    Leadership: leadershipReducer,
    Member: memberReducer,
    News: newsReducer,
    student: studentReducer,
    proffesional: proffesionalReducer,
    retired: retiredReducer,
    coporate: coporateReducer,
  });
