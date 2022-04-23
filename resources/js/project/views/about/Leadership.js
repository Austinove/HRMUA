import CustomHeader from "../../components/Headers/customHeader";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { imageUrl } from "../../constants";
import { fetch_leadership } from "../../actions/leadershipAction";

const Leadership = ({
    leaderships,
    loading,
    leadshipError,
    fetch_leadership
}) => {
    useEffect(() => {
        fetch_leadership();
        return function cleanup() {};
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
                                    Leadership
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="section text-left">
                    <Container>
                        <Row>
                            <Col className="mx-auto" md={10}>
                                <h4 className="title font-weight-bold text-center">
                                    Congratulations to the new HRMAU Governing
                                    Council 2020-2022
                                </h4>
                                <strong className="font-14 font-weight-bold">
                                    Dear Members;
                                </strong>
                                <p className="cutom-description text-justify mt-3">
                                    We salute you and thank you for the trust
                                    and confidence accorded to the new GC
                                    2020-2022. We have a well balanced team by
                                    generations, experience, gender and key HR
                                    Practice sectors. We look forward to your
                                    support in executing our mandate. Thank you
                                    for your kind congratulatory messages.
                                    Together we can.
                                </p>
                                <span className="float-right font-weight-bold mt-3">
                                    <strong className="font-14">
                                        Moses Mbubi Witta,
                                    </strong>{" "}
                                    <br />
                                    <strong className="font-14">
                                        President
                                    </strong>
                                    <br />
                                    <strong className="font-14 custom-color">
                                        Human Resource Managers' Association of
                                        Uganda
                                    </strong>
                                </span>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section text-left">
                    <Container>
                        <Row>
                            {leaderships
                                ? leaderships.map(leader => (
                                      <Col
                                          className="mt-3"
                                          lg={6}
                                          md={6}
                                          sm={12}
                                      >
                                          <Row>
                                              <Col md={6}>
                                                  <img
                                                      alt="member-image"
                                                      className="img-circle img-no-padding img-responsive"
                                                      src={
                                                          imageUrl +
                                                          "/uploads/leaders/" +
                                                          leader.image
                                                      }
                                                  />
                                              </Col>
                                              <Col md={6}>
                                                  <h5 className="font-14 font-weight-bold mb-2">
                                                      {leader.name}
                                                  </h5>
                                                  <strong className="font-14">
                                                      {leader.title}
                                                  </strong>
                                                  <p className="cutom-description text-justify custom-color">
                                                      {leader.description}
                                                  </p>
                                              </Col>
                                          </Row>
                                      </Col>
                                  ))
                                : null}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = ({ Leadership }) => {
    const { leaderships, loading, leadshipError } = Leadership;
    return {
        leaderships,
        loading,
        leadshipError
    };
};

export default connect(mapStateToProps, { fetch_leadership })(Leadership);
