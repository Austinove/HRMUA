import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { Tabs, Tab } from "react-bootstrap-tabs";
import CustomHeader from "../../components/Headers/customHeader";

const Membership = () => {
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
                                    Membership
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="main">
                <div className="section pt-4 bg-white text-left">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
                                <h3 className="custom-title font-weight-bold">
                                    Who can be a member?
                                </h3>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i className="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Members
                                    </h4>
                                    <h5 className="description ml-5">
                                        Full-time Practitioners of HRM
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i className="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Associates
                                    </h4>
                                    <h5 className="description ml-5">
                                        Individuals who are not HR practitioners
                                        but are connected to HR practice
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Student Member
                                    </h4>
                                    <h5 className="description ml-5">
                                        Individuals who are undertaking a course
                                        in HRM or related subject
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Retired Members
                                    </h4>
                                    <h5 className="description ml-5">
                                        Individual who have retired in the
                                        active HRM practice
                                    </h5>
                                </div>
                                <div className="first-list mt-3">
                                    <h4 className="title">
                                        <i class="nc-icon nc-single-copy-04 mr-3 custom-color"></i>
                                        Corporate Members
                                    </h4>
                                    <h5 className="description ml-5">
                                        Institutions with the HRM function
                                    </h5>
                                </div>
                            </Col>
                            <Col className="ml-auto mr-auto" md="6">
                                <h3 className="custom-title font-weight-bold">
                                    Join the association today
                                </h3>
                                <p className="mt-4 font-17">
                                    If you meet all the criteria below, please
                                    click register now to begin. Please review
                                    benefits and fees here.
                                </p>
                                <ul>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must have studied Human Resource
                                            Management at undergraduate or
                                            postgraduate level or practicing
                                            Human Resource in formal
                                            organizations
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must not have any criminal record in
                                            employment.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must be willing to comply with the
                                            fees structure.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must be willing to remain
                                            non-political
                                        </p>
                                    </li>
                                    <li>
                                        <p className="mt-4 font-17">
                                            Must be willing to abide by code of
                                            ethics
                                        </p>
                                    </li>
                                </ul>
                                <Link to={`/application`}>
                                    <Button
                                        color="default"
                                        className="btn-round text-capitalize font-weight-normal mt-2"
                                        outline
                                    >
                                        Click to Register{" "}
                                        <i
                                            class="fa fa-arrow-right"
                                            aria-hidden="true"
                                        ></i>
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="section pt-4 bg-white text-left">
                    <Container>
                        <Tabs
                            headerClass="tab-header-bold"
                            activeHeaderClass="tab-header-blue"
                            onSelect={(index, label) =>
                                console.log(label + " selected")
                            }
                        >
                            <Tab label="Benefits" className="mt-5">
                                <Row class>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Corporate Members</u>
                                        </h5>
                                        <p>
                                            Corporate Membership shall be open
                                            to public and private institutions
                                            having a human resource function in
                                            their management. They have no
                                            voting rights.
                                        </p>
                                        <p>
                                            Corporate members will be entitled
                                            to:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Subsidized Professional
                                                    Membership for up to 10 HR
                                                    practitioners within your
                                                    Organisation
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Receive the Association’s
                                                    publications
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Subsidized HR and OD
                                                    Consultancy services
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Obtain information on the HR
                                                    management practice through
                                                    a periodical newsletter
                                                </p>
                                            </li>
                                            <li>
                                                <p>Free job advertisement</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Subsidized shortlisting &
                                                    pre-screening interview
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Subsidized Capacity Building
                                                    or Training on HR topical
                                                    issues (Professional
                                                    Development)
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Subsidized recruitment and
                                                    resourcing
                                                </p>
                                            </li>
                                            <li>
                                                <p>Subsidized staff handling</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Recruitment panel support
                                                    for senior HR roles
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Logo placement on the
                                                    website
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Headhunting and referral at
                                                    reducedcosts
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    On invitation can offer
                                                    Arbitration and mediation
                                                    support where Management and
                                                    staff disagree.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Member Savings</p>
                                            </li>
                                            <li>
                                                <p>Networking</p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Professional Members</u>
                                        </h5>
                                        <p>
                                            Human resource professionals who
                                            have obtained accreditation from
                                            established human Resource
                                            management training institutions,
                                            approved by the Governing Council,
                                            shall be admitted as professional
                                            members of the Association.
                                        </p>
                                        <p>
                                            Professional Members shall be
                                            entitled to:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Contribution to HR
                                                    legislation and Governance
                                                    issues
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Obtain information on the HR
                                                    Management Practices and
                                                    Trends through a periodical
                                                    newsletter.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Annual Recognition of
                                                    outstanding quality
                                                    performance in the HR
                                                    Profession (Annual HR
                                                    REVEAL)
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Subsidized Capacity Building
                                                    or Training on HR topical
                                                    issues
                                                </p>
                                            </li>
                                            <li>
                                                <p>Networking Opportunities</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Free Coaching and Mentoring
                                                    Sessions per Quarter
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Be part of the pressure
                                                    group to safeguard the
                                                    professional interests of
                                                    the members.
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Exercise full voting rights
                                                    in the affairs of the
                                                    Association
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Exclusive Membership Lapel
                                                    pin identification
                                                </p>
                                            </li>
                                            <li>
                                                <p>Exclusive Membership ID</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Platform for access to
                                                    consultancy projects
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Access to upcoming vacancies
                                                    in HR field
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Access to Subsidized Member
                                                    Savings/Capital (For Those
                                                    who join the Human Resource
                                                    Managers SACCO)
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Use the initials PHRMAU
                                                    after their names
                                                </p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Associate/ Student Members</u>
                                        </h5>
                                        <p>
                                            The Association shall admit students
                                            (undergraduate and postgraduate) in
                                            the area of human resource
                                            management practice as Associate
                                            members of the Association.
                                            Associates shallbe entitled to
                                            exercise full voting rights in the
                                            affairs of theAssociation.
                                        </p>
                                        <p>
                                            Associate members will be entitled
                                            to:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Guidance and support to
                                                    members who wish to purse
                                                    Human ResourceManagement
                                                    Practice (CareerSupport)
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Governing Council
                                                    representation
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Career Development sessions
                                                </p>
                                            </li>
                                            <li>
                                                <p>HR Clinic sessions</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Internship placement access
                                                </p>
                                            </li>
                                            <li>
                                                <p>Entry job placement</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Access to senior HR
                                                    professionals
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Access to HR job
                                                    opportunities
                                                </p>
                                            </li>
                                            <li>
                                                <p>Members Savings</p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Honorary Members</u>
                                        </h5>
                                        <p>
                                            The Governing Council may confer
                                            upon individuals, the title of
                                            Honorary member of the Association
                                            in recognition of exceptional,
                                            meritorious or outstanding services,
                                            inwhatever capacity, to the
                                            Association. They will not have any
                                            votingrights.
                                        </p>
                                        <p>
                                            Honorary members will be entitled
                                            to:
                                        </p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Use the letters HHRMAU after
                                                    their names
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Highlighted profile on HRMAU
                                                    communication channels.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Member Savings</p>
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col className="text-justify" md="6">
                                        <h5 className="font-title custom-title font-weight-bold">
                                            <u>Fellows</u>
                                        </h5>
                                        <p>
                                            The Governing Council may confer
                                            fellowships upon members in
                                            recognition of distinction and
                                            outstanding practice in human
                                            resource management, in accordance
                                            with rules to be established by the
                                            Governing Council and approved by
                                            the General Assembly. Fellows shall
                                            be entitled to exercise full voting
                                            rights in the affairs of the
                                            Association.
                                        </p>
                                        <p>Fellows will be entitled to:</p>
                                        <ul>
                                            <li>
                                                <p>
                                                    Use the letters FHRMAU after
                                                    theirnames
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Published on HRMAU Website
                                                    for recognition
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Contribution to HR
                                                    legislation and governance
                                                    issues
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Be part of the pressure
                                                    group to safeguard the
                                                    professional interests of
                                                    the
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Contribution to HR
                                                    legislation and governance
                                                    issues
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Exercise full voting rights
                                                    in the affairs of the
                                                    Association
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Obtain information on the HR
                                                    management practice through
                                                    a periodical newsletter
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Exclusive Membership Lapel
                                                    pin identification
                                                </p>
                                            </li>
                                            <li>
                                                <p>Exclusive Membership ID</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Career transition management
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Benchmarking for HR & OD
                                                    policy, strategy and
                                                    practices
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Annual recognition of
                                                    outstanding quality
                                                    performance in the HR
                                                    Profession
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Platform for access to
                                                    consultancy projects
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Participation in themed
                                                    learning sessions
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Access to annual learning
                                                    program in the profession
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Access to upcoming vacancies
                                                    in HR field
                                                </p>
                                            </li>
                                            <li>
                                                <p>Periodic HR trendsupdates</p>
                                            </li>
                                            <li>
                                                <p>Online resource centre</p>
                                            </li>
                                            <li>
                                                <p>
                                                    Exclusive hrmau@org.ug email
                                                    address for exclusive
                                                    membership only access
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Free participation in one
                                                    workshop annually
                                                </p>
                                            </li>
                                            <li>
                                                <p>
                                                    Access to consultancy
                                                    opportunities
                                                </p>
                                            </li>
                                            <li>
                                                <p>Member Savings</p>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab label="Fees" className="mt-5">
                                <Container>
                                    <Row>
                                        <Col
                                            className="text-left mx-auto"
                                            md="10"
                                        >
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">
                                                            Type of Membership
                                                        </th>
                                                        <th scope="col">
                                                            Membership Fee
                                                        </th>
                                                        <th scope="col">
                                                            Annual
                                                            Subscription(Per
                                                            Year between Jan and
                                                            Dec)
                                                        </th>
                                                        <th>
                                                            Total Fees for new
                                                            members (First Year)
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            Corporate Members
                                                        </th>
                                                        <td scope="row">
                                                            3,000,000 UGX(Once
                                                            every two years)
                                                        </td>
                                                        <td>
                                                            150,000 UGX per
                                                            staff(covers only 10
                                                            members)
                                                        </td>
                                                        <td>
                                                            3,000,000 UGX +
                                                            (150,000 UGX x No of
                                                            members)
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Professional Members
                                                        </th>
                                                        <td>200,000 UGX</td>
                                                        <td>300,000 UGX</td>
                                                        <td>500,000</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Student/Associate
                                                            Members
                                                        </th>
                                                        <td>40,000</td>
                                                        <td>60,000</td>
                                                        <td>100,000</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Honorary and fellow
                                                        </th>
                                                        <td>Free</td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                </Container>
                            </Tab>
                        </Tabs>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Membership;
