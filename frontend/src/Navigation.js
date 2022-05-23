import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";

export class Navigation extends Component {
  render() {
    return (
      <div class="center1">
        <svg xmlns="http://www.w3.org/2000/svg">
          <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
          </filter>
        </svg>

        <span filter-content="S">Inventory Manager</span>
        <Navbar>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <div className="wh">
                <NavLink to="/warehouse">
                  <ButtonToolbar>
                    <Button className="button -flower center">
                      Warehouses
                    </Button>
                  </ButtonToolbar>
                </NavLink>
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="in">
                <NavLink to="/inventory">
                  <ButtonToolbar>
                    <Button className="button -flower center">Inventory</Button>
                  </ButtonToolbar>
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
