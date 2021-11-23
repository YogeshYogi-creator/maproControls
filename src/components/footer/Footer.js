import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import { BsHouseDoorFill } from "react-icons/bs"
import { BsTelephoneInboundFill } from "react-icons/bs"
import { BsMailbox2 } from "react-icons/bs"
import { BsGlobe } from "react-icons/bs"
import "./footer.css"
const Footer = () => {
    const [year, setYear] = useState("")
    useEffect(()=>{
        const now = new Date()
        const yr = now.getFullYear()
        setYear(yr)
    }, [])

    return (
        <div className = "backgroundColor mt-4 container">
            <div className = "productsList row">
                <div className = "col-md-6">
                    <h4 className = "footerProducts_h3 mt-3 mb-3">OUR PRODUCTS</h4>

                        <ul>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/asp">Auto Sequential Panel - ASP</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/sldp">Electronic Fire Damper Control Panel -SLDP</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/swap2">Electronic Pump Control Panel for Condensate water removal -SWAP 2</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/spic">Electronic Single Phase Intelligent Controller for Single Phase Motors-SPIC</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/hcp">Hydrogen / CO / CO2 Monitoring and Control Panel</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/impc">Intelligent Motor Protection Controller (IMPC) Integrated Starter Panels</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/electricalPanels">Electrical Panels</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/automation">Automation</Link></p></li>
                            <li className = "footerLi"><p><Link className = "footerLi" to = "/userManual">User Manual's</Link></p></li>
                        </ul>

                </div>
                <div className = "col-md-6" style = {{paddingLeft: "10px"}}>
                    <h4 className = "footerContact_h3 mt-3 mb-3">CONTACT US</h4>
                    
                    <p className = "footerLi" style = {{display: "flex"}}>
                        <div>
                            <h1 className = "footerIcon" style = {{paddingLeft: "50px"}}><BsHouseDoorFill/></h1>
                        </div>
                        <div style = {{marginLeft: "40px"}}>
                            #1077/3, 1st Main, 1st Cross, Raghavendra Layout, 80 ft.
                            Road, Gubbalala,Bangalore-560061.
                        </div>
                    </p>
                    <hr className = "footerLi"/>
                    <p className = "footerLi" style = {{display: "flex"}}>
                        <div>
                            <h1 className = "footerIcon" style = {{paddingLeft: "50px"}}><BsTelephoneInboundFill/></h1>
                        </div>
                        <div style = {{marginLeft: "40px"}}>
                            +91 9901419277 <br/>
                            080 29780777
                        </div>
                    </p>
                    <hr className = "footerLi"/>

                    <p className = "footerLi" style = {{display: "flex"}}>
                        <div >
                            <h1 className = "footerIcon" style = {{paddingLeft: "50px"}}><BsMailbox2/></h1>
                        </div>
                        <div style = {{marginLeft: "40px"}}>
                            <p className = "footerLi" style = {{marginTop: "15px"}}>akash@maprocontrols.com</p>
                        </div>
                    </p>
                    <hr className = "footerLi"/>

                    <p className = "footerLi" style = {{display: "flex"}}>
                        <div>
                            <h1 className = "footerIcon" style = {{paddingLeft: "50px"}}><BsGlobe/></h1>
                        </div>
                        <div style = {{marginLeft: "40px"}}>
                            <p className = "footerLi" style = {{marginTop: "15px"}}>www.maprocontrols.com</p>
                        </div>
                    </p>
                </div>
            </div>
            <hr className = "footerLi"/>
            <div>
                <p className = "footerLi" style = {{textAlign: "center", paddingBottom: "10px"}}> @{year} by V V Technologies </p>
            </div>
        </div>
    )
}
export default Footer