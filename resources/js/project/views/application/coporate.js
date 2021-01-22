import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Table,
  Button,
  Alert,
} from "reactstrap";

import { submit_coporate } from "../../actions/coporateAction";
var staffMembers = [];
const Coporate = ({ submit_coporate, userData, loading, submitError }) => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  const [declar, setDeclar] = useState(false);
  const declaring = () => setDeclar(!declar);
  const [staffError, setStaffError] = useState("");
  return (
    <Formik
      initialValues={{
        fax: "",
        email: "",
        post: "",
        telephone: "",
        phy_location: "",
        jobTitle: "",
        sector: "",
        staffNumber: "",
        interest: "",
        orgName: "",
        contactPerson: "",
      }}
      validationSchema={Yup.object({
        fax: Yup.string().required("Enter your fax"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Enter your email title"),
        post: Yup.string().required("Enter your post"),
        telephone: Yup.number().required("Enter your telephone"),
        phy_location: Yup.string().required("Enter your physical location"),
        jobTitle: Yup.string().required("Enter your job Title"),
        sector: Yup.string().required("Enter your Sector"),
        staffNumber: Yup.number().required("Enter your staff Number"),
        interest: Yup.string().required("Enter your Interest"),
        orgName: Yup.string().required("Enter Organization Name"),
        contactPerson: Yup.string().required("Enter Contact Person"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (staffMembers.length != values.staffNumber) {
          setStaffError("Staff Number does not match with the list");
        } else {
          setStaffError("");
          values.staffMembers = staffMembers;
          submit_coporate(values);
          staffMembers = [];
          resetForm({});
          setDeclar(false);
        }
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
                <u className="font-weight-bold font-17">
                  ORGANIZATION INFORMATION{" "}
                </u>
              </strong>
            </Col>
          </Row>
          <Row>
            <Col md={10} className="mr-auto ml-5">
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="orgName">
                      Organization Name
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="orgName"
                      id="orgName"
                      placeholder="Enter Organization Name"
                      required
                      value={values.orgName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.orgName && errors.orgName
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.orgName && errors.orgName ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.orgName}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="contactPerson">
                      Contact Person
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="contactPerson"
                      id="contactPerson"
                      placeholder="Enter Contact Person"
                      required
                      value={values.contactPerson}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.contactPerson && errors.contactPerson
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.contactPerson && errors.contactPerson ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.contactPerson}
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
                      id="email"
                      placeholder="Enter email"
                      required
                      value={values.email}
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
                      type="text"
                      name="fax"
                      id="fax"
                      placeholder="Enter fax Number"
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
                      placeholder="Enter telephone Number"
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
                    <Label className="font-weight-bold" for="location">
                      Physical Address
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="phy_location"
                      id="phy_location"
                      placeholder="Enter Physical Address"
                      required
                      value={values.phy_location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.phy_location && errors.phy_location
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.phy_location && errors.phy_location ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.phy_location}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="post">
                      Post Address
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="post"
                      id="post"
                      placeholder="Enter Post Address"
                      required
                      value={values.post}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.post && errors.post
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.post && errors.post ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.post}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Title">
                      Job Title
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      placeholder="Enter Job Title"
                      required
                      value={values.jobTitle}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.jobTitle && errors.jobTitle
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.jobTitle && errors.jobTitle ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.jobTitle}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="organization">
                      What is the main sector of your organization (e.g. Water,
                      Banking e.t.c.)?
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="textarea"
                      min="50"
                      row="2"
                      name="sector"
                      id="secror"
                      required
                      value={values.sector}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.sector && errors.sector
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.sector && errors.sector ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.sector}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Title">
                      Staff Members Joining
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="number"
                      min="1"
                      name="staffNumber"
                      id="staffNumber"
                      placeholder="e.g 1"
                      required
                      value={values.staffNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.staffNumber && errors.staffNumber
                          ? "reg-inputs errorInput"
                          : "reg-inputs"
                      }
                    />
                    {touched.staffNumber && errors.staffNumber ? (
                      <div className="text-danger mt-1 font-12">
                        {errors.staffNumber}
                      </div>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label className="font-weight-bold" for="Telephone">
                      What is your area of interest or what you would like HRMAU
                      to contribute to your organisation??
                    </Label>
                    <span className="text-danger font-12 ml-2">*</span>
                    <Input
                      type="textarea"
                      min="50"
                      row="2"
                      name="interest"
                      id="interest"
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
              <hr />
              <Formik
                initialValues={{
                  name: "",
                  staffTelephone: "",
                  staffEmail: "",
                  staffInterest: "",
                }}
                validationSchema={Yup.object({
                  name: Yup.string().required("Enter your name"),
                  staffTelephone: Yup.number().required(
                    "Enter your staff Telephone"
                  ),
                  staffEmail: Yup.string()
                    .email("Invalid email")
                    .required("Enter your staff Email"),
                  staffInterest: Yup.string().required(
                    "Enter your staff Interest"
                  ),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  staffMembers.push(values);
                  setSubmitting(false);
                  resetForm({});
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
                  <form>
                    <Row className="mt-2">
                      <Row className="mb-4 mt-2">
                        <span className="ml-4 custom-color font-weight-bold font-14">
                          List Interested Staff Members <br />
                          <i className="text-danger font-12">
                            (Make sure the list matches the total number of
                            staff members entered up)
                          </i>
                        </span>
                      </Row>
                      <Row className="mb-4">
                        <Col md={4}>
                          <FormGroup>
                            <Label className="font-weight-bold" for="name">
                              Name
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              type="text"
                              min="1"
                              name="name"
                              id="name"
                              placeholder="e.g 1"
                              required
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.name && errors.name
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.name && errors.name ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.name}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label className="font-weight-bold" for="Telephone">
                              Telephone
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              type="text"
                              name="staffTelephone"
                              id="staffTelephone"
                              required
                              value={values.staffTelephone}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.staffTelephone && errors.staffTelephone
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.staffTelephone && errors.staffTelephone ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.staffTelephone}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={4}>
                          <FormGroup>
                            <Label
                              className="font-weight-bold"
                              for="staffEmail">
                              Email
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              type="email"
                              name="staffEmail"
                              id="staffEmail"
                              placeholder="email@email.com"
                              required
                              value={values.staffEmail}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.staffEmail && errors.staffEmail
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.staffEmail && errors.staffEmail ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.staffEmail}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col md={8}>
                          <FormGroup>
                            <Label className="font-weight-bold" for="Telephone">
                              Area of interest/contribution
                            </Label>
                            <span className="text-danger font-12 ml-2">*</span>
                            <Input
                              type="textarea"
                              min="50"
                              row="2"
                              name="staffInterest"
                              id="staffInterest"
                              required
                              value={values.staffInterest}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={
                                touched.staffInterest && errors.staffInterest
                                  ? "reg-inputs errorInput"
                                  : "reg-inputs"
                              }
                            />
                            {touched.staffInterest && errors.staffInterest ? (
                              <div className="text-danger mt-1 font-12">
                                {errors.staffInterest}
                              </div>
                            ) : null}
                          </FormGroup>
                        </Col>
                        <Col className="vertical-align-center">
                          <Button
                            size="sm"
                            variant="outline-info"
                            className="outline-custom-purple mt-5"
                            type="submit"
                            disabled={isSubmitting}
                            onClick={handleSubmit}>
                            <i
                              className="fa fa-check-circle-o"
                              aria-hidden="true"></i>{" "}
                            Add To List
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Table>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Telephone</th>
                              <th>Interests</th>
                            </tr>
                          </thead>
                          <tbody>
                            {staffMembers.map((staff, index) => (
                              <tr key={index}>
                                <th scope="row">{staff.name}</th>
                                <td>
                                  <i>{staff.staffEmail}</i>
                                </td>
                                <td>{staff.staffTelephone}</td>
                                <td>{staff.staffInterest}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Row>
                      <Label check className="mt-3 p-4">
                        <Input type="checkbox" onChange={declaring} /> I confirm
                        that the information I have provided is a representation
                        of all my/our personal, academic, professional,
                        organizational profile.
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
                          <strong>Aplication submitted successfully</strong>{" "}
                          <br />
                          We shall update you about the request on your Email.
                          Thank you...
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
                      {staffError ===
                      "Staff Number does not match with the list" ? (
                        <Alert className=" mt-2" color="danger">
                          <strong className="mr-5">
                            Staff Number does not match with the listed Staff
                            Members
                          </strong>
                        </Alert>
                      ) : null}
                    </Row>
                  </form>
                )}
              </Formik>
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

const mapStateToProps = ({ coporate }) => {
  const { userData, loading, submitError } = coporate;
  return { userData, loading, submitError };
};
export default connect(mapStateToProps, { submit_coporate })(Coporate);
