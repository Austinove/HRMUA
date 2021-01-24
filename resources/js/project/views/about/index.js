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
                <div
                    className="head-section section text-left page-header aboutus-bg"
                >
                    <Container>
                        <Row>
                            <Col
                                className="ml-auto mr-auto text-center"
                                md={10}
                            >
                                <h1 className="font-weight-bold ml-2 mb-2 about-head text-white">
                                    Introduction
                                </h1>
                                <p className="custom-text text-white">
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
                                <div className="float-card info text-center bg-white pt-5 px-4">
                                    <div className="icon icon-info custom-color">
                                        <i className="nc-icon nc-bulb-63" />
                                    </div>
                                    <div className="description">
                                        <h4 className="custom-color font-weight-bold text-center ml-2 mb-2 about-head">
                                            Our Vision
                                        </h4>
                                        <p className="custom-text">
                                            To be a leading Professional
                                            association in People management
                                            that enhances competence
                                            productivity and quality of life
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
                                <div className="float-card info text-center bg-white pt-5 px-4">
                                    <div className="icon icon-info custom-color">
                                        <i className="nc-icon nc-sun-fog-29" />
                                    </div>
                                    <div className="description">
                                        <h4 className="custom-color font-weight-bold text-center ml-2 mb-2 about-head">
                                            Our Mission
                                        </h4>
                                        <p className="custom-text">
                                            Institute standards, enhance
                                            development and promote Human
                                            Resource Management as a strategic
                                            function in organization
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
                                            >
                                                {/* <CardImg top src={target} alt="Vision" /> */}
                                            </Col>
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
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
                                                                </CardText>
                                                            </li>
                                                            <li>
                                                                <CardText>
                                                                    Institute
                                                                    standards,
                                                                    enhance
                                                                    development
                                                                    and promote
                                                                    Human
                                                                    Resource
                                                                    Management
                                                                    as a
                                                                    strategic
                                                                    function in
                                                                    organization
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
