import React from "react"
import Footer from "../footer/Footer"
import IMPC_PNG from "../img/IMPC_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Impc = () => {

    const salientFeatures = [
                                "Applicable for both single phase and three phase Exhaust Fans",
                                "Degree of protection – IP54",
                                "Fan Run Status",
                                "Alarm Status",
                                "Display for monitoring and changing set points",
                                "RS 485 Communication",
                                "Sensor failure detection"
                            ]
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv">
                <h2 className = "display-2 h2Heading" 
                style = {{position: "relative", top: "20px"}}
                >
                    INTELLIGENT MOTOR PROTECTION CONTROLLER
                </h2>
            </div>
            <div className = "container">
                <div className = "descriptionDiv2">
                    <div>
                        <h2 className = "display-4">DESCRIPTION</h2>
                        <p>
                            INTRODUCTION OF IMPC IS TO PROTECT THE MOTOR OR CONNECTING 
                            LOAD FROM ALL THE STANDARD PROTECTION FEATURE AND VIA 
                            INTEGRATED METERING VISUALIZES THE READINGS WHICH ENSURES 
                            COMPLETE PROTECTION OF THE EQUIPMENT FROM ELECTRICAL HAZARDS.
                        </p>
                    </div>
                     <div className = "row">
                         <div className = "col-md-6">
                            <h2 className = "display-4">SALIENT FEATURES</h2>
                            <div>  
                                <ul>
                                    <li>Basic.</li>
                                    <li>Advanced[RS485].</li>
                                </ul>
                            </div>
                        </div>
                        <div className = "col-md-6" >
                            <img
                                className="d-block h-800 w-50"
                                style = {{marginLeft: "20px"}}
                                src={IMPC_PNG}
                                alt="slide"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Impc