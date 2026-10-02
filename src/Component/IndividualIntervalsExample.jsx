import Carousel from 'react-bootstrap/Carousel';
import img from "./assets/slidle-=img1.jpg";
import img1 from "./assets/slider-2.jpg";
import img2 from "./assets/slider-img.jpg"



function IndividualIntervalsExample() {
  return (
    <>
    <Carousel style={{ maxWidth: '900px', margin: '0 auto' }}>
      <Carousel.Item interval={1000}>
<img 
  className="d-block  w-100" 
  src={img2}
  alt="First slide" 
   style={{ height: '450px', objectFit: 'cover', objectPosition: 'center' ,borderRadius:'20px'}} 
/>
        <Carousel.Caption>
          <h3>The Art of Perfect Fitting</h3>
          <p>Ek bridal dress tabhi khubsoorat lagti hai jab uski fitting bilkul lajawab ho. Hum har bride ki body posture ke mutabiq customized stitching karte hain taake unhein mile mukammal comfort aur be-misaal look.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
<img 
  className="d-block w-100" 
  src={img} 
  alt="First slide" 
   style={{ height: '450px', objectFit: 'cover', objectPosition: 'center',borderRadius:'20px' }} 
/>
        <Carousel.Caption>
          <h3>Craftsmanship in Every Stitch</h3>
          <p>Humari expert tailoring team har lace, har panel, aur har lining ko itni nazaqat se jorti hai ke dress ka heavy kaam bhi bilkul safe aur up-to-the-mark rehta hai.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img 
  className="d-block w-100" 
  src={img1}
  alt="First slide"
   style={{ height: '450px', objectFit: 'cover', objectPosition: 'center',borderRadius:'20px' }}  
/>
        <Carousel.Caption>
          <h3>Customized Design & Flared Perfection</h3>
          <p>
Customized Neckline banwani ho—hum aapke khwaab ko haqeeqat ka roop dete hain. Hum har kali aur har border ko perfect angle par stitch karte hain.
💎
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</>
  );
}

export default IndividualIntervalsExample;