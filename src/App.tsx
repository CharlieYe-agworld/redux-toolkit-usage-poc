import React from 'react';
import './App.css';
import Tickets from "./components/Tickets";
import BlankSpace from "./utils/BlankSpace";

function App() {
  return (
      <div className="App">
        <BlankSpace rem={2}/>
        <Tickets/>
      </div>
  );
}

export default App;
