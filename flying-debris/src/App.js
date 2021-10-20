import React from 'react';
import './style.css';
//import { Carousel } from 'react-carousel-minimal';
//import { About } from './AboutComponent';

function App() {
  return(
    <div id="body">
      <Header/>
      <Card/>
      <ContactContainer/>
    </div>
  );
}

const Header=()=>{
  return (
    <div className='header'>
      <span className='header-title'>
            Flying Debris!
      </span>
        <br/>
        <span className="header-text">
            Just flippin' funny!
        </span>
    </div>
  );
}


const Card = (props) =>{
  return (
    <div className={props.className}>
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt=''/>
      </div>
      <div className="big-div">
        <span className="div-title">
            {props.title}
        </span>
        <br/>
        <span>
          {props.description}
        </span>
      </div>
    </div>
  );
}



export default App;