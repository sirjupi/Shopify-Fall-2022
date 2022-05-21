import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddWHM} from './AddWHM';
import {EditWHM} from './EditWHM';

export class Warehouse extends Component{

    constructor(props){
        super(props);
        this.state={whs:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('http://127.0.0.1:8000/warehouse')
        .then(response=>response.json())
        .then(data=>{
            this.setState({whs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    DeleteWar(whid){
        if(window.confirm('Are you sure?')){
            fetch('http://127.0.0.1:8000/warehouse/'+whid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {whs, whid,cityname}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>WarehouseID</th>
                        <th>City</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {whs.map(wh=>
                            <tr key={wh.WarehouseID}>
                                <td>{wh.WarehouseID}</td>
                                <td>{wh.City}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        whid:wh.WarehouseID,cityname:wh.City})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.DeleteWar(wh.WarehouseID)}>
            Delete
        </Button>

        <EditWHM show={this.state.editModalShow}
        onHide={editModalClose}
        whid={whid}
        cityname={cityname}/>
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Warehouse</Button>

                    <AddWHM show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}