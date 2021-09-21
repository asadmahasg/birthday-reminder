import React from "react";
import Style from '../App.css'

function ClearButton(){
    return(
        <div className="btn-div" style={Style}>
            <button className="clear-button">Clear All</button>
        </div>
    );
}

export default ClearButton;