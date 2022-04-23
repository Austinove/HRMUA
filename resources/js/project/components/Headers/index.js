import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row } from "reactstrap";
import Slider from "react-animated-slider";
import { imageUrl } from "../../constants";
import "react-animated-slider/build/horizontal.css";
function PageHeader({ realSlides }) {
    let pageHeader = React.createRef();
    useEffect(() => {
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <Slider autoplay={true} duration={5000} infinite={true}>
            {realSlides
                ? realSlides.map((slide, index) => (
                      <div
                          style={{
                              backgroundImage: `url(${imageUrl}/uploads/homeImages/${slide.image})`
                          }}
                          className="page-header home-header"
                          data-parallax={true}
                          ref={pageHeader}
                      >
                          <div className="filter" />
                          <Container>
                              <Row>
                                  <Col md={7} sm={12} className=" mt-2 ml-auto">
                                      <div className="motto text-center">
                                          <h1 className="font-weight-bold">
                                              {slide.title}
                                          </h1>
                                          <h3>{slide.description}</h3>
                                          <br />
                                          <Link to={`/application`}>
                                              <Button
                                                  className="btn-round"
                                                  color="neutral"
                                                  type="button"
                                                  outline
                                              >
                                                  Click to Register
                                              </Button>
                                          </Link>
                                      </div>
                                  </Col>
                              </Row>
                          </Container>
                      </div>
                  ))
                : null}
        </Slider>
    );
}

export default PageHeader;
