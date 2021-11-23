import React from "react"
import ContactForm from "./ContactForm"
import {Card} from "react-bootstrap"
import { BsJoystick } from "react-icons/bs"
import { BsTelephoneInboundFill } from "react-icons/bs"

import Footer from "./footer/Footer"

const Contact = () => {

    return(
        <div className = "row">
            <div className = "col-md-6">
                <h2 className = "display-4">CONTACT INFO</h2>
                    <Card>
                        <Card.Header><h1><BsJoystick/></h1></Card.Header>
                        <Card.Body>
                            <Card.Title>Address</Card.Title>
                            <Card.Text>
                                #1077/3, 1st Main, 1st Cross, Raghavendra Layout, 80 ft. 
                                Road, Gubbalala,Bangalore-560061 
                            </Card.Text>
                        </Card.Body>

                        <Card.Header><h2><BsTelephoneInboundFill/></h2></Card.Header>
                        <Card.Body>
                            <Card.Title>Office Contact Number's</Card.Title>
                            <Card.Text>
                                <p>+91 9901419277</p>
                                <p>080 29780777</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                
                <hr/>

                <center>
                    <div className = "row">
                        <div className = "contactsCards1 col-md-6">
                            <div className="card text-white bg-danger mb-3" style={{maxWidth: "18rem"}}>
                                <div className="card-header"><h5>For Sales Support:</h5></div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title">Danger card title</h5> */}
                                        <p className="card-text">Jyothish Kumar. M <br/>
                                            +91 9686783311
                                        </p>
                                    </div>
                                </div>
                        </div>

                        <div className = "contactsCards2 col-md-6">
                            <div className="card text-dark bg-warning mb-3" style={{maxWidth: "18rem"}}>
                                <div className="card-header"><h5>For Service Support:</h5></div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title">Warning card title</h5> */}
                                        <p className="card-text">Bala. P<br/>+91 8123417656</p>
                                    </div>
                            </div>
                        </div>
                        <center>
                        <div className = "contactsCards3 col-md-6">
                            <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                                <div className="card-header"><h5>For <br/> Accounts:</h5></div>
                                    <div className="card-body">
                                        {/* <h5 className="card-title">Dark card title</h5> */}
                                        <p className="card-text">Rohith Kumar <br/>+91-8892875783</p>
                                    </div>
                            </div>
                        </div>
                        </center>
                    </div>
                </center>
            </div>
            <div className = "col-md-6">
                <h2 className = "display-4">ENTER YOUR DETAILS</h2>
                <ContactForm/>
            </div>
            
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Contact