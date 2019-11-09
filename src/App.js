import React from 'react';
import Nav from './Components/Nav'
import CandidatLogin from './Screens/Candidature/CandidatLogin'

import CandidatInscription from './Screens/Candidature/CandidatInscription';
import './static/css/style.css'


function App() {
  return (
    <div className="App">
      <div>

      
      <Nav/>
      <CandidatLogin />
      <CandidatInscription/>
      
      </div>
    </div>
  );
}

export default App;
