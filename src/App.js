import React from 'react'
import Style from './App.css'
import PersonDetail from './components/PersonDetail'

function App(){
  return(
    <div className="white-card">
      <div className="content-inside">
          <p className="heading">5 birthdays today</p>
          <PersonDetail />
      </div> 
      
    </div>
  );
}

export default App;
