import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddInventory} from './AddInventory';
import {EditInventory} from './EditInventory';

export class Inventory extends Component{

    constructor(props){
        super(props);
        this.state={invs:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("http://127.0.0.1:8000/inventory")
        .then(response=>response.json())
        .then(data=>{
            this.setState({invs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteInv(itemid){
        if(window.confirm('Are you sure?')){
            fetch("http://127.0.0.1:8000/inventory/"+itemid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {invs, itemid,itemname,waho}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ItemID</th>
                        <th>ItemName</th>
                        <th>CityName</th>
                        
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invs.map(inv=>
                            <tr key={inv.ItemID}>
                                <td>{inv.ItemID}</td>
                                <td>{inv.ItemName}</td>
                                <td>{inv.CityName}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        itemid:inv.ItemID,itemname:inv.ItemName,waho:inv.CityName,
        photofilename:inv.PhotoFileName,doj:inv.DateOfJoining})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteInv(inv.ItemID)}>
            Delete
        </Button>

        <EditInventory show={this.state.editModalShow}
        onHide={editModalClose}
        itemid={itemid}
        itemname={itemname}
        waho={waho}
       
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add item</Button>

                    <AddInventory show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}