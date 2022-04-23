import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { fetch_knowledge } from "../../actions/knowledgeAction";
import { imageUrl } from "../../constants";

function SingleKnowledge({
    fetch_knowledge,
    knowledgeData,
    loading,
    knowledgeError,
    match
}) {
    const [knowledge, setKnowledge] = useState([]);
    // const didMountRef = useRef(false);
    let pageHeader = React.createRef();
    const filterKnowledge = () => {
        if (knowledgeData) {
            const filtered = knowledgeData.filter(know => {
                return know.id == parseInt(match.params.id);
            });
            setKnowledge(filtered);
        }
    };
    document.documentElement.classList.remove("nav-open");

    useEffect(() => {
        fetch_knowledge();
        if (window.innerWidth < 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            return function cleanup() {};
        }
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    }, []);
    useEffect(() => {
        filterKnowledge();
    }, [knowledgeData]);
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
                    {knowledge
                        ? knowledge.map((know, index) => (
                              <Container key={index}>
                                  <Row>
                                      <Col className="mx-auto" md="12">
                                          <h1 className="custom-color font-weight-bold ml-2 mb-2 about-head">
                                              {know.title}
                                          </h1>
                                          <span className="font-12 float-right font-weight-bold mb-3">
                                              Published: {know.date}
                                          </span>
                                          <h5 className="custom-description mt-5">
                                              {know.description}
                                          </h5>
                                      </Col>
                                  </Row>
                                  {know.document ? (
                                      <a
                                          target="_blank"
                                          //   href={`/uploads/document/${know.document}`}
                                          href={`${imageUrl}/user/knowledge/${know.document}`}
                                          //   download
                                      >
                                          <Button
                                              color="warning"
                                              className="btn-sm btn-round text-capitalize font-weight-normal font-13 mt-2"
                                              outline
                                          >
                                              <i
                                                  className="fa fa-download"
                                                  aria-hidden="true"
                                              ></i>{" "}
                                              Download Document
                                          </Button>
                                      </a>
                                  ) : null}
                              </Container>
                          ))
                        : null}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = ({ Knowledge }) => {
    const { knowledgeData, loading, knowledgeError } = Knowledge;
    return {
        knowledgeData,
        loading,
        knowledgeError
    };
};
export default connect(mapStateToProps, { fetch_knowledge })(SingleKnowledge);
