import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import {
    FormGroup,
    Label,
    Input,
    FormText,
    Row,
    Button,
    Col,
    Alert
} from "reactstrap";
import { submit_student } from "../../actions/studentACtion";

const Student = ({ submit_student, userData, loading, submitError }) => {
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);
    const [declar, setDeclar] = useState(false);
    const declaring = () => setDeclar(!declar);
    const [selectedFile, setSelectedFile] = useState();
    const handleUpload = event => {
        setSelectedFile(event.target.files[0]);
    };
    useEffect(() => {
        return () => {};
    }, []);
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
                instituteName: "",
                std_completion: ""
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
                email: Yup.string()
                    .email("Invalid email")
                    .required("Enter your email"),
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
                    .max(200, "Too Long!")
                    .required("Enter your Interest"),
                experience: Yup.string().required("Enter your experience"),
                qualification: Yup.string().required(
                    "Enter your qualification"
                ),
                instituteName: Yup.string().required(
                    "Enter your institute Name"
                ),
                std_completion: Yup.string().required("Enter your Completions")
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                var studentData = new FormData();
                studentData.append("dob", values.DOB);
                studentData.append("nationality", values.Nationality);
                studentData.append("email", values.email);
                studentData.append("experience", values.experience);
                studentData.append("fax", values.fax);
                studentData.append("institutionName", values.instituteName);
                studentData.append("target", values.interest);
                studentData.append("otherNames", values.otherName);
                studentData.append("qualification", values.qualification);
                studentData.append("sex", values.sex);
                studentData.append("completions", values.std_completion);
                studentData.append("surname", values.surname);
                studentData.append("telephone", values.telephone);
                studentData.append("title", values.title);
                studentData.append("studentFile", selectedFile);
                submit_student(studentData);
                resetForm({});
                setDeclar(true);
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
                <form className="mb-4">
                    <Row className="text-center">
                        <Col md={10} className="mr-auto mb-5">
                            <strong>
                                <u className="font-weight-bold font-17">
                                    PERSONAL DETAILS
                                </u>
                            </strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10} className="mr-auto ml-5">
                            <Row className="mt-2">
                                <Col>
                                    <FormGroup>
                                        <Label
                                            className="font-weight-bold"
                                            for="surname"
                                        >
                                            SurName
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                                touched.surname &&
                                                errors.surname
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
                                        <Label
                                            className="font-weight-bold"
                                            for="Title"
                                        >
                                            Title
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                        <Label
                                            className="font-weight-bold"
                                            for="otherName"
                                        >
                                            Other Names
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                                touched.otherName &&
                                                errors.otherName
                                                    ? "reg-inputs errorInput"
                                                    : "reg-inputs"
                                            }
                                        />
                                        {touched.otherName &&
                                        errors.otherName ? (
                                            <div className="text-danger mt-1 font-12">
                                                {errors.otherName}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label
                                            className="font-weight-bold"
                                            for="sex"
                                        >
                                            Sex
                                        </Label>{" "}
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
                                        <br />
                                        <FormGroup check>
                                            <Label check>
                                                <Input
                                                    className="reg-inputs custom-radio"
                                                    type="radio"
                                                    name="sex"
                                                    id="male"
                                                    value="male"
                                                    checked={
                                                        values.sex === "male"
                                                    }
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                Male
                                            </Label>

                                            <Label check>
                                                <Input
                                                    className="reg-inputs"
                                                    type="radio"
                                                    name="sex"
                                                    id="female"
                                                    value="female"
                                                    checked={
                                                        values.sex === "female"
                                                    }
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                />
                                                Female
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col>
                                    <FormGroup>
                                        <Label
                                            className="font-weight-bold"
                                            for="DOB"
                                        >
                                            Date of Birth
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                        <Label
                                            className="font-weight-bold"
                                            for="nationality"
                                        >
                                            Nationality
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                                touched.Nationality &&
                                                errors.Nationality
                                                    ? "reg-inputs errorInput"
                                                    : "reg-inputs"
                                            }
                                        />
                                        {touched.Nationality &&
                                        errors.Nationality ? (
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
                                        <Label
                                            className="font-weight-bold"
                                            for="exampleEmail"
                                        >
                                            Email address
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                            We'll never share your email with
                                            anyone else.
                                        </FormText>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label
                                            className="font-weight-bold"
                                            for="fax"
                                        >
                                            Fax
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                        <Label
                                            className="font-weight-bold"
                                            for="Telephone"
                                        >
                                            Telephone (Mobile)
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                                touched.telephone &&
                                                errors.telephone
                                                    ? "reg-inputs errorInput"
                                                    : "reg-inputs"
                                            }
                                        />
                                        {touched.telephone &&
                                        errors.telephone ? (
                                            <div className="text-danger mt-1 font-12">
                                                {errors.telephone}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                        <Label
                                            className="font-weight-bold"
                                            for="interest"
                                        >
                                            What is your area of interest or
                                            what you intend to contribute to the
                                            HRMAU?
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                                touched.interest &&
                                                errors.interest
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

                    {/* -------------------------------------------------------------------------------- */}

                    <Row className="text-center">
                        <Col md={10} className="mr-auto mb-5">
                            <strong>
                                <u className="font-weight-bold font-17">
                                    QUALIFICATION{" "}
                                </u>
                            </strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10} className="mr-auto ml-5">
                            <Row className="mt-2">
                                <Col md={10} className="mx-auto">
                                    <FormGroup>
                                        <Label
                                            className="font-weight-bold"
                                            for="Telephone"
                                        >
                                            Qualification /Training?
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                                touched.qualification &&
                                                errors.qualification
                                                    ? "reg-inputs errorInput"
                                                    : "reg-inputs"
                                            }
                                        />
                                        {touched.qualification &&
                                        errors.qualification ? (
                                            <div className="text-danger mt-1 font-12">
                                                {errors.qualification}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                </Col>
                                <Col md={10} className="mx-auto">
                                    <FormGroup>
                                        <Label
                                            className="font-weight-bold"
                                            for="Telephone"
                                        >
                                            Relevant Experience/Research or
                                            Publications?
                                        </Label>
                                        <span className="text-danger font-12 ml-2">
                                            *
                                        </span>
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
                                                touched.experience &&
                                                errors.experience
                                                    ? "reg-inputs errorInput"
                                                    : "reg-inputs"
                                            }
                                        />
                                        {touched.experience &&
                                        errors.experience ? (
                                            <div className="text-danger mt-1 font-12">
                                                {errors.experience}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {/* -------------------------------------------------------------------------------------- */}

                    <Row className="text-center">
                        <Col md={10} className="mr-auto mb-5">
                            <strong>
                                <u className="font-weight-bold font-17">
                                    EDUCATION INFORMATION{" "}
                                </u>
                            </strong>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <FormGroup>
                                <Label for="instituteName">
                                    Institution/University/College Name
                                    <span className="text-danger font-12 ml-2">
                                        *
                                    </span>
                                </Label>
                                <Input
                                    className="reg-inputs"
                                    type="text"
                                    name="instituteName"
                                    id="instituteName"
                                    placeholder="Enter InstituteName"
                                    required
                                    value={values.instituteName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        touched.instituteName &&
                                        errors.instituteName
                                            ? "reg-inputs errorInput"
                                            : "reg-inputs"
                                    }
                                />
                                {touched.instituteName &&
                                errors.instituteName ? (
                                    <div className="text-danger mt-1 font-12">
                                        {errors.instituteName}
                                    </div>
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="qualitication">
                                    Resource related Qualifications
                                    <span className="text-danger font-12 ml-2">
                                        *
                                    </span>
                                </Label>
                                <Input
                                    type="file"
                                    multiple
                                    onChange={handleUpload}
                                    name="qualifications"
                                    required
                                />
                                <FormText color="danger">
                                    <i>
                                        • Attach photocopies of academic
                                        transcripts and a passport photograph,
                                        All in one file.(Vital)
                                    </i>
                                </FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="completion">
                                    What do you hope to complete{" "}
                                    <span className="text-danger font-12 ml-2">
                                        *
                                    </span>
                                </Label>
                                <Input
                                    className="reg-inputs"
                                    type="text"
                                    name="std_completion"
                                    id="std_completion"
                                    placeholder="Enter completion"
                                    required
                                    value={values.std_completion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        touched.std_completion &&
                                        errors.std_completion
                                            ? "reg-inputs errorInput"
                                            : "reg-inputs"
                                    }
                                />
                                {touched.std_completion &&
                                errors.std_completion ? (
                                    <div className="text-danger mt-1 font-12">
                                        {errors.std_completion}
                                    </div>
                                ) : null}
                            </FormGroup>
                        </Col>
                        <Label check className="p-4">
                            <Input type="checkbox" onChange={declaring} /> I
                            confirm that the information I have provided is a
                            representation of all my/our personal, academic,
                            professional, organizational profile.
                            <span className="form-check-sign">
                                <span className="check"></span>
                            </span>
                        </Label>
                        {submitError === "success" ? (
                            <Alert
                                className=" mt-2"
                                color="success"
                                isOpen={visible}
                                toggle={onDismiss}
                            >
                                <strong>
                                    Aplication submitted successfully
                                </strong>{" "}
                                <br />
                                We shall update you about the request on your
                                Email. Thank you...
                            </Alert>
                        ) : null}
                        {submitError === "error occuired" ? (
                            <Alert
                                className=" mt-2"
                                color="danger"
                                isOpen={visible}
                                toggle={onDismiss}
                            >
                                <strong className="mr-5">
                                    Error Occured While applying
                                </strong>
                                <br />
                                Please Apply again
                            </Alert>
                        ) : null}
                    </Row>
                    <Button
                        size="md"
                        variant="outline-info"
                        className="outline-custom-purple ml-4 mt-2"
                        type="submit"
                        disabled={
                            !declar || loading === "submiting" ? true : false
                        }
                        onClick={handleSubmit}
                    >
                        <i
                            className="fa fa-check-circle-o"
                            aria-hidden="true"
                        ></i>{" "}
                        {loading === "submiting"
                            ? "Submiting Wait..."
                            : "Submit Application"}
                    </Button>
                </form>
            )}
        </Formik>
    );
};
const mapStateToProps = ({ student }) => {
    const { userData, loading, submitError } = student;
    return { userData, loading, submitError };
};
export default connect(mapStateToProps, { submit_student })(Student);
