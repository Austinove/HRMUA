import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PageNavbar from "../components/Navbars";
import PageFooter from "../components/Footers";
import HomePage from "./home";
import AllEvents from "./home/events";
import AboutUs from "./about";
import Leadership from "./about/Leadership";
import Membership from "./membership";
import News from "./news";
import Knowledge from "./knowledge";
import Application from "./application";
import SinglePage from "./news/singlePage";
import SingleKnowledge from "./knowledge/details";
import ScrollToTop from "./scrollTop";

const App = () => {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("Main");
        return function cleanup() {
            document.body.classList.remove("index");
        };
    });
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <PageNavbar />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={props => <HomePage {...props} />}
                    />
                    <Route
                        path="/about"
                        exact
                        render={props => <AboutUs {...props} />}
                    />
                    <Route
                        path="/aleadership"
                        exact
                        render={props => <Leadership {...props} />}
                    />
                    <Route
                        path="/membership"
                        exact
                        render={props => <Membership {...props} />}
                    />
                    <Route
                        path="/news"
                        exact
                        render={props => <News {...props} />}
                    />
                    <Route
                        path="/knowledge"
                        exact
                        render={props => <Knowledge {...props} />}
                    />
                    <Route
                        path="/application"
                        exact
                        render={props => <Application {...props} />}
                    />
                    <Route
                        path="/single"
                        exact
                        render={props => <SinglePage {...props} />}
                    />
                    <Route
                        path="/news/:id"
                        exact
                        render={props => <SinglePage {...props} />}
                    />
                    <Route
                        path="/knowledge/:id"
                        exact
                        render={props => <SingleKnowledge {...props} />}
                    />
                    <Route
                        path="/allevents"
                        exact
                        render={props => <AllEvents {...props} />}
                    />
                    <Redirect to="/" />
                </Switch>
                <PageFooter />
            </BrowserRouter>
        </>
    );
};

export default App;
