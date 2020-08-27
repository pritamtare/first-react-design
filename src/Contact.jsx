import React from "react";

const Contact = () => {
  return (
    <>
      <div className="contactBg  text-white">
        <div className="py-5">
          <h1 className="text-center">Contact Us</h1>
        </div>

        <div
          className="container contact_div"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form>
                <div className="form-group row">
                  <label for="name" className="col-sm-3 col-form-label">
                    Full Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Full Name"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="email" className="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="mobile" className="col-sm-3 col-form-label">
                    Mobile
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile Number"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="message" className="col-sm-3 col-form-label">
                    Message
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      type="password"
                      className="form-control"
                      id="message"
                      rows="2"
                      placeholder=""
                    ></textarea>
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-12">
                    <button type="submit" className="btn btn-success">
                      Sign in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
