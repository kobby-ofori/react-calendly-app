import React from "react";

const Multipage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div>
            <h3 className="h3-home">Easy</h3>
            <h3 className="h3-home">scheduling</h3>
            <h3 className="h3-home ahead">ahead</h3>
          </div>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti, debitis
            animi illo fuga deserunt libero pariatur repudiandae eligendi atque
            quas perferendis, placeat consequuntur!
          </p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Enter your email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div
              className="input-group-append"
            >
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                style={{
                  height: "50px",
                  borderTopRightRadius: "23px",
                  borderBottomRightRadius: "23px",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
          <h6 style={{ color: "rgba(128, 128, 128, 0.663)" }}>
            Create your free account. No credit card required.
          </h6>
        </div>
        <div className="col-md-6">
          <img
            src="images/gettyimages-1.jpg"
            alt=""
            className="img-responsive"
          />
        </div>
      </div>

      {/* new row */}
      <div className="row">
        <div className="col-md-12 home-row3">
          <div className="text-center">
            <h4>Simplified scheduling for more than</h4>
            <h4>
              <strong id="emphasis-blue">10,000,000</strong> users worldwide
            </h4>
            <div className="company-logos">
              <img
                src="images/compass.jfif"
                className="footer-img"
                height="50"
                alt=""
              />
              <img
                src="images/dropbox.jfif"
                className="footer-img"
                height="50"
                alt=""
              />
              <img
                src="images/ebay.jfif"
                className="footer-img"
                height="50"
                alt=""
              />
              <img
                src="images/lazboy.jpg"
                className="footer-img"
                height="50"
                alt=""
              />
              <img
                src="images/twilio-logo-red_900xx1067-600-117-0.jpg"
                className="footer-img"
                height="50"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row home-row4">
        <div className="col-md-4">
          <h5>
            <strong id="list-number">1.</strong> Create simple rules
          </h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti.
          </p>
        </div>
        <div className="col-md-4">
          <h5>
            <strong id="list-number">2.</strong> Create simple rules
          </h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti.
          </p>
        </div>
        <div className="col-md-4">
          <h5>
            <strong id="list-number">3.</strong> Create simple rules
          </h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Multipage;
