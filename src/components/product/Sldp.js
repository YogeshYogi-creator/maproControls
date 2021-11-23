import React from "react"
import Footer from "../footer/Footer"
import SLDP_PNG from "../img/SLDP_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Sldp = () => {

    const models = [
                    "SLDP – 10/230V – For 230V AC Actuator W/O BMS",
                    "SLDP – 10/24V – For 24V AC Actuator W/O BMS",
                    "SDLP – 10/230V/RS - For 230V AC Actuator With BMS(RS485)",
                    "SDLP – 10/24V/RS - For 24V AC Actuator With BMS(RS485)"
                ]

    const uniqueFeatures = [
                                "18 GUAGE Metal Enclosure",
                                "Unique Design With Compact Looks And Maintenance Free",
                                "With In Built Rs485 For Communication",
                                "Suitable up to 10 Actuators",
                                "Test And Reset Option For Manual Testing",
                                "16 x 2 LCD Display",
                                "Individual On/Off Bi-Colour LED Status for Actuators",
                                "Individual LED Status for Fault Indications",
                                "Trip Command From External Units/BMS",
                                "Smoke Detection Input From Smoke Sensor",
                                "Fire Input From Temperature Sensor @ 70 Deg",
                                "Alarm On The Actuator Failure With Reset Function",
                                "Monitoring Of Actuator Running Status In BMS",
                                "Trip Command@ AHU Door Opening",
                                "Adjustable Time Delay For AHU Interlocking",
                                "Remote Reset From BMS",
                                "Individual Status Of Actuators(Provided From Actuators Through Auxiliary Contacts)",
                                "Tripping The AHU In Case Of Fault",
                                "Hoot The External Alarm In Case Of Fault",
                                "Easy Commissioning And Termination",
                                "Two numbers PFC Contacts for Interlocking with Other Equipments."
                            ]
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv">
                <h2 className = "display-3 h2Heading" 
                style = {{position: "relative", top: "20px"}}
                >Electronic Fire Damper Control Panel -SLDP
                </h2>
            </div>
            <div className = "container">
                <div className = "descriptionDiv2">
                    <img
                        className="d-block w-100"
                        style = {{marginTop: "10px"}}
                        src={SLDP_PNG}
                        alt="slide"
                    />
                    <div className = "row">
                        <div className = "col-md-6">
                            <h2 className = "display-5" style = {{marginTop: "10px"}}>DESCRIPTION</h2>
                            <p>
                                We offer Fire Damper Control Panels with ranges for controlling 
                                single actuator to maximum of ten actuators. Our panels are 
                                designed to meet standards of ABS FR rated with easily mountable 
                                via Din Rail Channel. With this new advanced design 
                                technologyoffers less space requirements and maintenance free.
                            </p>
                            <div>
                                <h2 className = "display-5">TYPES</h2>
                                <ul>
                                    <li>Advanced (RS 485 communication)</li>
                                    <li>Basic</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className = "display-5">MODELS</h2>
                                <ul>
                                    {models.map((ele, i)=>{
                                        return <li key = {i}>{ele}</li>
                                    })}
                                </ul>
                            </div>
                            <div>
                                <h2 className = "display-5">APPLICATION's</h2>
                                    <p>
                                        The SLDP panel provides unique damper control features. 
                                        This can be installed in all the applications where dampers 
                                        are installed
                                    </p>
                                <ul>
                                    <li>Battery Room</li>
                                    <li>Server Room</li>
                                    <li>AHU Room</li>
                                </ul>
                                <ul>

                                </ul>
                            </div>
                        </div>
                        <div className = "col-md-6">
                            <h2 className = "display-5">Unique Features</h2>
                            <ul>
                                {uniqueFeatures.map((ele, i)=>{
                                    return <li key = {i}>{ele}</li>
                                })}
                            </ul>
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