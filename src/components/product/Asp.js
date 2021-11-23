import React from "react"
import Footer from "../footer/Footer"
import ASP_PNG from "../img/ASP_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Asp = () => {

    const salientFeatures = [
                             "GSM-SIC Module and RS 485 Integrated",
                             "Alarm Configuration via SMS",
                             "Units Controllable via SMS",
                             "Optional Module for VRF unit integration",
                             "Provision for Damper Actuator Control with On/Off Delay",
                             "Real Time Controller - RTC integrated",
                             "16x2 LCD Display",
                             "4-LED indication for Unit Status",
                             "1-LED indication for Alarm",
                             "4- Bicolor LED indication for Pump Status",
                             "Push Button interface",
                             "Password Protection",
                             "PT-100 based temperature measurement",
                             "Degree of Protection - IP54",
                             "Cold rolled close annealed (CRCA) Sheet – 18 gauge",
                             "Fresh Air Vent and Exhaust fan for Air Circulation and Protection of PCBs",
                             "Less Weight and Easy to mount, too suitable for Gypsum Mould Partitions",
                              "Customized Design"
                            ]
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv">
                <h2 className = "display-2 h2Heading">AUTO SEQUENTIAL PANEL</h2>
            </div>
            <div className = "container">
                <div className = "descriptionDiv2">
                    <h2 className = "display-4">DESCRIPTION</h2>
                    <p>
                        Auto Sequential Panel is uniquely designed to control maximum of 
                        4 units with separate set points, differentials and time delays 
                        for each units. They are specifically designed for air conditioning 
                        applications wherein the units get cuts off at desired set points and 
                        is restarted at a temperature of set points plus differential. 
                        ASP features sequential operation of units with desired time 
                        intervals and thus makes the units no overload conditions.
                        <br/>
                        <br/>
                        We have integrated GSM Module with new advanced Panel with SIC. 
                        All the critical alarms will be notified via SMS to preconfigured 
                        mobile numbers. We can save maximum of 5 Mobile numbers. 
                        Most volatile feature is that we can control, switching on/off, 
                        set point changes like that upto 22 settings we can set via one master 
                        Mobile number.Upto 20 alarm Event Loggers we can view with this SIC.
                    </p>
                </div>
                <div className = "descriptionDiv2 row">
                    <h2 className = "display-4">SALIENT FEATURES</h2>
                    <div className = "col-md-6">
                        
                        <ul>
                            {salientFeatures.map((ele, i)=>{
                                return <li key = {i}>{ele}</li>
                            })}
                        </ul>
                    </div>
                    <div className = "col-md-6">
                            <img
                                className="d-block h-auto w-100"
                                // style = {{marginLeft: "80px"}}
                                src={ASP_PNG}
                                alt="slide"
                            />
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Asp