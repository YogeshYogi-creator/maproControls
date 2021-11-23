import React from "react"
import Footer from "../footer/Footer"
import ASP_PNG from "../img/ASP_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Automation = () => {

    const salientFeatures = [
                             "PLC Based Control Panels for Clean Room applications",
                             "Chiller Plant Manager System",
                             "Energy Management System",
                             "Temperature and Humidity Control",
                             "Temperature and Humidity Displays with Time Clock",
                             "Primary and Secondary Pumping System along with VFD Starters",
                             "CO2, CO level Monitoring and Control Systems",
                             "Energy Meter Integration with HMI and data-logging"
                            ]
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv">
                <h2 className = "display-2 h2Heading">AUTOMATION</h2>
            </div>
            <div className = "container">
                <div className = "descriptionDiv2">
                    <h2 className = "display-4">DESCRIPTION</h2>
                        <ul>
                            {salientFeatures.map((ele, i)=>{
                                return <li key = {i}>{ele}</li>
                            })}
                        </ul>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Automation