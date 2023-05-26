import React from "react";
import Footer from "../components/Footer";

const Individuals = () => {
  return (
    <div>
      <div class="row">
        <div class="col-md-6">
          <h3>The genius way</h3>
          <h3>
            to work <mark>better</mark>
          </h3>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti, debitis
            animi illo fuga deserunt libero pariatur repudiandae eligendi atque
            quas perferendis.
          </p>
          <button style={{ backgroundColor: "black", color: "white" }}>
            Sign up for free
          </button>
        </div>
        <div class="col-md-6">
          <img
            src="images/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg"
            alt=""
            class="img-responsive"
          />
        </div>
      </div>

      {/* new row */}
      <div class="row individuals-row3">
        <div class="col-md-6">
          <img
            src="images/green-chameleon-s9CC2SKySJM-unsplash.jpg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col-md-6">
          <h6 class="text-muted">A CURATED CALENDAR</h6>
          <h4>Book up efficiently</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti, debitis
            animi illo fuga deserunt libero pariatur repudiandae eligendi atque
            quas perferendis, placeat consequuntur!
          </p>
        </div>
      </div>

      {/* new row */}
      <div class="row">
        <div class="col-md-6">
          <h6 class="text-muted">AUTOMATED NOTIFICATIONS & FOLLOW-UPS</h6>
          <h4>Work like you have a</h4>
          <h4>personal assistant</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
            nihil a delectus accusamus reiciendis. Nostrum, deleniti, debitis
            animi illo fuga deserunt libero pariatur repudiandae eligendi atque
            quas perferendis, placeat consequuntur!
          </p>
        </div>
        <div class="col-md-6">
          <img src="images/assist.jpg" alt="" class="img-responsive" />
        </div>
      </div>

      {/* new row */}
      <div class="row individuals-row5">
        <div class="col-md-12">
          <h3>Find just-right plans</h3>
          <h3>for individuals and</h3>
          <h3>small teams</h3>
          <br />
          <button
            style={{
              border: "none",
              height: "40px",
              width: "150px",
              borderRadius: "30px",
            }}
          >
            <strong>See our plans</strong>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Individuals;
