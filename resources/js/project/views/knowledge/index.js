import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Formik } from "formik";
import LinesEllipsis from "react-lines-ellipsis";
import * as Yup from "yup";
import {
    Container,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Media,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button
} from "reactstrap";
import CustomHeader from "../../components/Headers/customHeader";
import {
    fetch_knowledge,
    infinitKnowledgeFetch
} from "../../actions/knowledgeAction";
const Knowledge = ({
    fetch_knowledge,
    knowledgeData,
    loading,
    knowledgeError,
    offSet,
    infinitKnowledgeFetch
}) => {
    const [searchedKnowledge, setSearchedKnowledge] = useState([]);
    const searchKnowledge = e => {
        var knowledge = e.target.value;
        if (knowledge) {
            const filtered = knowledgeData.filter((know, index) => {
                console.log(know.title, e.target.value);
                return know.title
                    .toUpperCase()
                    .includes(e.target.value.toUpperCase());
            });
            setSearchedKnowledge(filtered);
        } else {
            setSearchedKnowledge(knowledgeData);
        }
    };
    const assignValues = () => setSearchedKnowledge(knowledgeData);
    const makeListener = () => {
        if (!loading) {
            $(window).on(
                "scroll",
                function() {
                    if (
                        $(window).scrollTop() + $(window).height() ===
                        $(document).height()
                    ) {
                        infinitKnowledgeFetch();
                    }
                }.bind(this)
            );
        }
    };
    useEffect(() => {
        assignValues();
        return function cleanup() {};
    }, [knowledgeData]);

    useEffect(() => {
        fetch_knowledge();
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
                                    Knowledge Feeds
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="section text-left pt-5">
                    <Container>
                        <Row>
                            <Col md={8}>
                                <Row>
                                    <Col md={6} className="mx-auto">
                                        <InputGroup className="search-publication">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fa fa-search"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                type="text"
                                                className="Knowledge-inputs"
                                                placeholder="Search Publication by Title"
                                                onKeyUp={searchKnowledge}
                                            />
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="publication-container">
                                    {searchedKnowledge
                                        ? searchedKnowledge.map(
                                              (knowledge, index) => (
                                                  <Col
                                                      className="mx-auto"
                                                      md="12"
                                                      key={index}
                                                  >
                                                      <Media>
                                                          <Media
                                                              body
                                                              className="p-2 mb-4"
                                                          >
                                                              <Link
                                                                  className="text-muted"
                                                                  to={`/knowledge/${knowledge.id}`}
                                                              >
                                                                  <Media
                                                                      heading
                                                                      className="text-uppercase font-14 font-weight-bold"
                                                                  >
                                                                      {
                                                                          knowledge.title
                                                                      }
                                                                  </Media>
                                                                  <p className="font-14">
                                                                      <LinesEllipsis
                                                                          text={
                                                                              knowledge.description
                                                                          }
                                                                          maxLine="3"
                                                                          ellipsis="...."
                                                                      />
                                                                  </p>
                                                              </Link>
                                                              {knowledge.document ? (
                                                                  <a
                                                                      href={`/uploads/document/${knowledge.document}`}
                                                                      download
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
                                                                          Download
                                                                          Document
                                                                      </Button>
                                                                  </a>
                                                              ) : null}
                                                              <span className="text-muted float-right mt-2">
                                                                  published:
                                                                  {
                                                                      knowledge.date
                                                                  }
                                                              </span>
                                                          </Media>
                                                      </Media>
                                                  </Col>
                                              )
                                          )
                                        : null}
                                    {loading ? (
                                        <div className="text-center">
                                            <h3>Loading please wait....</h3>
                                        </div>
                                    ) : null}
                                </Row>
                            </Col>
                            <Col md={4}>
                                <Container className="pub-forms pt-1 pb-2 px-5">
                                    <h4 className="font-weight-bold mb-4">
                                        Have you published anything recently?
                                    </h4>
                                    <span className="text-white">
                                        If you think human resource
                                        professionals would benefit from your
                                        publication, we would like to add it to
                                        the knowledge hub.
                                    </span>
                                    <Formik
                                        initialValues={{
                                            email: "",
                                            surname: "",
                                            otherName: "",
                                            sex: "",
                                            DOB: "",
                                            Nationality: "",
                                            fax: "",
                                            telephone: "",
                                            interest: "",
                                            title: "",
                                            experience: "",
                                            qualification: "",
                                            instituteName: "",
                                            firstName: ""
                                        }}
                                        validationSchema={Yup.object({
                                            firstName: Yup.string()
                                                .min(2, "Too Short!")
                                                .max(20, "Too Long!")
                                                .required(
                                                    "Enter your firstName"
                                                ),
                                            lastName: Yup.string()
                                                .min(2, "Too Short!")
                                                .max(20, "Too Long!")
                                                .required(
                                                    "Enter your lastName"
                                                ),
                                            phoneNumber: Yup.number()
                                                .min(10, "Too Short!")
                                                .required(
                                                    "Enter your phoneNumber"
                                                ),
                                            email: Yup.string()
                                                .email("Invalid email")
                                                .required("Enter your email")
                                        })}
                                        onSubmit={(
                                            values,
                                            { setSubmitting }
                                        ) => {
                                            setTimeout(() => {
                                                console.log(values);
                                                // register_user_request(values);
                                            }, 400);
                                        }}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleChange,
                                            handleBlur,
                                            handleSubmit,
                                            isSubmitting
                                        }) => (
                                            <form className="p-2 mt-2 mb-5">
                                                <FormGroup>
                                                    <Label
                                                        className="text-white"
                                                        for="firstName"
                                                    >
                                                        First Name
                                                        <span className="warning">
                                                            *
                                                        </span>
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="Knowledge-inputs"
                                                        name="firstName"
                                                        id="firstName"
                                                        required
                                                        value={values.firstName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            touched.firstName &&
                                                            errors.firstName
                                                                ? "Knowledge-inputs errorInput"
                                                                : "Knowledge-inputs"
                                                        }
                                                    />
                                                    {touched.firstName &&
                                                    errors.firstName ? (
                                                        <div className="text-danger mt-1 font-12">
                                                            {errors.firstName}
                                                        </div>
                                                    ) : null}
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label
                                                        className="text-white"
                                                        for="lastName"
                                                    >
                                                        Last Name{" "}
                                                        <span className="warning">
                                                            *
                                                        </span>
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        className="Knowledge-inputs"
                                                        name="lastName"
                                                        id="lastName"
                                                        required
                                                        value={values.lastName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            touched.lastName &&
                                                            errors.lastName
                                                                ? "Knowledge-inputs errorInput"
                                                                : "Knowledge-inputs"
                                                        }
                                                    />
                                                    {touched.lastName &&
                                                    errors.lastName ? (
                                                        <div className="text-danger mt-1 font-12">
                                                            {errors.lastName}
                                                        </div>
                                                    ) : null}
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label
                                                        className="text-white"
                                                        for="exampleEmail"
                                                    >
                                                        Email address{" "}
                                                        <span className="warning">
                                                            *
                                                        </span>
                                                    </Label>
                                                    <Input
                                                        className="Knowledge-inputs"
                                                        type="email"
                                                        name="email"
                                                        id="exampleEmail"
                                                        required
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            touched.email &&
                                                            errors.email
                                                                ? "Knowledge-inputs errorInput"
                                                                : "Knowledge-inputs"
                                                        }
                                                    />
                                                    {touched.email &&
                                                    errors.email ? (
                                                        <div className="text-danger mt-1 font-12">
                                                            {errors.email}
                                                        </div>
                                                    ) : null}
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label
                                                        className="text-white"
                                                        for="phone"
                                                    >
                                                        Phone{" "}
                                                        <span className="warning">
                                                            *
                                                        </span>
                                                    </Label>
                                                    <Input
                                                        type="number"
                                                        className="Knowledge-inputs"
                                                        name="phone"
                                                        id="phone"
                                                        required
                                                        value={
                                                            values.phoneNumber
                                                        }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            touched.phoneNumber &&
                                                            errors.phoneNumber
                                                                ? "Knowledge-inputs errorInput"
                                                                : "Knowledge-inputs"
                                                        }
                                                    />
                                                    {touched.phoneNumber &&
                                                    errors.phoneNumber ? (
                                                        <div className="text-danger mt-1 font-12">
                                                            {errors.phoneNumber}
                                                        </div>
                                                    ) : null}
                                                </FormGroup>
                                                <Button
                                                    type="submit"
                                                    color="default"
                                                    outline
                                                    className="btn-sm font-12 float-right text-white font-weight-normal text-capitalize"
                                                    type="submit"
                                                >
                                                    Submit
                                                </Button>
                                            </form>
                                        )}
                                    </Formik>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = ({ Knowledge }) => {
    const { knowledgeData, loading, knowledgeError } = Knowledge;
    const offSet = knowledgeData.length;
    return {
        knowledgeData,
        loading,
        knowledgeError,
        offSet
    };
};
export default connect(mapStateToProps, {
    fetch_knowledge,
    infinitKnowledgeFetch
})(Knowledge);
