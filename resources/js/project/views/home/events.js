import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    Container,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Media,
    Input
} from "reactstrap";
import { fetch_homeData, infinitEventsFetch } from "../../actions/homeAction";
import CustomHeader from "../../components/Headers/customHeader";
import homeImage from "../../assets/img/logo/home-img.jpg";
import { fetch_news, infinitNewsFetch } from "../../actions/newsAction";

const AllEvents = ({
    homeData,
    loading,
    homeError,
    fetch_homeData,
    infinitEventsFetch
}) => {
    const [searchedEvents, setSearchedEvents] = useState([]);
    const searchEvent = e => {
        var eventVal = e.target.value;
        if (eventVal) {
            const filtered = homeData.events.filter((event, index) => {
                console.log(event.eventName, e.target.value);
                return event.eventName
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase());
            });
            setSearchedEvents(filtered);
        } else {
            setSearchedEvents(homeData.events);
        }
    };
    const assignValues = () => setSearchedEvents(homeData.events);
    const makeListener = () => {
        if (!loading) {
            $(window).on(
                "scroll",
                function() {
                    if (
                        $(window).scrollTop() + $(window).height() ===
                        $(document).height()
                    ) {
                        // infinitEventsFetch();
                    }
                }.bind(this)
            );
        }
    };
    useEffect(() => {
        assignValues();
        return function cleanup() {};
    }, [homeData]);

    useEffect(() => {
        fetch_homeData();
        window.addEventListener("scroll", makeListener());
        return function cleanup() {
            window.removeEventListener("scroll", makeListener());
        };
    }, []);
    return (
        <>
            <div
                className="about-header"
                data-parallax={true}
                ref={CustomHeader}
            >
                <div className="filter" />
                <Container>
                    <Row>
                        <Col
                            md={7}
                            sm={12}
                            className=" mt-5 mr-auto text-bottom"
                        >
                            <div className="mt-5 mb-2 motto">
                                <h3 className="font-weight-bold text-white">
                                    Events
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="section text-left py-3">
                    <Container>
                        <Row>
                            <Col md={10} className="mx-auto">
                                <Row>
                                    <Col md={6} className="mx-auto">
                                        <InputGroup className="search-publication">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-search"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                type="text"
                                                className="Knowledge-inputs"
                                                placeholder="Search Events by Title"
                                                onKeyUp={searchEvent}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="publication-container">
                                    {searchedEvents
                                        ? searchedEvents.map(
                                              (nextEvent, index) => (
                                                  <Col
                                                      className="mx-auto"
                                                      md="12"
                                                      key={index}
                                                  >
                                                      <Media>
                                                          <Media
                                                              body
                                                              className="p-2 mb-4"
                                                          >
                                                              <Media
                                                                  heading
                                                                  className="text-uppercase font-14 font-weight-bold"
                                                              >
                                                                  {
                                                                      nextEvent.eventName
                                                                  }
                                                              </Media>
                                                              <p className="font-14">
                                                                  {
                                                                      nextEvent.eventDesc
                                                                  }
                                                              </p>
                                                              <span className="text-muted float-right mt-2">
                                                                  Start on:
                                                                  {
                                                                      nextEvent.startdate
                                                                  }
                                                              </span>
                                                              <span className="text-muted float-right mt-2">
                                                                  Ends on:
                                                                  {
                                                                      nextEvent.enddate
                                                                  }
                                                              </span>
                                                          </Media>
                                                      </Media>
                                                  </Col>
                                              )
                                          )
                                        : null}
                                    {loading ? (
                                        <div className="text-center">
                                            <h3>Loading please wait....</h3>
                                        </div>
                                    ) : null}
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = ({ HomeData }) => {
    const { homeData, loading, homeError } = HomeData;
    return { homeData, loading, homeError };
};
export default connect(mapStateToProps, { fetch_homeData, infinitEventsFetch })(
    AllEvents
);
