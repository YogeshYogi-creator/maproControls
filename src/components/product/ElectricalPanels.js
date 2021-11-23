import React from "react"
import Footer from "../footer/Footer"
import ELECTRICAL_PANEL_PNG from "../img/ELECTRICAL_PANEL_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Sldp = () => {

    const uniqueFeatures = [
                                "CAR PARK VENTILATION Panels",
                                "LT panels - MCC, PCC, Plant Room, Basement Ventilation Applications",
                                "PLC based Control Panels – HVAC, Pharma, Chiller Plant Manager Applications",
                                "Electro mechanic Control Panel Direct Start",
                                "Star – Delta Starters",
                                "VFD Based Starter Panels (DOL & Star/Delta)",
                                "Single Phase Starter Panels",
                                "On/off – 24 Hour setting Timer Panels",
                                "Lighting Distribution Boards",
                                "Metering Panels",
                                "DG Synchronizing Panels",
                                "Capacitor Panels, Fire Panels, AMF Panels",
                                "Starter Panels with optional BMS support",
                                "Nominal IP ratings of IP52, IP 54, IP55, Ip65",
                                "Power Supply 3~50Hz, 380~415V AC +/- 10%",
                                "Short Circuit and Over Current protection (MCB/MCCB/MPCB)",
                                "Overload protection",
                                "Phase failure protection"
                            ]
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv">
                <h2 className = "display-3 h2Heading" 
                // style = {{position: "relative", top: "20px"}}
                >ELECTRICAL PANEL
                </h2>
            </div>
            <div className = "container">
                <div className = "descriptionDiv2">
                    <div className = "row">
                        <div className = "col-md-6">
                            <h2 className = "display-5" style = {{marginTop: "10px"}}>DESCRIPTION</h2>
                            <p>
                                We offer Entire Electrical Panel Solutions with Schneider 
                                Switch Gears Tag line says “Designed for the Essential” 
                                We design and manufacture wide varieties of Panels includes:
                            </p>
                            <div>
                                <h2 className = "display-5">Unique Features</h2>
                                <ul>
                                    {uniqueFeatures.map((ele, i)=>{
                                        return <li key = {i}>{ele}</li>
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className = "col-md-6">
                            <img
                                className="d-block w-100"
                                style = {{marginTop: "10px"}}
                                src={ELECTRICAL_PANEL_PNG}
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
export default Sldp