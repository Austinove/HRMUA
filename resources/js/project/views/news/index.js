import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import { connect } from "react-redux";
import {
    Container,
    Row,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    UncontrolledDropdown
} from "reactstrap";
import CustomHeader from "../../components/Headers/customHeader";
import { imageUrl } from "../../constants";
import { fetch_news, infinitNewsFetch } from "../../actions/newsAction";

const News = ({
    fetch_news,
    infinitNewsFetch,
    newsData,
    loading,
    newsError
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    onmouseenter = () => setDropdownOpen(true);
    onmouseleave = () => setDropdownOpen(false);
    const [searchedNews, setSearchedNews] = useState([]);
    const assignValues = () => setSearchedNews(newsData);
    const selectedCategory = selected => {
        if (selected !== "all") {
            console.log(newsData);
            const filtered = newsData.filter((news, index) => {
                return news.newsCategory
                    .toUpperCase()
                    .includes(selected.toUpperCase());
            });
            setSearchedNews(filtered);
        } else {
            assignValues();
        }
    };
    const makeListener = () => {
        if (!loading) {
            $(window).on(
                "scroll",
                function() {
                    if (
                        $(window).scrollTop() + $(window).height() ===
                        $(document).height()
                    ) {
                        infinitNewsFetch();
                    }
                }.bind(this)
            );
        }
    };
    useEffect(() => {
        assignValues();
        return function cleanup() {};
    }, [newsData]);
    useEffect(() => {
        fetch_news();
        window.addEventListener("scroll", makeListener());
        return function cleanup() {
            window.removeEventListener("scroll", makeListener());
        };
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
                                    News Feeds
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="section text-left py-3">
                    <Container>
                        <Row>
                            <Col className="mx-auto mb-3" md={10}>
                                <UncontrolledDropdown className="float-right btn-outline-default">
                                    <DropdownToggle
                                        aria-expanded={false}
                                        aria-haspopup={true}
                                        caret
                                        color="light"
                                        data-toggle="dropdown"
                                        href="#pablo"
                                        id="dropdownMenuLink"
                                        onClick={e => e.preventDefault()}
                                        role="button"
                                        className="font-12"
                                    >
                                        Select Category
                                    </DropdownToggle>
                                    <DropdownMenu aria-labelledby="dropdownMenuLink">
                                        <DropdownItem
                                            onClick={e =>
                                                selectedCategory("all")
                                            }
                                        >
                                            All Categories
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={e =>
                                                selectedCategory("updates")
                                            }
                                        >
                                            Updates
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={e =>
                                                selectedCategory("covid")
                                            }
                                        >
                                            Covid 19
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Col>
                        </Row>
                        <Row>
                            {searchedNews
                                ? searchedNews.map((news, index) => (
                                      <Col
                                          className="mx-auto mt-2"
                                          md={12}
                                          key={index}
                                      >
                                          <div className="media p-3 row">
                                              <div className="col-md-12 col-lg-4">
                                                  <Link
                                                      className="text-muted"
                                                      to={`/news/${news.id}`}
                                                  >
                                                      <img
                                                          src={`${imageUrl}/uploads/news/${news.image}`}
                                                          height="100"
                                                          //   width="300"
                                                          className="mr-3 media-image img-fluid"
                                                          alt="News Image"
                                                      />
                                                  </Link>
                                              </div>
                                              <div className="col-md-12 col-lg-8">
                                                  <Link
                                                      className="text-muted"
                                                      to={`/news/${news.id}`}
                                                  >
                                                      <div className="media-body">
                                                          <a className="mt-2 font-weight-bold">
                                                              {news.newsTitle}
                                                          </a>
                                                          <br />
                                                          <span className="font-12">
                                                              <strong>
                                                                  Category
                                                              </strong>
                                                              :{" "}
                                                              {
                                                                  news.newsCategory
                                                              }
                                                          </span>
                                                          <p className="mt-4">
                                                              <LinesEllipsis
                                                                  text={
                                                                      news.newsDesc
                                                                  }
                                                                  maxLine="3"
                                                                  ellipsis="...."
                                                              />
                                                          </p>
                                                          <span className="font-12 float-right mt-4">
                                                              {news.date}
                                                          </span>
                                                      </div>
                                                  </Link>
                                              </div>
                                          </div>
                                      </Col>
                                  ))
                                : null}
                            {loading ? (
                                <div className="text-center">
                                    <h3>Loading please wait....</h3>
                                </div>
                            ) : null}
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = ({ News }) => {
    const { newsData, loading, newsError } = News;
    return { newsData, loading, newsError };
};
export default connect(mapStateToProps, { fetch_news, infinitNewsFetch })(News);
