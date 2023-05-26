import React from "react";
import Footer from "../components/Footer";

const Teams = () => {
  return (
    <div>
      <div class="row">
        <div class="col-md-6">
          <h3>
            <mark>Power up</mark> your
          </h3>
          <h3>teams</h3>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti, debitis
            animi illo fuga deserunt libero pariatur repudiandae eligendi atque
            quas perferendis, placeat consequuntur!
          </p>
          <button
            style={{
              border: "none",
              height: "40px",
              width: "150px",
              borderRadius: "30px",
              backgroundColor: "blue",
              color: "white",
            }}
          >
            <strong>Start for free</strong>
          </button>
          <button
            style={{
              marginLeft: "10px",
              height: "40px",
              width: "150px",
              borderRadius: "30px",
            }}
          >
            <strong>Contact Sales</strong>
          </button>
        </div>
        <div class="col-md-6">
          <img
            src="images/surface-coCGW4SsxX4-unsplash.jpg"
            alt=""
            height="450px"
            width="500px"
          />
        </div>
      </div>

      {/* new row */}
      <div class="row text-center teams-row3">
        <div class="col-md-12">
          <h3>Streamline tasks, extend team</h3>
          <h3>reach</h3>
        </div>
      </div>

      {/* new row */}
      <div class="row">
        <div class="col-md-6">
          <img
            src="images/adrian-regeci-XDykiiRUEoQ-unsplash.jpg"
            class="img-fluid"
            alt=""
          />
        </div>
        <div class="col-md-6 teams-row4">
          <h6 style={{ color: "blue" }}>AUTOMATED ASSIGNMENT</h6>
          <h5>
            <strong>Control how your team gets booked</strong>
          </h5>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti, debitis
            animi illo fuga deserunt libero pariatur repudiandae eligendi atque
            quas perferendis, placeat consequuntur!
          </p>
        </div>
      </div>

      {/* new row */}
      <div class="row text-center teams-row5">
        <div class="col-md-12">
          <h6 style={{ color: "blue" }}>SOLUTIONS</h6>
          <h4>The right Calendly for the work you do</h4>
        </div>
      </div>

      {/* cards row */}
      <div class="row teams-row6 justify-content-between">
        <div class="col-md-3 teams-card-col">
          <div class="card teams-card" style={{ width: "18rem" }}>
            <img src="images/assist.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Sales</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary teams-card-btn">
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 teams-card-col">
          <div class="card teams-card" style={{ width: "18rem" }}>
            <img src="images/recruiting.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Recruiting</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary teams-card-btn">
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 teams-card-col">
          <div class="card teams-card" style={{ width: "18rem" }}>
            <img
              src="images/pexels-olha-ruskykh-7504896.jpg"
              class="card-img-top"
              alt="..."
              height="191"
            />
            <div class="card-body">
              <h5 class="card-title">Customer success</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary teams-card-btn">
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-3 teams-card-col">
          <div class="card teams-card" style={{ width: "18rem" }}>
            <img
              src="images/cardimage4.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Education</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary teams-card-btn">
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Teams;
