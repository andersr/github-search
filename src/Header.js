import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

class Header extends Component {
    render() {
        return (
            <Navbar className={"teal"} brand='Github User Search' right style={{ paddingLeft: 10, paddingRight: 10 }}>
            </Navbar>
        );
    }
}

export default Header;
