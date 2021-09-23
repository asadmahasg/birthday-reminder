import React from "react";
import Style from '../App.css';
import data from "../PersonData";

function ClearButton(){
    function BtnHandler(){
        data.forEach(element => {
            const index = data.indexOf(element);
            data.splice(index,1);   
        });
        // window.location.reload(false);
    }
    return(
        <div className="btn-div" style={Style}>
            <button className="clear-button" onClick={BtnHandler}>Clear All</button>
        </div>
    );
}

export default ClearButton;