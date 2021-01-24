import React, { useEffect, useState } from "react";
import { Container, Row, Col, Label, Input, FormGroup } from "reactstrap";
import CustomHeader from "../../components/Headers/customHeader";
import Retired from "./retired";
import Professional from "./professional";
import Coporate from "./coporate";
import Student from "./student";
const Application = () => {
    const [memberType, setMemberType] = useState(false);
    // useEffect;
    const memberChange = e => {
        setMemberType(e.target.value);
    };
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
                                    Register
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="section text-left pt-3">
                    <Container>
                        <Row>
                            <Col className="mx-auto" md={8}>
                                <Row>
                                    <Col
                                        md={6}
                                        className="vertical-align-center header-content"
                                    >
                                        <span className="font-weight-bold text-center ml-4 mb-3">
                                            Select Membership Type to Continue
                                        </span>
                                        <br />
                                        <FormGroup check>
                                            <Label check className="mr-3">
                                                <Input
                                                    type="radio"
                                                    name="memberRadio"
                                                    value="professional"
                                                    onChange={memberChange}
                                                />
                                                Professional Member
                                            </Label>|
                                            <Label check className="mr-3">
                                                <Input
                                                    type="radio"
                                                    name="memberRadio"
                                                    value="student"
                                                    onChange={memberChange}
                                                />
                                                Student Member
                                            </Label>|
                                            <Label check className="mr-3">
                                                <Input
                                                    type="radio"
                                                    name="memberRadio"
                                                    value="retired"
                                                    onChange={memberChange}
                                                />
                                                Retired Member
                                            </Label>|
                                            <Label check className="mr-3">
                                                <Input
                                                    type="radio"
                                                    name="memberRadio"
                                                    value="coporate"
                                                    onChange={memberChange}
                                                />
                                                Coporate Member
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="ml-auto mr-auto" md="10">
                                {memberType === "retired" ? (
                                    <Retired />
                                ) : memberType === "professional" ? (
                                    <Professional />
                                ) : memberType === "coporate" ? (
                                    <Coporate />
                                ) : memberType === "student" ? (
                                    <Student />
                                ) : null}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Application;
