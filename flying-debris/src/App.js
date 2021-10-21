import React from 'react';
import './style.css';
import CarouselImages from './components/CarouselComponent';
import  About  from './components/AboutComponent';


function App() {
  return(
    <div id="body">
      <CarouselImages/>
      <About/>
      
    </div>
  );
}


export default App;