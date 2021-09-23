import React from "react";
import data from "../PersonData";

function Heading(){
    var count = 0;
    data.forEach(function(item){
        if(!item.__proto__.__proto__){
            count++;
        }
    });
    return(
        <div>
            <p className="heading">{count>0?count:"No"} birthdays today</p>
        </div>
    )

}

export default Heading;
