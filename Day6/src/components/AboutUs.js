// import React from 'react';
// import './AboutUs.css';

// const AboutUs = () => {
//   return (
//     <div className='about-bg'>
//     <div className='about-box'>
//     <p className='head-text'>ABOUT US</p>
//     <div className='about-text'> 
//     <p>We offer full range of garage services to vehicle owners in Tucson.<br></br> Our professionals know how to handle a wide range of car services.<br></br> Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop.<br></br> Whether you drive a medium sized truck or passenger car or SUV, our mechanics strive to ensure
//     .Our expertise with various vehicles, automotive technologies is as diverse as the people and experience we bring to CarZ®.
//     We believe in the power of ordinary people to do extra ordinary things.<br></br>
//     We employ our collective potential to vastly improve your automotive service experience.<br></br>
//     We all have one thing in common…Passion for the automobile.<br></br>
//     We make one promise…to treat your vehicle as we would our own.<br></br>
//     We take one oath…to never compromise your Vehicle Performance and Occupant Safety!<br></br>
//     Expect from us…Great Service, Budget Price™</p>
//     </div>
//     </div>
//     <div className='features'>
    
 
//     </div>
//     </div>
//     );
//   }

// export default AboutUs;
import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
const AboutUs = () => {
  return (
    <div>
    <Navbar/>
    <br/><br/>
    <div className='about-bg'>
      <div className='about-box'>
      <p className='head-text'>ABOUT US</p>
        <div className='about-text'>
        <br/><br/>  
        <i><p>
            We offer a full range of garage services to vehicle owners in Tucson. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or a medium-sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop. Our expertise with various vehicles and automotive technologies is as diverse as the people and experience we bring to CarZ®.
          </p></i>
          <br/><br/>
          <i><p>
            We believe in the power of ordinary people to do extraordinary things. We employ our collective potential to vastly improve your automotive service experience. We all have one thing in common – passion for the automobile. We make one promise – to treat your vehicle as we would our own. We take one oath – to never compromise your Vehicle Performance and Occupant Safety! Expect from us – Great Service, Budget Price™.
          </p></i>
        </div>
      </div>
      <div className='features'></div>
    </div>
    </div>
  );
};

export default AboutUs;
