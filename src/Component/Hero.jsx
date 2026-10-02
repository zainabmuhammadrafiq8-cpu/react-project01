import React from 'react'
import img from "./assets/dress.jpg"

const Hero = () => {
  return (
      <section className="hero-section">

        {/* Animated background */}
        <div className="stitch-background">

          <div className="floating-orb one"></div>
          <div className="floating-orb two"></div>

          <svg
            className="stitch-svg"
            viewBox="0 0 1600 800"
            preserveAspectRatio="none"
          >

            {/* Main stitch paths */}

            <path
              className="stitch-path"
              d="M-100 180 C250 20 450 350 750 180 S1250 40 1700 230"
            />

            <path
              className="stitch-path secondary"
              d="M-100 430 C250 600 480 250 800 450 S1300 600 1700 390"
            />

            <path
              className="stitch-path"
              d="M-100 670 C250 500 500 760 820 620 S1300 470 1700 650"
            />

          </svg>


          {/* Animated needle */}

          <div className="needle-icon">
            🪡
          </div>

        </div>


        {/* Hero content */}

        <div className="container hero-container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="hero-content">

                <span   className="hero-small">
                  ✦ BESPOKE STITCHING STUDIO
                </span>

                <h1 className="hero-title">
                  Crafted With
                  <span className="gold-shimmer">
                    Elegance
                  </span>
                  <br />
                  Stitched With
                  <span className="gold-shimmer">
                    Love
                  </span>
                </h1>

                <p className="hero-description">
                  Premium bespoke stitching for women who appreciate
                  timeless elegance, perfect fitting and beautiful
                  craftsmanship.
                </p>


                <div className="hero-buttons">

                  <button className="primary-button">
                    Book Consultation
                  </button>

                  <button className="secondary-button">
                    Explore Collection
                  </button>

                </div>


                <div className="hero-features">

                  <div>
                    <span>✦</span>
                    Premium Fabric
                  </div>

                  <div>
                    <span>✦</span>
                    Perfect Fitting
                  </div>

                  <div>
                    <span>✦</span>
                    Handcrafted
                  </div>

                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="hero-image-wrapper">

                <div className="hero-image-decoration"></div>

                <div className="hero-image-box">

                  <img
                    src={img}
                    alt="Bespoke Fashion"
                  />

                  <div className="image-caption">

                    <span>
                      ZR STITCH STUDIO
                    </span>

                    <strong>
                      Made For You
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

)
}

export default Hero