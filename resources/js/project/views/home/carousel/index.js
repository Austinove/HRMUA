import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinesEllipsis from "react-lines-ellipsis";
import { CardImg, Card, CardBody, CardText, Button } from "reactstrap";
import { imageUrl } from "../../../constants";

const SimpleSlider = ({ slideNews }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <Slider {...settings}>
            {slideNews
                ? slideNews.map((news, index) => {
                      if (index < 10) {
                          return (
                              <Link to={`/news`}>
                                  <Card key={index}>
                                      <CardImg
                                          top
                                          src={`${imageUrl}/uploads/news/${news.image}`}
                                          alt="..."
                                      />
                                      <CardBody className="pb-2">
                                          <CardText>{news.newsTitle}</CardText>
                                          <CardText className="pb-2">
                                              <LinesEllipsis
                                                  text={news.newsDesc}
                                                  maxLine="2"
                                                  ellipsis="...."
                                              />

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
                              </Link>
                          );
                      }
                  })
                : null}
        </Slider>
    );
};
export default SimpleSlider;
