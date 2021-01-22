import axios from "axios";
import { apiUrl } from "../constants";

const apiInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        "content-type": "application/json"
    }
});

export default {
    //knowledge api
    fetch_knowledge: () =>
        apiInstance({
            method: "GET",
            url: "/allknowledgehub"
        }),
    //fetching knowlefge infinit
    infinitFetchKnowledge: ofsetLength =>
        apiInstance({
            method: "POST",
            url: "/allknowledgehub/infinite",
            data: ofsetLength
        }),
    //fetching news infinit
    infinitFetchNews: ofsetLength =>
        apiInstance({
            method: "POST",
            url: "/news/infinite",
            data: ofsetLength
        }),
    infinitFetchEvents: ofsetLength =>
        apiInstance({
            method: "POST",
            url: "/events/infinite",
            data: ofsetLength
        }),
    //homepage api
    fetch_homeData: () =>
        apiInstance({
            method: "GET",
            url: "/allhome"
        }),
    //leadership api
    fetch_leadership: () =>
        apiInstance({
            method: "GET",
            url: "/leadership"
        }),
    //register Member
    coporate_member: user_data =>
        apiInstance({
            method: "POST",
            url: "/corporate",
            data: user_data
        }),
    //register Retired Member
    register_member: user_data =>
        apiInstance({
            method: "POST",
            url: "/retired",
            data: user_data
        }),
    //register Student Member
    student_member: user_data =>
        apiInstance({
            method: "POST",
            url: "/student",
            data: user_data,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }),
    //profession Member
    profession_member: user_data =>
        apiInstance({
            method: "POST",
            url: "/professional",
            data: user_data
        }),
    //Fetch News
    fetch_news: () =>
        apiInstance({
            method: "GET",
            url: "/allnewsletter"
        }),
    //Filter News
    filter_news: filterVariable =>
        apiInstance({
            method: "POST",
            url: "/news",
            data: filterVariable
        }),
    //Knowledge Subscription
    knowledgeSubscribe: subData =>
        apiInstance({
            method: "POST",
            url: "/knowledgeSub",
            data: subData
        })
};
