import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddInventory } from "./AddInventory";
import { EditInventory } from "./EditInventory";

export class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = { invs: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch("http://127.0.0.1:8000/inventory")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ invs: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteInv(itemid) {
    if (window.confirm("Are you sure?")) {
      fetch("http://127.0.0.1:8000/inventory/" + itemid, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  render() {
    const { invs, itemid, itemname, waho, whid } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Name</th>
              <th> Warehouse Assigned</th>

              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {invs.map((inv) => (
              <tr key={inv.ItemID}>
                <td>{inv.ItemID}</td>
                <td>{inv.ItemName}</td>
                <td>{inv.CityName}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="button -dark center"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          itemid: inv.ItemID,
                          itemname: inv.ItemName,
                          waho: inv.CityName,
                          whid: inv.WarehouseID,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="button -red center"
                      variant="danger"
                      onClick={() => this.deleteInv(inv.ItemID)}
                    >
                      Delete
                    </Button>

                    <EditInventory
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      itemid={itemid}
                      itemname={itemname}
                      waho={waho}
                      whid={whid}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button
            className="button -blue center"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add item
          </Button>

          <AddInventory show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
      </div>
    );
  }
}
