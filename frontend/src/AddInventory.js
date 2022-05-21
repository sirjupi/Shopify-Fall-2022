import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";

export class AddInventory extends Component {
  constructor(props) {
    super(props);
    this.state = { whs: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  photofilename = "anonymous.png";
  imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;

  componentDidMount() {
    fetch("http://127.0.0.1:8000/warehouse")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ whs: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/inventory", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ItemID: null,
        ItemName: event.target.ItemName.value,
        CityName: event.target.CityName.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  // handleFileSelected(event){
  //     event.preventDefault();
  //     this.photofilename=event.target.files[0].name;
  //     const formData = new FormData();
  //     formData.append(
  //         "myFile",
  //         event.target.files[0],
  //         event.target.files[0].name
  //     );

  //     fetch(process.env.REACT_APP_API+'Employee/SaveFile',{
  //         method:'POST',
  //         body:formData
  //     })
  //     .then(res=>res.json())
  //     .then((result)=>{
  //         this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
  //     },
  //     (error)=>{
  //         alert('Failed');
  //     })

  // }

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
              Add to inventory
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="ItemName">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="ItemName"
                      required
                      placeholder="Item Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="CityName">
                    <Form.Label>Warehouse Location</Form.Label>
                    <Form.Control as="select">
                      {this.state.whs.map((dep) => (
                        <option key={dep.City}>{dep.City}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Add Item to Inventory
                    </Button>
                  </Form.Group>
                </Form>
              </Col>

              {/* <Col sm={6}>
                <Image width="200px" height="200px" src={this.imagesrc}/>
                <input onChange={this.handleFileSelected} type="File"/>
            </Col> */}
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
