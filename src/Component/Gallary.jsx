import React from 'react'
import img from "./assets/bridel-img.jpg"
import img1 from "./assets/simple-drees.jpg"
import img2 from "./assets/dress2.jpg"


const Gallary = () => {
  return (
      <section id='gallery' className="gallery-section">

        <div className="container">

          <div className="section-heading reveal-heading">

            <span>OUR COLLECTION</span>

            <h2>
              Crafted For
              <em> Every Occasion</em>
            </h2>

            <p>
              A glimpse of our bespoke stitching and timeless
              fashion creations.
            </p>

          </div>


          <div className="row g-4 mt-4">

            <div className="col-md-6 col-lg-4">
              <div className="gallery-card">

                <img
                  src={img}
                  alt="Fashion"
                />

                <div className="gallery-overlay">
                  <span>
                    Bridal Collection
                  </span>
                </div>

              </div>
            </div>


            <div className="col-md-6 col-lg-4">
              <div className="gallery-card">

                <img
                  src={img2}
                  alt="Fashion"
                />

                <div className="gallery-overlay">
                  <span>
                    Formal Wear
                  </span>
                </div>

              </div>
            </div>


            <div className="col-md-6 col-lg-4">
              <div className="gallery-card">

                <img
                  src={img1}
                  alt="Fashion"
                />

                <div className="gallery-overlay">
                  <span>
                    Elegant Styles
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>


  )
}

export default Gallary