import React from "react";
import { Button, Container } from "reactstrap";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";

const CustomHeader = () => {
    const styless = {
        backgroundImage: "url(/assets/img/logo/home-img.jpg)",
        minHeight: "30vh"
    };
    return (
        <>
            <div
                style={styless}
                className="page-header"
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
                            <div className="mt-5 motto">
                                <h2>About Us</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default CustomHeader;
