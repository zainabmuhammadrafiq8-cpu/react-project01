import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

import React from 'react'
import Hero from './Component/Hero'
import State from './Component/State'
import Services from './Component/Services'
import About from './Component/About'
import Gallary from './Component/Gallary'
import Packages from './Component/Packages'
import Testimonial from './Component/Testimonial'
import Consultation from './Component/Consultation'
import Footer from './Component/Footer'
import ZRNavbar from './Component/Navbar';
import IndividualIntervalsExample from './Component/IndividualIntervalsExample';

const App = () => {
  return (
<>
<ZRNavbar/>
<Hero/>
<State/>
<IndividualIntervalsExample/>
<Services/>
<About/>
<Gallary/>
<Packages/>
<Testimonial/>
<Consultation/>
<Footer/>

</>
  )
}

export default App
