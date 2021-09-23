import React from "react";
import Style from '../App.css';

function PersonDetail(props){
  
    return(
        <div className="person" style={Style}>
            <div className="row">
                <div className="img-Div">
                    <img src={props.url} alt="" className="personImage"></img>
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