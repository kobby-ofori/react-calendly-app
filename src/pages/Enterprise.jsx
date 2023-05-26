import React from "react";
import Footer from "../components/Footer";

const Enterprise = () => {
  return (
    <div>
      <div class="row text-center">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <h3>
            <strong>
              <mark>Way more</mark> than a scheduling link
            </strong>
          </h3>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis.
          </p>
          <button
            style={{
              border: "none",
              height: "40px",
              width: "150px",
              borderRadius: "30px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <strong>Contact sales</strong>
          </button>
        </div>
        <div class="col-md-4"></div>
      </div>

      {/* new row */}
      <div class="row text-center enterprise-row3">
        <div class="col-md-12">
          <h5>
            Trusted by more than 50,000 of the world's leading organizations
          </h5>
        </div>
        <div class="company-logos2 animate__animated animate__backInLeft">
          <img
            src="images/dropbox.jfif"
            class="footer-img2"
            height="50"
            alt=""
          />
          <img src="images/ebay.jfif" class="footer-img2" height="50" alt="" />
          <img src="images/visa.jfif" class="footer-img2" height="50" alt="" />
          <img
            src="images/Lyft_logo.svg.png"
            class="footer-img2"
            height="50"
            alt=""
          />
          <img
            src="images/loreal-logo-featured.png"
            class="footer-img2"
            height="50"
            alt=""
          />
        </div>
      </div>

      {/* cards row */}
      <div class="row">
        <div class="col-md-4">
          <div
            class="card custom-enterprise-card animate__animated animate__backInLeft animate__delay-5s"
            style={{ width: "18rem" }}
          >
            <h5 style={{ paddingLeft: "20px", color: "blue" }}>Sales</h5>
            <img
              src="images/pexels-karolina-grabowska-5632379.jpg"
              height="200"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="card custom-enterprise-card animate__animated animate__backInUp animate__delay-5s"
            style={{ width: "18rem" }}
          >
            <h5 style={{ paddingLeft: "20px", color: "blue" }}>
              Customer Success
            </h5>
            <img
              src="images/charanjeet-dhiman-mHusyBu4bxM-unsplash.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div
            class="card custom-enterprise-card animate__animated animate__backInRight animate__delay-5s"
            style={{ width: "18rem" }}
          >
            <h5 style={{ paddingLeft: "20px", color: "blue" }}>Recruiting</h5>
            <img
              src="images/nick-fewings-2ykkF3oQb_c-unsplash (1).jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* new row */}
      <div class="row text-center enterprise-row5">
        <div class="col-md-12">
          <button
            style={{
              border: "none",
              height: "40px",
              width: "120px",
              borderRadius: "30px",
              backgroundColor: "black",
              color: "white",
            }}
          >
            <strong>Learm more</strong>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enterprise;
