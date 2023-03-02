import React from 'react';
import './App.css';
import Tickets from "./components/Tickets";
import BlankSpace from "./utils/BlankSpace";
import Blogs from "./components/Blogs";

function App() {
  return (
      <div className="App">
        <BlankSpace rem={2}/>
        <Tickets/>
        <BlankSpace rem={2}/>
        <Blogs/>
      </div>
  );
}

export default App;
