import React from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import "./contactUs.css";
import { BsTelephone } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("Message Sent");
  };
  return (
    <div className="contact">
      <div className="container-sm ">
        <div className="d-flex justify-content-between">
          <h1>Contact Us</h1>
          <Link className="close" to={"/"}>
            <h5>close x</h5>
          </Link>
        </div>

        <hr className="hr" />
        <Tabs
          defaultActiveKey="EMAIL US"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="EMAIL US" title="EMAIL US">
            <h3>Please complete the form to send us a message.</h3>
            <p>Fields marked with an asterisk (*) are mandatory.</p>
            <Form onSubmit={submitHandler} className="contact-form">
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalReport"
              >
                <Form.Label column sm={4}>
                  Inquiry type*
                </Form.Label>
                <Col sm={8}>
                  <Form.Select aria-label="Default select example">
                    <option>Select from the list</option>
                    <option value="brazil">Request information</option>
                    <option value="2">Request quotation</option>
                    <option value="3">recruitement & jobs</option>
                  </Form.Select>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  First name *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  Last name *
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  Company name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="text" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  Job Title
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="number" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  Your location*
                </Form.Label>
                <Col sm={8}>
                  <Form.Select aria-label="Default select example">
                    <option>Select from the list</option>
                    <option value="brazil">Brazil</option>
                    <option value="2">UAE</option>
                    <option value="3">Tunisia</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  Phone
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="number" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  Email*
                </Form.Label>
                <Col sm={8}>
                  <Form.Control type="email" />
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalName"
              >
                <Form.Label column sm={4}>
                  How can we help?*
                </Form.Label>
                <Col sm={8}>
                  <textarea
                    class="form-control"
                    id="textAreaExample1"
                    rows="4"
                  ></textarea>
                </Col>
              </Form.Group>

              <Form.Group className="mb-3">
                <Col className="d-flex justify-content-center mt-5">
                  <Button variant="danger" type="submit">
                    SEND MESSAGE
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Tab>
          <Tab eventKey="CALL OR VISIT" title="CALL OR VISIT">
            <hr />
            <div className="location-contact">
              <h5>SGS DO BRASIL LTDA.</h5>
              <p>
                Alameda Xingu, 512 - 19º andar Alphaville Industrial Barueri –
                SP, 06455-030 Brazil
              </p>
              <BsTelephone /> : +55 11 3883 8880
            </div>
            <hr />
            <div className="location-contact">
              <h5>SGS ACADEMY - SÃO PAULO - SP</h5>
              <p>
                Av. Paulista, 807 - 16º andar Bairro Bela Vista Sao Paulo – SP,
                01311-100 Brazil
              </p>
              <BsTelephone /> +55 11 3254 7825 <br />
              <BsTelephone /> +55 11 3254 7835
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ContactUs;
