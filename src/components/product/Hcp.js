import React from "react"
import Footer from "../footer/Footer"
import HCP_PNG from "../img/HCP_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Hcp = () => {

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
                <h2 className = "display-2 h2Heading">HYDROGEN CONTROL PANEL</h2>
            </div>
            <div className = "container">
                <div className = "descriptionDiv2">
                    <div>
                        <h2 className = "display-4">DESCRIPTION</h2>
                        <p>
                            We Samritu newly introducing our Hydrogen Sensor Panel which is 
                            used for Battery Room applications.
                        </p>
                    </div>
                     <div className = "row">
                         <div className = "col-md-6">
                            <h2 className = "display-4">SALIENT FEATURES</h2>
                            <div>  
                                <ul>
                                    {salientFeatures.map((ele, i)=>{
                                        return <li key = {i}>{ele}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className = "col-md-6" >
                            <img
                                className="d-block h-800 w-50"
                                style = {{marginLeft: "20px"}}
                                src={HCP_PNG}
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
export default Hcp