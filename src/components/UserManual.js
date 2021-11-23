import React, {useState} from "react"
import Footer from "./footer/Footer"
import "./product/products.css"
import "./product/asp.css"
import { FormLabel } from "react-bootstrap"
const UserManual = () => {
    const [input, setInput] = useState("")
    let userManualData = [
                                {id: 1, name: "ASP TECHNICAL SUBMITTAL BASIC", pdfFile: "https://drive.google.com/file/d/1jL-ZlLPiDreRjOo-0ZCA-CObvqgA8Lpg/view?usp=sharing"},
                                {id: 2, name: "ASP TECHNICAL SUBMITTAL WITH GSM", pdfFile: "https://drive.google.com/file/d/1hnf2w7M2sFdObBuQULYjLABD0hjUJ3Uh/view?usp=sharing"},
                                {id: 3, name: "ASP TECHNICAL SUBMITTAL WITH RS485", pdfFile: "https://drive.google.com/file/d/1QLkoSzFQD1VgC2GV1OxJKaQNFtfRjSKk/view?usp=sharing"},
                                {id: 4, name: "ELECTRONIC FIRE DAMPER PANEL", pdfFile: "https://drive.google.com/file/d/1WjNvrgSLPxBfVmvgQ0Ze-ZRpjOgO-94t/view?usp=sharing"},
                                {id: 5, name: "HYDROGEN CONTROL PANEL H2 - TECHNICAL", pdfFile: "https://drive.google.com/file/d/1I1OOHRptbd8iKyAXObnsj7grNgDv6byp/view?usp=sharing"},
                                {id: 6, name: "INTELLIGENT MOTOR PROTECTION CONTROLLER", pdfFile: "https://drive.google.com/file/d/1lrtAN5Q4HAtaKADjzhGegUnyuRb0zYWK/view?usp=sharing"},
                                {id: 7, name: "SPIC WITH BUILT IN TIMER - TECHNICAL", pdfFile: "https://drive.google.com/file/d/1ReGApjchXiiwiSs6csG3elPRzzmiqS0q/view?usp=sharing"},
                                {id: 8, name: "SPIC-TECHNICAL - 3 SPEED OPERATION", pdfFile: "https://drive.google.com/file/d/1ReGApjchXiiwiSs6csG3elPRzzmiqS0q/view?usp=sharing"},
                                {id: 9, name: "SPIC-TECHNICAL", pdfFile: "https://drive.google.com/file/d/1dqHr-hwndCSJ4YHdhUQngYoST1iR4r4J/view?usp=sharing"},
                                {id: 10, name: "SWAP-TECHNICAL", pdfFile: "https://drive.google.com/file/d/1tIbJ2v415PjgYsowNc5Xf6dWzawEgJJd/view?usp=sharing"}
                            ]
        const handleInputChange = (e) => {
            e.preventDefault()
            setInput(e.target.value)
        }
        if(input.length>0){
            userManualData = userManualData.filter((ele)=>{
                return ele.name.toLowerCase().match(input)
            })
        }

        const searchStyle = {
            backgroundColor: "#D6D6D6",
            borderColor: "black",
            width: "50%",
            position: "relative",
            margin: "10px"
        }
        const labelStyle = {
            width: "100%",
            margin: "10px"
        }
    return(
        <div className = "descriptionDiv">
            <div className = "headingDiv">
                <h2 className = "display-2 h2Heading">USER MANUAL</h2>
            </div>
            <div>
                <label style = {labelStyle}>
                    <h4 className = "display-6">Search By Name:</h4>
                </label>
                <input className = "form-control" type = "text" placeholder = "Search" onChange = {handleInputChange} value = {input} style = {searchStyle}/>
            </div>
            <div>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Sl.no</th>
                            <th>Name</th>
                            <th>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {userManualData.map((ele, i)=>{
                                return (
                                    <tr>
                                        <td>{ele.id}</td>
                                        <td key = {i}>{ele.name}</td>
                                        <td key = {ele.id}><a className = "btn" href = {`${ele.pdfFile}`} target="_blank" download>Download</a></td>
                                    </tr>
                                    )
                            })}
                        
                    </tbody>
                </table>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default UserManual