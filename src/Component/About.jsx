import React from 'react'
import drees from "./assets/drees-gallary.jpg"
const About = () => {
  return (
      <section id='about' className="about-section">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <div className="about-images">

                <img
                  src={drees}
                  alt="Fashion fabric"
                />

                <div className="about-small-card">
                  <strong>ZR</strong>
                  <span>
                    Crafting Confidence
                  </span>
                </div>

              </div>

            </div>


            <div className="col-lg-6">

              <div className="about-content reveal-heading">

                <span className="section-label">
                  OUR STORY
                </span>

                <h2>
                  Where Every
                  <em> Stitch</em>
                  Tells A Story
                </h2>

                <p>
                  At ZR Stitch Studio, we believe clothing should
                  feel as beautiful as it looks.
                </p>

                <p>
                  From selecting the perfect fabric to the final
                  stitch, every detail receives personal attention.
                  Our goal is simple — to create outfits that feel
                  uniquely yours.
                </p>


                <div className="about-points">

                  <div>
                    <span>✓</span>
                    Personalized Measurements
                  </div>

                  <div>
                    <span>✓</span>
                    Premium Craftsmanship
                  </div>

                  <div>
                    <span>✓</span>
                    Attention To Every Detail
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

)
}

export default About