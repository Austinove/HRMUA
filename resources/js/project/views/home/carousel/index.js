import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardImg, Card, CardBody, CardText, Button } from "reactstrap";
import homeImage from "../../../assets/img/logo/home-img.jpg";

const SimpleSlider = ({ slideNews }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider {...settings}>
            {slideNews
                ? slideNews.map((news, index) => (
                      <Card key={index}>
                          <CardImg top src={homeImage} alt="..." />
                          <CardBody className="pb-2">
                              <CardText>{news.newsTitle}</CardText>
                              <CardText className="pb-2">
                                  Cras sit amet nibh libero, in gravida nulla.
                                  Nulla…ringilla
                                  <Button
                                      className="mt-2 mb-2 float-right btn-link text-info text-capitalize font-weight-normal"
                                      color="primary"
                                      outline
                                      outline
                                  >
                                      More Details
                                      <i
                                          className="fa fa-caret-right"
                                          aria-hidden="true"
                                      ></i>
                                  </Button>
                              </CardText>
                          </CardBody>
                      </Card>
                  ))
                : null}
        </Slider>
    );
};
export default SimpleSlider;
