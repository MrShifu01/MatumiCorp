import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact text-bg-dark bg-gradient py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="text-center mb-5">
              <h2 className="about-title text-uppercase fw-bold text-light">Contact</h2>
              <hr className="w-25 mx-auto" />
              <p>
                Tel: (011) 283 7700 ​ Address: The Reserve, 54 Melville Rd,
                Illovo, Johannesburg Email: jane@matumicorp.co.za
                patrick@matumicorp.co.za philip@matumicorp.co.za
              </p>

              <h2 className="mb-4">Get in Touch</h2>
              <p className="lead">
                We welcome all inquiries and would be delighted to hear from
                you. Please don't hesitate to reach out to us for any questions
                or business opportunities.
              </p>
            </div>
            <form className="form" name="contact" netlify>
              <div className="mb-5">
                <label className="form-label text-white">Name</label>
                <input
                  type="text"
                  className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                  name="name"
                />
              </div>

              <div className="mb-5">
                <label className="form-label text-white">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
                />
              </div>

              <div className="mb-5">
                <label className="form-label text-white">Message</label>
                <textarea
                  name="message"
                  className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white "
                ></textarea>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-lg btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
