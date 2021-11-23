import React from "react"
import Footer from "../footer/Footer"
import SPIC1_PNG from "../img/SPIC1_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Spic = () => {

    const salientFeatures = [
                                "Ratings from 0.37KW to 2.2KW",
                                "Degree of protection – IP20",
                                "Over/Under Voltage, Over Current protection",
                                "Motor ON/OFF Command",
                                "Motor ON/OFF Status",
                                "Auto/Manual Status",
                                "Trip Status",
                                "Integrated with RS 485 Communication port."
                            ]
    const types = [
                    "Basic",
                    "With 24 hours Timer",
                    "Low/medium/high speed control (for FCU)",
                    "Optional enclosure with dimmer control"
                    ]
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv" style = {{height: "300px"}}>
                <h2 className = "display-2 h2Heading">ELECTRONIC SINGLE PHASE STARTER PANEL (SPIC)</h2>
            </div>
            <div className = "container">
                <div className = "descriptionDiv2">
                    <h2 className = "display-4">DESCRIPTION</h2>
                    <p>
                        MAPRO introducing a new unique design concept for Single phase 
                        starter. Normally single phase starters are used to just on/off 
                        the motor. But our new Single Phase Intelligent Controller(SPIC) 
                        protects the motor from all hazards like Under Voltage/Over 
                        Voltage protection, over current/under Current protections. 
                        SPICfeatures highly advanced technology with ABS FR rated 
                        enclosure easily mountable via Din Rail Channel.
                    </p>
                </div>
                <div className = "descriptionDiv2">
                    <div className = "row">
                        <div className = "col-md-6">
                            <h2 className = "display-4">SPIC FEATURES</h2>
                            <div>
                                <ul>
                                    {salientFeatures.map((ele, i)=>{
                                        return <li key = {i}>{ele}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className = "col-md-6">
                            <img
                                className="d-block w-100"
                                // style = {{marginTop: "80px"}}
                                src={SPIC1_PNG}
                                alt="slide"
                            />
                        </div>
                  </div>
                    <div>
                        <h2 className = "display-4">TYPES</h2>
                        <div>
                            <ul>
                                {types.map((ele, i)=>{
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
export default Spic