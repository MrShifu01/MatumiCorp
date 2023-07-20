import '../App.css';

const Hero = () => {
  return (
    <div className='container-fluid hero-image vh-100' id='hero'>
        <div className='row'>
          <div className='col-md-8 offset-md-3'>
            <div className='d-flex flex-column hero-text'>
              <h6 className='text-uppercase text-sm'>Welcome to</h6>
              <h1 className='heading'>Matumi Corporate Advisers</h1>
              <p className='lead'>Matumi is a boutique M&A advisory firm specializing in end-to-end merger and acquisition services across various sectors, including healthcare, logistics, and technology.</p>
              <div>
                <button className='btn btn-lg btn-light mt-2' variant="light" size="lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Hero;
