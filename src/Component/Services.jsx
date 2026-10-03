import React from 'react';
import img from './assets/bridel-img.jpg';
import img1 from './assets/slider-2.jpg'
import img2 from './assets/repai-dress.jpg'
const Services = () => {
  return (
      <section id='services' className="services-section">

        <div className="container">

          <div className="section-heading reveal-heading">

            <span>OUR SERVICES</span>

            <h2>
              Tailored To Your
              <em> Style</em>
            </h2>

            <p>
              Every outfit is carefully crafted according to your
              personality, measurements and occasion.
            </p>

          </div>


          <div className="row g-4 mt-4">

            <div className="col-md-4">
              <div className="service-card">

<img src={img} alt="drees"  className='img-style'/>
                <h3>
                  Bridal Wear
                </h3>

                <p>
                  Elegant bridal outfits designed with delicate
                  detailing and flawless fitting.
                </p>

                <span className="service-link">
                  Explore Service
                </span>

              </div>
            </div>


            <div className="col-md-4">
              <div className="service-card featured-service">

<img src={img1} alt="drees " className='img-style' />

                <h3>
                  Casual Stitching
                </h3>

                <p>
                  Comfortable everyday outfits with a refined
                  and modern finish.
                </p>

                <span className="service-link">
                  Explore Service
                </span>

              </div>
            </div>


            <div className="col-md-4">
              <div className="service-card">

<img src={img2} alt="drees " className='img-style' />

                <h3>
                  Alteration & Repairs
                </h3>

                <p>
                  Professional alterations and repairs for
                  your favourite outfits.
                </p>

                <span className="service-link">
                  Explore Service
                </span>

              </div>
            </div>

          </div>

        </div>

      </section>


  )
}

export default Services