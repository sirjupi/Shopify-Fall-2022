import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, ButtonToolbar } from "react-bootstrap";

export class EditWHM extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/warehouse", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        WarehouseID: event.target.WarehouseID.value,
        City: event.target.City.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Another warehouse exists in this city, choose another!");
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
              Edit Warehouse
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="WarehouseID">
                    <Form.Label>WarehouseID</Form.Label>
                    <Form.Control
                      type="text"
                      name="WarehouseID"
                      required
                      disabled
                      defaultValue={this.props.whid}
                      placeholder="City"
                    />
                  </Form.Group>
                  <br></br>
                  <Form.Group controlId="CityNamse">
                    <Form.Label>City location</Form.Label>
                    <Form.Control
                      type="text"
                      name="City"
                      required
                      defaultValue={this.props.cityname}
                      placeholder="City"
                    />
                    <br></br>
                  </Form.Group>

                  <Form.Group>
                    <ButtonToolbar>
                      <Button className="button -blue center" type="submit">
                        Update Warehouse
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
