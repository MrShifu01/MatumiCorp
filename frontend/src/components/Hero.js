import React from 'react';

const Hero = () => {
  return (
    <div className='hero-container'>
      {/* Container for the background image */}
      <div className='hero-image'></div>
      <div className='hero-overlay'></div>

      {/* Container for the hero text */}
      <div className='hero-text'>
        <h6 className='text-uppercase text-sm'>Welcome to</h6>
        <h1 className='heading'>Matumi Corporate Advisers</h1>
        <p className='lead'>
          Matumi is a boutique M&A advisory firm specializing in end-to-end merger and acquisition services across various sectors, including healthcare, logistics, and technology.
        </p>
        <div>
          <button className='btn btn-lg btn-light mt-2' variant="light" size="lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
