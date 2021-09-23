import React from "react";
import PersonDetail from "./PersonDetail";
import data from "../PersonData";


function PersonList(){

    const personData = data.map(person=><PersonDetail name={person.name} age={person.age + ' years'} />);
    console.log(personData);
    
    return(
        <div>
            {/* <PersonDetail name="Alex Smith" age="29 years"/>
            <PersonDetail name="Alena Linda" age="32 years"/>
            <PersonDetail name="Stephen Hawken" age="19 years"/>
            <PersonDetail name="Stephen Hawken" age="19 years"/>
            <PersonDetail name="Stephen Hawken" age="19 years"/> */}

            {personData};
            
        </div>
    );
}

export default PersonList
