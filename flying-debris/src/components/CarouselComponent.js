import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CarouselImages() {

  return (
    <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover>

        <div>
          <img src="../straightjacket2.jpg"/>
        </div>
        <div>
          <img src="../juggling.jpg"/>
        </div>
        <div>
          <img src="../straightjacket.jpg"/>
        </div>
        <div>
          <img src="../closeuphead.jpg"/>
        </div>
      </Carousel>
    </div>
  );

}









// export default function CarouselImages() {
//   

//     const captionStyle = {
//       fontSize: '2em',
//       fontWeight: 'bold',
//     }
//     const slideNumberStyle = {
//       fontSize: '20px',
//       fontWeight: 'bold',
//     }
//     return (
//       <div className="App">
//         <div style={{ textAlign: "center" }}>
//           <h2>React Carousel Minimal</h2>
//           <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
//           <div style={{
//             padding: "0 20px"
//           }}>
//             <Carousel
//               data={data}
              
//             />
//           </div>
//         </div>
//       </div>
//     );
//   }


