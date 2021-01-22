import React from "react";
// reactstrap components
import {
  Row,
  Container,
  Col,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import client1 from "../../assets/img/logo/client1.jpg";
import client2 from "../../assets/img/logo/client2.jpg";
function PageFooter() {
  return (
    <footer className="footer footer-black footer-white section-dark">
      <Container>
        <Row>
          <Col md={4} sm={6} className="mb-4">
            <ul className="footer-ul">
              <li>
                <h3 className="footer-head mb-4">Contact Info</h3>
                <ul className="inner-ul">
                  <li>
                    Phone: <address> +256706263042</address>
                  </li>
                  <li>
                    Email: <address> bryanovicaustenove@gmail.com</address>
                  </li>
                  <li>
                    Address: <address> Kawempe</address>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="footer-head mb-4">Follow Us</h3>
                <div>
                  <a
                    href="https://www.facebook.com/HRMAU-276558742480268/"
                    target="_blank"
                    className="">
                    <i
                      className="fa fa-custom rounded fa-facebook"
                      aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://instagram.com/hrmauofficial"
                    target="_blank"
                    className="ml-4">
                    <i className="icon rounded fa-custom fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com/HRMAU"
                    target="_blank"
                    className="ml-4">
                    <i className="icon rounded fa-custom fa fa-linkedin"></i>
                  </a>
                </div>
              </li>
            </ul>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <h3 className="footer-head mb-4">Join our mailing list</h3>
            <p className="text-white">
              We will only send you an update once every quarter.
            </p>
            <form>
              <FormGroup className="has-success">
                <Input
                  className="footer-input"
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </FormGroup>
              <FormGroup className="has-success">
                <Input
                  className="footer-input"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </FormGroup>
              <FormGroup htmlFor="exampleEmail" className="has-success">
                <Input
                  className="footer-input"
                  type="email"
                  name="email"
                  id="emailId"
                  placeholder="Email"
                />
              </FormGroup>
              <Button
                className="btn-round font-weight-normal text-capitalize"
                color="neutral"
                type="button"
                size="sm"
                outline>
                Subscribe
              </Button>
            </form>
          </Col>
          <Col md={4} sm={6} className="mb-4">
            <h3 className="footer-head mb-4">Networks & Affiliations</h3>
            <p className="text-white">
              The Human Resource Managers' Association of Uganda is affiliated
              with
            </p>
            <Row>
              <Col md={6}>
                <a href="#">
                  <img
                    src={client1}
                    height={100}
                    className="rounded float-left"
                    alt="client_logo"></img>
                </a>
              </Col>
              <Col md={6}>
                <a href="#">
                  <img
                    height={100}
                    src={client2}
                    className="rounded float-left"
                    alt="client_logo"></img>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default PageFooter;
