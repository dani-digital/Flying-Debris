import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function CarouselImages() {

  return (
    <div class="carousel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay stopOnHover>

        <div>
          <img src="../AltusOK.jpg" alt="Altus , OK 7/22  "/>
        </div>
        <div>
          <img src="../HollisOK.jpg" alt="Hollis , OK 7/22"/>
        </div>
        <div>
          <img src="../BurtCountyOaklandNE.jpg" alt="Burt County Fair in Oakland, NE 7/18"/>
        </div>
        <div>
          <img src="../closeuphead.jpg" alt="description here"/>
        </div>
      </Carousel>
    </div>
  );

}









//  export default function CarouselImages() {
   

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