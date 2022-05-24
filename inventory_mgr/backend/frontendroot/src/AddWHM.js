import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, ButtonToolbar } from "react-bootstrap";

export class AddWHM extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/warehouse", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        WarehouseID: null,
        City: event.target.City.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("City already has a warehouse, please choose another!");
        }
      );
  }
  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clooseButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add warehouse
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="City">
                    <Form.Label>
                      <h4>Which city is this warehouse located?</h4>For
                      simplicity, the city location will be the assigned name to
                      the warehouse added.
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="City"
                      required
                      placeholder="City"
                    />
                    <br></br>
                  </Form.Group>

                  <Form.Group>
                    <ButtonToolbar>
                      <Button className="button -blue center" type="submit">
                        Add Warehouse
                      </Button>
                    </ButtonToolbar>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
