import React from "react";
import Style from '../App.css';
import logo from '../Images/image2.jpeg'

function PersonDetail(){
    return(
        <div className="person">
            <div className="row">
                <div className="img-Div">
                    <img src={logo} alt="" className="personImage"></img>
                </div>
                <div className="details">
                    <h2 className="personName">Alex Smith</h2>
                    <p className="personAge">29 years</p>
                </div>
            </div>
            
            
        </div>
    )
}
export default PersonDetail