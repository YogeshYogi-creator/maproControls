import React from "react"
import Footer from "../footer/Footer"
import SWAP_PNG from "../img/SWAP_PNG.png"
import "../product/products.css"
import "../product/asp.css"
const Swap2 = () => {

    const salientFeatures = [
                                "Advance features in built Rs485 for communication",
                                "Swapping of pump in case of 1st pump fails it automatically swaps to pump-2",
                                "SWAP-2 system is standby, working and auto sequencing of 2 pumps",
                                "Sequencing Of Pump Settings Can Be Done As Per Desired Working Hours",
                                "Automatic Change Over Based On Time Of Running And Standby",
                                "Alarm On The Pump Failure With Reset Function",
                                "Monitoring Of Pump Running Status In BMS",
                                "Unique Design With Compact Looks And Maintenance Free",
                                "With Considering All Safety Panel Box Has Been Made Of FR Grade Material",
                                "Din Rail Type Mounting For Easy Excess And Time Savings",
                                "Easy Commissioning And Termination"
                            ]
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv" style = {{height: "300px"}}>
                <h2 className = "display-2 h2Heading">ELECTRONIC CONTROL PANEL FOR CONDENSATE PUMPS (SWAP 2)</h2>
            </div>
            <div className = "container">
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
                                className="d-block w-100"
                                // style = {{marginTop: "80px"}}
                                src={SWAP_PNG}
                                alt="slide"
                            />
                    </div>
                </div>
                <div>
                    <h2 className = "display-4">APPLICATION</h2>
                    <p>
                        The SWAP 2 unit provides unique features with perfect drain
                        control systems. With 1W and 1S feature SWAP 2 provides 
                        effective drain water control.
                    </p>
                    <ul>
                        <li>BATTERY ROOM</li>
                        <li>SERVER ROOM</li>
                        <li>AHU ROOM</li>
                        <li>CLEAN ROOMS</li>
                    </ul>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Swap2