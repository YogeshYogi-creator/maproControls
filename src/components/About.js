import React from "react"
import {Carousel} from "react-bootstrap"

import whoWeAre from "./img/whoWeAre.jpg"
import hiTech from "./img/hiTech.png"
import streamLine from "./img/streamLine.png"
import hiTechComponents from "./img/hiTechComponents.png"
import streamLineComponents from "./img/streamLineComponents.png"

import one from "./img/one.png"
import two from "./img/two.jpg"
import three from "./img/three.png"
import four from "./img/four.png"
import five from "./img/five.png"
import six from "./img/six.png"
import seven from "./img/seven.png"
import eight from "./img/eight.png"
import nine from "./img/nine.png"
import ten from "./img/ten.png"

import Footer from "./footer/Footer"

import "./styles/aboutUs.css"
const About = () => {

    const imgs = [one, two, three, four, five, six, seven, eight, nine, ten]

    return(
        <div>
            <div>
                <h2 className = "display-2">WELCOME TO</h2>
                <h3 id = "three" className = "display-6"><b>MAPRO CONTROLS</b></h3>
                <p>
                    We are one of the most trusted LT panel Manufacturers in South India. 
                    “MARPO CONTROLS” incepted in 2007 by trained, experienced professionals 
                    in HVAC&R and Electrical field with five decade experience.

                    We believe in bringing latest innovative technologies catering to the 
                    industry in various market segments through association with our partners 
                    adding value to our customers on a consistent basis.
                </p>
            </div>

            <center>
                <div className = "row">
                    <div className = "col-md-4">
                        <div className="card text-white bg-danger mb-3" style={{maxWidth: "18rem"}}>
                            <div className="card-header"><h5>Experienced professionals</h5></div>
                                <div className="card-body">
                                    {/* <h5 className="card-title">Danger card title</h5> */}
                                    <p className="card-text">We are a team of professional and skilled experts having years of experience.</p>
                                </div>
                            </div>
                    </div>

                    <div className = "col-md-4">
                        <div className="card text-dark bg-warning mb-3" style={{maxWidth: "18rem"}}>
                            <div className="card-header"><h5>Innovative Technology</h5></div>
                                <div className="card-body">
                                    {/* <h5 className="card-title">Warning card title</h5> */}
                                    <p className="card-text">We are one of the most trusted LT panel Manufacturers <br/>in South India.</p>
                                </div>
                        </div>
                    </div>

                    <div className = "col-md-4">
                        <div className="card text-white bg-dark mb-3" style={{maxWidth: "18rem"}}>
                            <div className="card-header"><h5>24x7 service</h5></div>
                                <div className="card-body">
                                    {/* <h5 className="card-title">Dark card title</h5> */}
                                    <p className="card-text">Skilled technicians to ensure an effective solution to reduce the minimal breakdown.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </center>
                <hr/>
            
                <div className = "row">
                    <h2 className = "display-4">WHO WE ARE</h2>
                    <div className = "col-md-6">
                        <p>
                            We are one of the most trusted LT panel Manufactures in South India. 
                            “MAPRO” incepted in 2007 by trained, experienced professionals in 
                            HVAC&R and Electrical field with five decade experience. 
                            We believe in bringing latest innovative technologies catering to
                            the industry in various market segments through association with 
                            our partners adding value to our customers on a consistent basis.
                        </p>
                    </div>
                    <div className = "col-md-6">
                        <img src = {whoWeAre} alt = "who we are" height = "100%" width = "100%"/>
                    </div>
                </div>
                    <hr/>
                <div className = "row mt-2">
                    <h2 className = "display-4">OUR EXTENDED ARMS</h2>
                    <div className = "col-md-6">
                        <center>
                            <h5>Hi-tech Electric & Refrigeration Company</h5>
                            
                            <img src = {hiTech} alt = "hiTech"/> <br/>
                        </center>

                        We thank you for allowing us to introduce Hi-Tech Electric & 
                        Refrigeration Co. to you as one of the leading HVAC-R spares supplier.
                        <br/>
                        <b>Contact:</b>
                        <br/>
                        Land-line number: 080-22886183
                        <br/>
                        Mobile: +919341264630
                        <br/>
                        Mail Id: sales@hitechref.com
                        <br/>
                        <img src = {hiTechComponents} alt = "hiTechComponents" height = "20%" weidth = "80%"/>
                    </div>
                    <div className = "col-md-6">
                        <center>
                            <h5>Streamline Refrigeration Pvt Ltd</h5>

                            <img src = {streamLine} alt = "streamLine"/> <br/>
                        </center>

                        HVAC&R industry is one of the fastest growing industry, 
                        and we take a pride to be a part of it. 
                        This industry has taught us that we need to work very 
                        close to the customers from the day one...
                        <br/>
                        <b>Contact:</b>
                        <br/>
                        Land-line number: 080-42113464
                        <br/>
                        Mobile: +91-9341264630
                        <br/>
                        Mail Id: sales@streamlineref.com
                        <br/>
                        <img src = {streamLineComponents} alt = "streamLineComponents" height = "20%" weidth = "80%"/>
                    </div>
                </div>
                    <hr/>
                <div>
                    <h2 className = "display-4">OUR FULFILLED ESTEEMED PROJECTS
                        WITH OUR CONTRACTORS
                    </h2>
                    <div className = "testimonial">
                        <Carousel>
                            {imgs.map((ele)=>{
                            return (
                                <Carousel.Item interval={1500}>
                                    <img
                                        className="d-block h-50 w-100"
                                        src={ele}
                                        alt="slide"
                                    />
                                </Carousel.Item>
                            ) 
                            })}
                        </Carousel>
                    </div>
                </div>
                <hr/>
                <div>
                    <Footer/>
                </div>
            </div>

    )
}
export default About