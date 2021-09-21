import React from "react";
import Style from '../App.css';
import logo from '../Images/image2.jpeg'

function PersonDetail(props){
    return(
        <div className="person" style={Style}>
            <div className="row">
                <div className="img-Div">
                    <img src={logo} alt="" className="personImage"></img>
                </div>
                <div className="details">
                    <h2 className="personName">{props.name}</h2>
                    <p className="personAge">{props.age}</p>
                </div>
            </div>
            
            
        </div>
    )
}
export default PersonDetail