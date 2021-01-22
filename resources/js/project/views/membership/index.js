import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CustomHeader from "../../components/Headers/customHeader";

const Membership = () => {
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
                                    Membership
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="section pt-4 bg-white text-left">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h3 className="custom-title font-weight-bold">
                                    Who can be a member?
                                </h3>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i className="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Members
                                    </h4>
                                    <h5 className="description ml-5">
                                        Full-time Practitioners of HRM
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i className="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Associates
                                    </h4>
                                    <h5 className="description ml-5">
                                        Individuals who are not HR practitioners
                                        but are connected to HR practice
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Student Member
                                    </h4>
                                    <h5 className="description ml-5">
                                        Individuals who are undertaking a course
                                        in HRM or related subject
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Retired Members
                                    </h4>
                                    <h5 className="description ml-5">
                                        Individual who have retired in the
                                        active HRM practice
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Corporate Members
                                    </h4>
                                    <h5 className="description ml-5">
                                        Institutions with the HRM function
                                    </h5>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto" md="6">
                                <h3 className="custom-title font-weight-bold">
                                    Join the association today
                                </h3>
                                <p className="mt-4 font-17">
                                    If you meet all the criteria below, please
                                    click register now to begin. Please review
                                    benefits and fees here.
                                </p>
                                <ul>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must have studied Human Resource
                                            Management at undergraduate or
                                            postgraduate level or practicing
                                            Human Resource in formal
                                            organizations
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must not have any criminal record in
                                            employment.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must be willing to comply with the
                                            fees structure.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must be willing to remain
                                            non-political
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must be willing to abide by code of
                                            ethics
                                        </p>
                                    </li>
                                </ul>
                                <Button
                                    color="default"
                                    className="btn-round text-capitalize font-weight-normal mt-2"
                                    outline
                                >
                                    Click to Register{" "}
                                    <i
                                        class="fa fa-arrow-right"
                                        aria-hidden="true"
                                    ></i>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section pt-4 bg-white text-left">
                    <Container>
                        <Tabs
                            headerClass="tab-header-bold"
                            activeHeaderClass="tab-header-blue"
                            onSelect={(index, label) =>
                                console.log(label + " selected")
                            }
                        >
                            <Tab label="Benefits" className="mt-5">
                                <Row class>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Corporate Members</u>
                                        </h5>
                                        <p>
                                            Corporate Membership shall be open
                                            to public and private institutions
                                            having a human resource function in
                                            their management. They have no
                                            voting rights.
                                        </p>
                                        <p>
                                            Corporate members will be entitled
                                            to:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Must have studied Human
                                                    Resource Management at
                                                    undergraduate or
                                                    postgraduate level or
                                                    practicing Human Resource in
                                                    formal organizations
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must not have any criminal
                                                    record in employment.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to comply
                                                    with the fees structure.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to remain
                                                    non-political
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to abide by
                                                    code of ethics
                                                </p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Professional Members</u>
                                        </h5>
                                        <p>
                                            If you meet all the criteria below,
                                            please click register now to begin.
                                            Please review benefits and fees
                                            here.
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Must have studied Human
                                                    Resource Management at
                                                    undergraduate or
                                                    postgraduate level or
                                                    practicing Human Resource in
                                                    formal organizations
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must not have any criminal
                                                    record in employment.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to comply
                                                    with the fees structure.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to remain
                                                    non-political
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to abide by
                                                    code of ethics
                                                </p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Associate/ Student Members</u>
                                        </h5>
                                        <p>
                                            If you meet all the criteria below,
                                            please click register now to begin.
                                            Please review benefits and fees
                                            here.
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Must have studied Human
                                                    Resource Management at
                                                    undergraduate or
                                                    postgraduate level or
                                                    practicing Human Resource in
                                                    formal organizations
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must not have any criminal
                                                    record in employment.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to comply
                                                    with the fees structure.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to remain
                                                    non-political
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to abide by
                                                    code of ethics
                                                </p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Fellows</u>
                                        </h5>
                                        <p>
                                            If you meet all the criteria below,
                                            please click register now to begin.
                                            Please review benefits and fees
                                            here.
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Must have studied Human
                                                    Resource Management at
                                                    undergraduate or
                                                    postgraduate level or
                                                    practicing Human Resource in
                                                    formal organizations
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must not have any criminal
                                                    record in employment.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to comply
                                                    with the fees structure.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to remain
                                                    non-political
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to abide by
                                                    code of ethics
                                                </p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Honorary Members</u>
                                        </h5>
                                        <p>
                                            If you meet all the criteria below,
                                            please click register now to begin.
                                            Please review benefits and fees
                                            here.
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Must have studied Human
                                                    Resource Management at
                                                    undergraduate or
                                                    postgraduate level or
                                                    practicing Human Resource in
                                                    formal organizations
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must not have any criminal
                                                    record in employment.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to comply
                                                    with the fees structure.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to remain
                                                    non-political
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Must be willing to abide by
                                                    code of ethics
                                                </p>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab label="Fees" className="mt-5">
                                <Container>
                                    <Row>
                                        <Col
                                            className="text-left mx-auto"
                                            md="10"
                                        >
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            Type of Membership
                                                        </th>
                                                        <th scope="col">
                                                            Membership Fee
                                                        </th>
                                                        <th scope="col">
                                                            Annual
                                                            Subscription(Per
                                                            Year between Jan and
                                                            Dec)
                                                        </th>
                                                        <th>
                                                            Total Fees for new
                                                            members (First Year)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            Corporate Members
                                                        </th>
                                                        <td scope="row">
                                                            3,000,000 UGX(Once
                                                            every two years)
                                                        </td>
                                                        <td>
                                                            150,000 UGX per
                                                            staff(covers only 10
                                                            members)
                                                        </td>
                                                        <td>
                                                            3,000,000 UGX +
                                                            (150,000 UGX x No of
                                                            members)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Professional Members
                                                        </th>
                                                        <td>200,000 UGX</td>
                                                        <td>300,000 UGX</td>
                                                        <td>500,000</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Student/Associate
                                                            Members
                                                        </th>
                                                        <td>40,000</td>
                                                        <td>60,000</td>
                                                        <td>100,000</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Honorary and fellow
                                                        </th>
                                                        <td>Free</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Membership;
