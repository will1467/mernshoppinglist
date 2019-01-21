import React, {Component} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container} from 'reactstrap';

export default class AppNavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen : false
        }
        // this.toggle = this.toggle.bind(this);
    }

    //If we do arrow function syntax we don't need to use this.toggle.bind(this)
    toggle = () => {
        this.setState({isOpen : !this.state.isOpen})
    }

    render(){
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                       <NavbarBrand href="/">Shopping List</NavbarBrand>
                       <NavbarToggler onClick = {this.toggle} />
                       <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem/>
                            <NavLink href="http://google.com">
                                Github
                            </NavLink>
                        </Nav>
                       </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

}