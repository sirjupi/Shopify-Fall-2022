import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditInventory extends Component{
    constructor(props){
        super(props);
        this.state={whs:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    photofilename = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    componentDidMount(){
        fetch("http://127.0.0.1:8000/warehouse")
        .then(response=>response.json())
        .then(data=>{
            this.setState({whs:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://127.0.0.1:8000/inventory",{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ItemID:event.target.ItemID.value,
                ItemName:event.target.ItemName.value,
                CityName:event.target.CityName.value
                

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


   
    render(){
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
            Edit item
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="ItemID">
                        <Form.Label>ItemID</Form.Label>
                        <Form.Control type="text" name="ItemID" required 
                        placeholder="ItemID"
                        disabled
                        defaultValue={this.props.itemid}/>
                    </Form.Group>

                    <Form.Group controlId="ItemName">
                        <Form.Label>ItemName</Form.Label>
                        <Form.Control type="text" name="ItemName" required 
                        defaultValue={this.props.itemname}
                        placeholder="ItemName"/>
                    </Form.Group>

                    <Form.Group controlId="CityName">
                        <Form.Label>CityName</Form.Label>
                        <Form.Control as="select" defaultValue={this.props.waho}>
                        {this.state.whs.map(wh=>
                            <option key={wh.WarehouseID}>{wh.City}</option>)}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="DateOfJoining">
                        <Form.Label>DateOfJoining</Form.Label>
                        <Form.Control 
                        type="date"
                        name="DateOfJoining"
                        required
                        placeholder="DateOfJoining"
                        defaultValue={this.props.doj}
                        />
                       
                        
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Employee
                        </Button>
                    </Form.Group>
                </Form>
            </Col>

            
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}