import React from 'react'
import { Navbar, Nav } from 'reactstrap';
import { BrowserRouter as Router,Route, Link, Switch } from "react-router-dom";
//import pages
import ViewDetails from './ViewDetails';
import Homepage from './Homepage';
import Create from './Create';
import Update from './Update';
import View from './View';

function Navigation() {
    // menu start
    return (
        < Router>

            <Navbar className="headingfont navbar navbar-expand navbar-blue menu">
                <Nav className="navbar-nav mx-auto">
                    <Link to="/#" className="menu-font text-light nav-item nav-link" >Home</Link>
                    <Link to="/view" className="menu-font text-light nav-item nav-link">View</Link>
                    <Link to="/create" className=" menu-font text-light nav-item nav-link" >Create</Link>
                </Nav>
            </Navbar>
            <Switch>
                <Route path="/" exact ><Homepage /></Route>
                <Route path="/view"><View /></Route>
                <Route path='/view' render={(props) => <View {...props} />} />
                <Route path="/create"><Create /></Route>
                <Route path='/update/:id' render={(props) => <Update {...props} />} />
                <Route path='/viewDetails/:id' render={(props) => <ViewDetails {...props} />} />
            </Switch>

        </Router>
    )

}

export default Navigation;