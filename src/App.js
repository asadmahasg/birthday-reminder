import React from 'react'
import Style from './App.css'
import Heading from './components/Heading';
import PersonList from './components/PersonList';
import ClearButton from './components/ClearButton'

function App(){
  return(
    <div className="white-card" style={Style}>
      <div className="content-inside">
          <Heading />
          <PersonList />
          <ClearButton />
      </div> 
      
    </div>
  );
}

export default App;
