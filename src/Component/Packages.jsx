import React from 'react'
import img from './assets/slider-img.jpg'
import img1 from './assets/bridel-img.jpg'
import img2 from './assets/slider-2.jpg'

const Packages = () => {
  return (
      <section id='pricing' className="packages-section">

        <div className="container">

          <div className="section-heading dark-heading reveal-heading">

            <span>OUR PACKAGES</span>

            <h2>
              Choose Your
              <em> Style</em>
            </h2>

            <p>
              Beautiful stitching packages designed for every
              need and occasion.
            </p>

          </div>


          <div className="row g-4 mt-4">

            <div className="col-md-6 col-lg-4">

              <div className="package-card">
<img  src={img2} alt="dress img" />
                <span className="package-label">
                  ESSENTIAL
                </span>

                <h3>
                  Casual
                </h3>

                <div className="package-price">
                  PKR 1,500+
                </div>

                <p>
                  Perfect for everyday elegance.
                </p>

                <ul>
                  <li>Custom Measurements</li>
                  <li>Quality Stitching</li>
                  <li>Basic Finishing</li>
                  <li>Ready In 5–7 Days</li>
                </ul>

                <button>
                  Choose Package
                </button>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="package-card popular">

                <div className="popular-badge">
                  MOST POPULAR
                </div>
<img  src={img1} alt="dress img" />

                <span className="package-label">
                  SIGNATURE
                </span>

                <h3>
                  Bridal
                </h3>

                <div className="package-price">
                  PKR 25,000+
                </div>

                <p>
                  Made for your most special moments.
                </p>

                <ul>
                  <li>Detailed Measurements</li>
                  <li>Premium Finishing</li>
                  <li>Elegant Embellishments</li>
                  <li>Priority Service</li>
                </ul>

                <button>
                  Choose Package
                </button>

              </div>

            </div>


            <div className="col-md-6 col-lg-4">

              <div className="package-card">
<img  src={img} alt="dress img" />

                <span className="package-label">
                  PREMIUM
                </span>

                <h3>
                  Formal
                </h3>

                <div className="package-price">
                  PKR 8,000+
                </div>

                <p>
                  Sophisticated looks for special occasions.
                </p>

                <ul>
                  <li>Premium Fabric Guidance</li>
                  <li>Perfect Fitting</li>
                  <li>Detailed Finishing</li>
                  <li>Priority Delivery</li>
                </ul>

                <button>
                  Choose Package
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


)
}

export default Packages