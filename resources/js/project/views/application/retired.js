import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  FormText,
  Alert,
} from "reactstrap";
import { submit_retired } from "../../actions/retiredAction";

const Retired = ({ submit_retired, userData, loading, submitError }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  const [declar, setDeclar] = useState(false);
  const declaring = () => setDeclar(!declar);
  return (
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
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Enter your title"),
        surname: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Enter your surname"),
        email: Yup.string().email("Invalid email").required("Enter your email"),
        otherName: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Enter your other name"),
        sex: Yup.string().required("Select Sex"),
        DOB: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Enter your Date Of Birth"),
        Nationality: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Enter your Nationality"),
        fax: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Enter your fax"),
        telephone: Yup.number()
          .min(10, "Too short")
          .required("Enter your Telephone"),
        interest: Yup.string()
          .min(2, "Too Short!")
          .max(50, "Too Long!")
          .required("Enter your Interest"),
        experience: Yup.string().required("Enter your experience"),
        qualification: Yup.string().required("Enter your qualification"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        submit_retired(values);
        resetForm({});
        setDeclar(false);
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="mb-4">
          <Row className="text-center">
            <Col md={10} className="mr-auto mb-5">
              <strong>
                <u className="font-weight-bold font-17">PERSONAL DETAILS</u>
              </strong>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="mr-auto ml-5">
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="surname">
                      SurName
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="surname"
                      id="surname"
                      placeholder="Enter Surname"
                      value={values.surname}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.surname && errors.surname
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.surname && errors.surname ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.surname}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Title">
                      Title
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Your Title"
                      value={values.title}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.title && errors.title
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.title && errors.title ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.title}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="otherName">
                      Other Names
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="otherName"
                      id="otherName"
                      placeholder="Enter Your Other Name"
                      value={values.otherName}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.otherName && errors.otherName
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.otherName && errors.otherName ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.otherName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="sex">
                      Sex
                    </Label>{" "}
                    <span className="text-danger font-12 ml-2">*</span>
                    <br />
                    <div className="form-check-radio form-check-inline mt-2">
                      <Label className="form-check-label">
                        <Input
                          className="reg-inputs"
                          type="radio"
                          name="sex"
                          id="male"
                          value="male"
                          checked={values.sex === "male"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        Male
                        <span className="form-check-sign"></span>
                      </Label>
                    </div>
                    <div className="form-check-radio form-check-inline">
                      <Label className="form-check-label">
                        <Input
                          className="reg-inputs"
                          type="radio"
                          name="sex"
                          id="female"
                          value="female"
                          checked={values.sex === "female"}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        Female
                        <span className="form-check-sign"></span>
                      </Label>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="DOB">
                      Date of Birth
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="date"
                      name="DOB"
                      id="DOB"
                      min="02-02-2020"
                      value={values.DOB}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.DOB && errors.DOB
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.DOB && errors.DOB ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.DOB}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="nationality">
                      Nationality
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="Nationality"
                      id="Nationality"
                      placeholder="Enter Your Nationality"
                      value={values.Nationality}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.Nationality && errors.Nationality
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.Nationality && errors.Nationality ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.Nationality}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="exampleEmail">
                      Email address
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Enter email"
                      value={values.email}
                      required
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.email && errors.email
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.email && errors.email ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.email}
                      </div>
                    ) : null}
                    <FormText color="muted">
                      We'll never share your email with anyone else.
                    </FormText>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="fax">
                      Fax
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      className="reg-inputs"
                      type="text"
                      name="fax"
                      id="fax"
                      placeholder="Enter Fax Number"
                      required
                      value={values.fax}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.fax && errors.fax
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.fax && errors.fax ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.fax}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Telephone">
                      Telephone (Mobile)
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="telephone"
                      id="telephone"
                      placeholder="Enter Telephone Number"
                      required
                      value={values.telephone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.telephone && errors.telephone
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.telephone && errors.telephone ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.telephone}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="interest">
                      What is your area of interest or what you intend to
                      contribute to the HRMAU?
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="textarea"
                      min="50"
                      row="2"
                      name="interest"
                      id="exampleText"
                      required
                      value={values.interest}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.interest && errors.interest
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.interest && errors.interest ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.interest}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* ------------------------------------------------------------------------------- */}
          <Row className="text-center">
            <Col md={10} className="mr-auto mb-5">
              <strong>
                <u className="font-weight-bold font-17">QUALIFICATION </u>
              </strong>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="mr-auto ml-5">
              <Row className="mt-2">
                <Col md={10} className="mx-auto">
                  <FormGroup>
                    <Label className="font-weight-bold" for="Telephone">
                      Qualification /Training?
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="textarea"
                      min="50"
                      row="3"
                      name="qualification"
                      id="qualification"
                      required
                      value={values.qualification}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.qualification && errors.qualification
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.qualification && errors.qualification ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.qualification}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col md={10} className="mx-auto">
                  <FormGroup>
                    <Label className="font-weight-bold" for="Telephone">
                      Relevant Experience/Research or Publications?
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="textarea"
                      min="50"
                      row="3"
                      name="experience"
                      id="experience"
                      required
                      value={values.experience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.experience && errors.experience
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.experience && errors.experience ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.experience}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Label check className="p-4">
                  <Input type="checkbox" onChange={declaring} /> I confirm that
                  the information I have provided is a representation of all
                  my/our personal, academic, professional, organizational
                  profile.
                  <span className="form-check-sign">
                    <span className="check"></span>
                  </span>
                </Label>
                {submitError === "success" ? (
                  <Alert
                    className=" mt-2"
                    color="success"
                    isOpen={visible}
                    toggle={onDismiss}>
                    <strong>Aplication submitted successfully</strong> <br />
                    We shall update you about the request on your Email. Thank
                    you...
                  </Alert>
                ) : null}
                {submitError === "error occuired" ? (
                  <Alert
                    className=" mt-2"
                    color="danger"
                    isOpen={visible}
                    toggle={onDismiss}>
                    <strong className="mr-5">
                      Error Occured While applying
                    </strong>
                    <br />
                    Please Apply again
                  </Alert>
                ) : null}
              </Row>
            </Col>
          </Row>
          <Button
            size="md"
            variant="outline-info"
            className="outline-custom-purple ml-4 mt-2"
            type="submit"
            disabled={!declar || loading === "submiting" ? true : false}
            onClick={handleSubmit}>
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>{" "}
            {loading === "submiting"
              ? "Submiting Wait..."
              : "Submit Application"}
          </Button>
        </form>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ retired }) => {
  const { userData, loading, submitError } = retired;
  return { userData, loading, submitError };
};
export default connect(mapStateToProps, { submit_retired })(Retired);
