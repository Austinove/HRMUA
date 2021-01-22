import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from "reactstrap";
import { connect } from "react-redux";
import LinesEllipsis from "react-lines-ellipsis";
import knowledge from "../../assets/img/logo/knowledge.png";
import target from "../../assets/img/logo/target.png";
import change from "../../assets/img/logo/change-2.png";
import SimpleSlider from "./carousel";
import EventTimer from "./timer";
import PageHeader from "../../components/Headers";
import CardTitle from "reactstrap/lib/CardTitle";
import CardBody from "reactstrap/lib/CardBody";
import Card from "reactstrap/lib/Card";
import { fetch_homeData } from "../../actions/homeAction";
import { fetch_news } from "../../actions/newsAction";
import { fetch_knowledge } from "../../actions/knowledgeAction";

function HomePage({
    fetch_homeData,
    homeData,
    loading,
    homeError,
    news,
    fetch_news,
    fetch_knowledge
}) {
    var nextEvent;
    var requiredEvent;
    var noEvent = false;
    var noNext = false;
    var i = 0;
    if (homeData.currentEvents && homeData.currentEvents.length > 0) {
        const val = homeData.currentEvents
            ? homeData.currentEvents.forEach(event => {
                  if (i == 0) {
                      requiredEvent = event;
                  }
                  if (i == 1) {
                      nextEvent = event;
                      return event;
                  }
                  i++;
              })
            : null;
    } else {
        const val = homeData.events
            ? homeData.events.forEach(event => {
                  if (i == 0) {
                      nextEvent = event;
                      return event;
                  }
                  i++;
              })
            : null;
        noEvent = true;
    }
    if (!nextEvent && !noEvent) {
        const val = homeData.events
            ? homeData.events.forEach(event => {
                  if (i == 0) {
                      nextEvent = event;
                      return event;
                  }
                  i++;
              })
            : null;
        noEvent = true;
    }
    console.log(news);
    document.documentElement.classList.remove("nav-open");
    useEffect(() => {
        fetch_homeData();
        fetch_news();
        fetch_knowledge();
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    }, []);
    return (
        <>
            <PageHeader />
            <div className="main">
                <div className="section text-left top-section">
                    <Container>
                        <Row>
                            <Col className="mx-auto" md="4">
                                <h1 className="custom-color font-weight-bold ml-2 mb-2 about-head">
                                    What we do
                                </h1>
                                <h5 className="custom-description">
                                    We strive to be a leading Professional
                                    association in People management that
                                    enhances competence productivity and quality
                                    of life. Our mission is to institute
                                    standards, enhance development and promote
                                    human resource management as a strategic
                                    function in any organization.
                                </h5>
                            </Col>
                            <Col md={8}>
                                <Row>
                                    <Col className="mx-auto text-center" md="4">
                                        <img
                                            className="img-circle img-no-padding img-responsive"
                                            src={knowledge}
                                            alt="knowledge"
                                        />
                                        <h2 className="sub-title custom-color font-weight-bold">
                                            Knowledgable
                                        </h2>
                                        <h5 className="custom-description">
                                            Advancing knowledge and
                                            understanding about people
                                            management and development
                                        </h5>
                                        <br />
                                        <Button
                                            className="btn-link text-info text-capitalize font-weight-normal"
                                            color="primary"
                                            outline
                                        >
                                            Our objectives{" "}
                                            <i
                                                className="fa fa-caret-right"
                                                aria-hidden="true"
                                            ></i>
                                        </Button>
                                    </Col>
                                    <Col className="mx-auto text-center" md="4">
                                        <img
                                            className="img-circle img-no-padding img-responsive"
                                            src={target}
                                            alt="settings"
                                        />
                                        <h2 className="sub-title custom-color font-weight-bold">
                                            Setting Standards
                                        </h2>
                                        <h5 className="custom-description">
                                            Providing guidance and direction for
                                            the future of the people profession
                                        </h5>
                                        <br />
                                        <Button
                                            className="btn-link text-info text-capitalize font-weight-normal"
                                            color="primary"
                                            outline
                                        >
                                            Explore resources{" "}
                                            <i
                                                className="fa fa-caret-right"
                                                aria-hidden="true"
                                            ></i>
                                        </Button>
                                    </Col>
                                    <Col className="mx-auto text-center" md="4">
                                        <img
                                            className="img-circle img-no-padding img-responsive"
                                            src={change}
                                            alt="change"
                                        />
                                        <h2 className="sub-title custom-color font-weight-bold">
                                            Diving Change
                                        </h2>
                                        <h5 className="custom-description">
                                            Over 700 members making a difference
                                            in workspaces and lives every day
                                        </h5>
                                        <br />
                                        <Button
                                            className="btn-link text-info text-capitalize font-weight-normal"
                                            color="primary"
                                            outline
                                        >
                                            Read newsletter{" "}
                                            <i
                                                className="fa fa-caret-right"
                                                aria-hidden="true"
                                            ></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="bg-img"></div>
                <div className="section text-left float-section">
                    <Container>
                        <Row className="my-auto">
                            <Row className="text-left">
                                <h2 className=" home-title text-white mt-2 mb-4 font-weight-bold">
                                    Events/Trends
                                </h2>
                            </Row>
                            <Row>
                                <Col md="6" className="mx-auto">
                                    <Card className="p-4">
                                        <CardTitle>
                                            <h5 className="custom-color custom-title news-head text-center">
                                                {noEvent || noNext
                                                    ? "Last Event Attended"
                                                    : "Next Listed Event"}
                                            </h5>
                                        </CardTitle>
                                        <CardBody>
                                            <ListGroup flush>
                                                {nextEvent ? (
                                                    <ListGroupItem className="transparent">
                                                        <strong>
                                                            {
                                                                nextEvent.eventName
                                                            }
                                                        </strong>
                                                        <p>
                                                            <LinesEllipsis
                                                                text={
                                                                    nextEvent.eventDesc
                                                                }
                                                                maxLine="4"
                                                                ellipsis="......."
                                                            />
                                                        </p>
                                                        <p className="text-muted">
                                                            <span className="font-weight-bold">
                                                                Venue:{" "}
                                                            </span>{" "}
                                                            {nextEvent.venue}
                                                        </p>
                                                        <br />
                                                        <span className="font-12 float-left font-italic">
                                                            Start Date:{" "}
                                                            {
                                                                nextEvent.startdate
                                                            }
                                                        </span>
                                                        <span className="font-12 float-right font-italic">
                                                            End Date:{" "}
                                                            {nextEvent.endate}
                                                        </span>
                                                    </ListGroupItem>
                                                ) : null}
                                                <ListGroupItem className="transparent mb-0">
                                                    <Link
                                                        className="text-muted"
                                                        to={`/allevents`}
                                                    >
                                                        <Button
                                                            className="mt-2 mb-2 btn-lg float-right btn-link text-info text-capitalize font-weight-normal"
                                                            color="primary"
                                                            outline
                                                            outline
                                                        >
                                                            More About Events
                                                            <i
                                                                className="fa fa-caret-right"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </Button>
                                                    </Link>
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="6" className="mx-auto">
                                    <Card className="px-4 py-2">
                                        <CardTitle>
                                            <h5 className="custom-color custom-title news-head text-center">
                                                Count Down to Incoming Event
                                            </h5>
                                        </CardTitle>
                                        <CardBody>
                                            <EventTimer
                                                event={requiredEvent}
                                                eventCheck={noEvent}
                                            />
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </div>
                <div className="section text-left bottom-section">
                    <Container>
                        <Row className="text-left d-block">
                            <h2 className="home-title mt-2 mb-4 font-weight-bold">
                                Updates
                            </h2>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <h5 className="custom-color news-head text-left font-weight-bold">
                                    News Updates
                                </h5>
                                <SimpleSlider slideNews={news} />
                            </Col>
                            <Col md={4}>
                                <h5 className="custom-color news-head text-left font-weight-bold">
                                    Regulation Tracker
                                </h5>
                                <ListGroup flush className="mt-4">
                                    <ListGroupItem
                                        className="transparent"
                                        tag="a"
                                        href="#"
                                    >
                                        Advancing knowledge and understanding
                                        about people management and development
                                        <br />
                                        <span className="font-12 float-right font-italic">
                                            Date: 19/11/2020
                                        </span>
                                    </ListGroupItem>
                                    <ListGroupItem
                                        className="transparent"
                                        tag="a"
                                        href="#"
                                    >
                                        Advancing knowledge and understanding
                                        about people management and development
                                        <br />
                                        <span className="font-12 float-right font-italic">
                                            Date: 19/11/2020
                                        </span>
                                    </ListGroupItem>
                                    <ListGroupItem
                                        className="transparent"
                                        tag="a"
                                        href="#"
                                    >
                                        Advancing knowledge and understanding
                                        about people management and development
                                        <br />
                                        <span className="font-12 float-right font-italic">
                                            Date: 19/11/2020
                                        </span>
                                    </ListGroupItem>
                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ({ HomeData, News }) => {
    const { homeData, loading, homeError } = HomeData;
    const news = News.newsData;
    return { homeData, loading, homeError, news };
};
export default connect(mapStateToProps, {
    fetch_homeData,
    fetch_news,
    fetch_knowledge
})(HomePage);
