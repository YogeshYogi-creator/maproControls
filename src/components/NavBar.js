import React from "react"
import { Route, Link } from "react-router-dom"
import maproLogo from "./img/maproLogo.png"
// import "bootstrap/dist/css/bootstrap.css"
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import Home from "./Home"
import About from "./About"
import Products from "./Products"
import Contact from "./Contact"
import UserManual from "./UserManual"

import Asp from "./product/Asp"
import Sldp from "./product/Sldp"
import Swap2 from "./product/Swap2"
import Spic from "./product/Spic"
import Hcp from "./product/Hcp"
import Impc from "./product/Impc"
import ElectricalPanels from "./product/ElectricalPanels"
import Automation from "./product/Automation"

import {BsWhatsapp} from "react-icons/bs"
import {BsEnvelopeOpenFill} from "react-icons/bs"
import "./product/navBar.css"
const NavBar = () => {

    return (
        <>
        <Navbar expand = "lg" style = {{backgroundColor: "white"}}>
            <Navbar.Brand sticky = "top" style = {{width: "50%"}}>
                <Link to = "/"><img src = {maproLogo} width= "300px" height= "100px" alt = "logo"/></Link>
            </Navbar.Brand>

            <Navbar.Toggle/>
            <Navbar.Collapse style = {{textAlign: "right"}}>
            <Nav>
                <Nav.Link><Link className = "btn" to = "/">Home</Link></Nav.Link>
                <Nav.Link><Link className = "btn" to = "/about">About</Link></Nav.Link>
                <NavDropdown className = "btn" title = "Products" to = "/products" style = {{textAlign: "right"}}>
                    <NavDropdown.Item><Link className = "btn" to = "/asp">ASP Panels</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className = "btn" to = "/sldp">SLDP Panels</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className = "btn" to = "/swap2">SWAP 2 Panels</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className = "btn" to = "/spic">SPIC Panels</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className = "btn" to = "/hcp">HCP Panels</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className = "btn" to = "/impc">IMPC Panels</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className = "btn" to = "/electricalPanels">Electrical Panels</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link className = "btn" to = "/automation">Automation</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link className = "btn" to = "/contact">Contact</Link></Nav.Link>
                <Nav.Link><Link className = "btn" to = "/userManual">User Manual</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div>
                <div>
                    <div style = {{display: "flex", textAlign: "right"}}>
                            <a className = "btn" target = "_blank" href = "https://api.whatsapp.com/send?phone=919901419277&text=&source=&data=&app_absent=">
                                <BsWhatsapp style={{color: "green", height: "30px", width: "30px"}}/>
                            </a>
                            <a  className = "btn" target = "_blank" href = "mailto: akash@maprocontrols.com">
                                <BsEnvelopeOpenFill href = "mailto: akash@maprocontrols.com" style={{color: "red", height: "30px", width: "30px"}}/>
                            </a>
                    </div>
                </div>
        </div>
        <div className = "line"></div>
            <div>
                <Route path = "/" exact = "true"><Home/></Route>
                <Route path = "/about"><About/></Route>
                <Route path = "/products"><Products/></Route>
                <Route path = "/contact"><Contact/></Route>
                <Route path = "/userManual"><UserManual/></Route>

                <Route path = "/asp"><Asp/></Route>
                <Route path = "/sldp"><Sldp/></Route>
                <Route path = "/swap2"><Swap2/></Route>
                <Route path = "/spic"><Spic/></Route>
                <Route path = "/hcp"><Hcp/></Route>
                <Route path = "/impc"><Impc/></Route>
                <Route path = "/electricalPanels"><ElectricalPanels/></Route>
                <Route path = "/automation"><Automation/></Route>
            </div>
        </>
    )
}
export default NavBar