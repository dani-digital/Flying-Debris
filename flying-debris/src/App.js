import React from 'react';
import './style.css';
import CarouselImages from './components/CarouselComponent';
import  About  from './components/AboutComponent';
import Sidebar from './components/Sidebar';
//import logo from './assets/Flyinglogo.jpg';

function App() {
  return(
    <div id="body">
      <Header/>
      <Sidebar/>
      <CarouselImages/>
      <Card
      className="section"
      title=" Flying Debris Show"
      description="The Flying Debris Show featuring Richard Holmgren is a comedy variety show filled zany stunts, fun tricks, audience participation, and always includes an inspirational message. Richard will work with you one on one to ensure your event is the best it can be!"
      />
      <Card
      className='section bg-grey'
      
      />
      <Card
      //className="section"
      //img="./Customawning3.jpg"
      //title=" Where can I get some?"
      //description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.!"
      />
    


      <About/>
    </div>
  );
}

const Header=()=>{
  return (
    <div className='header'>
      {/* <img src={logo} alt = "logo"/>; */}
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