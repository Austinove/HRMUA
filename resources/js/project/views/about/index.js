import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button
} from "reactstrap";
import CustomHeader from "../../components/Headers/customHeader";

const AboutUs = () => {
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
                                    About Us
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="head-section section text-left page-header aboutus-bg">
                    <Container>
                        <Row>
                            <Col
                                className="ml-auto mr-auto text-center"
                                md={10}
                            >
                                <h1 className="font-weight-bold ml-2 mb-2 about-head text-white">
                                    Introduction
                                </h1>
                                <p className="custom-text font-weight-bold text-white">
                                    We are a professional body that brings
                                    together over 700 Private Human Resources
                                    Practitioners and Professionals, the
                                    academia, Community based Human Resources,
                                    Development Partners, Public and
                                    Non-Governmental Human Resource
                                    Professionals, with a mission to institute
                                    standards, enhance development and promote
                                    Human Resource Management Best Practices in
                                    Organizations.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section text-left">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="float-card info bg-white pt-5 px-4">
                                    <div className="icon icon-info text-center custom-color">
                                        <i className="nc-icon nc-bulb-63" />
                                    </div>
                                    <div className="description px-5">
                                        <h4 className="custom-color font-weight-bold ml-2 mb-2 about-head">
                                            Vision and Mission
                                        </h4>
                                        <p className="custom-text">
                                            Vision: <br/> Inspire and nature Human Resource Professionals
                                        </p>
                                        <p className="custom-text">
                                            Mission: <br/> Develop and regulate Human Resource practices that transform people, workplaces, and businesses.
                                        </p>
                                        <Button
                                            className="btn-link"
                                            color="info"
                                            href="#pablo"
                                        >
                                            . . . . . .
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="float-card mb-md-5 info bg-white pt-5 px-4">
                                    <div className="icon icon-info text-center custom-color">
                                        <i className="nc-icon nc-sun-fog-29" />
                                    </div>
                                    <div className="description px-4">
                                        <h4 className="custom-color font-weight-bold ml-2 mb-2 about-head">
                                            Values and Tagline
                                        </h4>
                                        <p className="pb-0 custom-text">
                                            Values:
                                            <ul>
                                                <li>Stewardship</li>
                                                <li>Professionalism</li>
                                                <li>Innovation</li>
                                                <li>Collaboration</li>
                                                <li>Integrity</li>
                                            </ul>
                                        </p>
                                        <p className="custom-text custom-color">
                                            Tagline: Develop and celebrating talent.
                                        </p>
                                        <Button
                                            className="btn-link"
                                            color="info"
                                            href="#"
                                        >
                                            . . . . . .
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-5">
                        <Row>
                            <Col md={12} className="mt-4">
                                <Card className="custom-card">
                                    <CardBody>
                                        <Row>
                                            <Col
                                                md={2}
                                                style={{
                                                    backgroundImage:
                                                        "url(/assets/img/logo/target.png)",
                                                    minHeight: "30vh"
                                                }}
                                            ></Col>
                                            <Col md={10}>
                                                <Row>
                                                    <CardTitle className="custom-color font-weight-bold ml-2 mb-2 about-head">
                                                        Our Objectives
                                                    </CardTitle>
                                                </Row>
                                                <Row>
                                                    <Col md={6}>
                                                        <ul>
                                                            <li>
                                                                <CardText>
                                                                    To encourage
                                                                    and promote
                                                                    the
                                                                    development
                                                                    of the Human
                                                                    Resources
                                                                    Management
                                                                    practice.
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    To maintain
                                                                    and foster
                                                                    Human
                                                                    Resources
                                                                    management
                                                                    practice in
                                                                    commerce,
                                                                    industry,
                                                                    trade,
                                                                    government,
                                                                    para-government,
                                                                    voluntary
                                                                    organizations
                                                                    and others.
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    To foster
                                                                    and maintain
                                                                    high
                                                                    professional
                                                                    standards
                                                                    among Human
                                                                    Resources
                                                                    practitioners.
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    To act as a
                                                                    pressure
                                                                    group to
                                                                    safeguard
                                                                    the
                                                                    professional
                                                                    interests of
                                                                    the members.
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    To
                                                                    organize/arrange
                                                                    meetings,
                                                                    tours,
                                                                    lectures,
                                                                    discussions,
                                                                    conferences
                                                                    and seminars
                                                                    for
                                                                    practitioners
                                                                    and/management
                                                                    or for both
                                                                    to enable
                                                                    them to
                                                                    exchange
                                                                    views,
                                                                    ideas,
                                                                    experiences,
                                                                    information
                                                                    etc, in the
                                                                    interest of
                                                                    the
                                                                    profession.
                                                                </CardText>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul>
                                                            <li>
                                                                <CardText>
                                                                    To provide
                                                                    consultancy
                                                                    and advice
                                                                    on Human
                                                                    Resources
                                                                    management
                                                                    practice and
                                                                    operation to
                                                                    National
                                                                    Institutions
                                                                    and any
                                                                    other
                                                                    interested
                                                                    parties.
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    To act as
                                                                    clearing
                                                                    House on
                                                                    Human
                                                                    Resources
                                                                    Management
                                                                    practices.
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    To publish
                                                                    periodically
                                                                    a bulletin
                                                                    containing
                                                                    information
                                                                    and general
                                                                    professional
                                                                    interests
                                                                    for
                                                                    circulation
                                                                    to members.
                                                                </CardText>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
