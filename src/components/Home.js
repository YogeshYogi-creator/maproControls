import React from "react"
import {Carousel} from "react-bootstrap"
import ASPIMAGE from "./img/ASP-IMAGE.png"
import SLDPIMAGE from "./img/SLDP-IMAGE.png"
import SWAPIMAGE from "./img/SWAP-IMAGE.png"
import HCPIMAGE from "./img/HCP-IMAGE.png"
import IMPCIMAGE from "./img/IMPC-IMAGE.png"
import SPICIMAGE from "./img/SPIC-IMAGE.png"
import Footer from "./footer/Footer"
import "./styles/home.css"

const Home = () => {
    const imgs = [ASPIMAGE, SLDPIMAGE, SWAPIMAGE, HCPIMAGE, IMPCIMAGE, SPICIMAGE]
    return(
        <div className = "bgColor">
            <div className = "testimonial">
                <Carousel>
                    {imgs.map((ele)=>{
                       return (
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ele}
                                alt="slide"
                            />
                        </Carousel.Item>
                       ) 
                    })}
                </Carousel>
            </div>
            
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default Home