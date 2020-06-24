import React from 'react';
import './App.css';
import Header from './Header'
import Bio from './Bio';
import Education from './Education';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer'

function App() {
  const name = "Blake";

  return (
    <div className="App">
      <main>
      <Header name='sally-student'/>
      <Bio />
      <Education />
      <Work />
      <Contact />
      <Footer />
      </main>
    </div>
  );
}

export default App;