import React from "react";
import Style from '../App.css';
import data from "../PersonData";

function ClearButton(){
    function BtnHandler(){
        data.forEach(element => {
            console.log(element.name);
        });
    }
    return(
        <div className="btn-div" style={Style}>
            <button className="clear-button" onClick={BtnHandler}>Clear All</button>
        </div>
    );
}

export default ClearButton;