import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { fetch_news } from "../../actions/newsAction";

function SinglePage({ fetch_news, newsData, loading, newsError, match }) {
    const [news, setNews] = useState([]);
    const filterNews = () => {
        if (newsData) {
            const filtered = newsData.filter(newsVal => {
                return newsVal.id == parseInt(match.params.id);
            });
            setNews(filtered);
        }
    };
    let pageHeader = React.createRef();
    document.documentElement.classList.remove("nav-open");
    useEffect(() => {
        fetch_news();
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
        }
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    }, []);
    useEffect(() => {
        filterNews();
    }, [newsData]);
    return (
        <>
            <div
                style={{
                    backgroundImage: "url(/assets/img/logo/home-img.jpg)"
                }}
                className="page-header single-header"
                data-parallax={true}
                ref={pageHeader}
            >
                <div className="filter" />
            </div>
            <div className="main">
                <div className="section text-left top-section">
                    {news
                        ? news.map((newsVal, index) => (
                              <Container key={index}>
                                  <Row>
                                      <Col className="mx-auto" md="12">
                                          <h1 className="custom-color font-weight-bold ml-2 mb-2 about-head">
                                              {newsVal.newsTitle}
                                          </h1>
                                          <span className="font-12 font-weight-bold">
                                              Category: {newsVal.newsCategory}
                                          </span>
                                          <span className="font-12 float-right font-weight-bold">
                                              Date: {newsVal.date}
                                          </span>
                                          <h5 className="custom-description mt-4">
                                              {newsVal.newsDesc}
                                          </h5>
                                      </Col>
                                  </Row>
                              </Container>
                          ))
                        : null}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ({ News }) => {
    const { newsData, loading, newsError } = News;
    return { newsData, loading, newsError };
};
export default connect(mapStateToProps, { fetch_news })(SinglePage);
