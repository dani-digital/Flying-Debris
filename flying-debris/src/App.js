import React from 'react';
import './style.css';
import CarouselImages from './components/CarouselComponent';
import  About  from './components/AboutComponent';
import Contact from './components/ContactComponent';

function App() {
  return(
    <div id="body">
      <CarouselImages/>
      <About/>
      <Contact/>
      {/* {<ContactContainer/> */} 
    </div>
  );
}


export default App;