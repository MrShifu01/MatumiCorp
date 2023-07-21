import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <section className='testimonials bg-info' id='testimonials'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h2 className='about-title text-center text-dark mt-6'>Testimonials</h2>
          <hr class="w-25 mx-auto mb-5 text-black"/>
        </div>
      </div>
      <div className="container-xxl">
          <div className="row">
            <div className="col-md-8 offset-md-2 mb-6">
                <Carousel />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
