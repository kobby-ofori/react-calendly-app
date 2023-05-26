import React from 'react'

const Footer = () => {
  return (
    <div class="row">
      <div class="col-md-3">
        <h5>Easy</h5>
        <h5 style={{color: "blue"}}>ahead</h5>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <div class="form-group">
          <select class="form-control" id="exampleFormControlSelect1">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
            <option>Chinese</option>
            <option>Arabic</option>
          </select>
        </div>
      </div>
      <div class="col-md-3">
        <h5>About</h5>
        <p>About company</p>
        <p>Contact sales</p>
        <p>Newsroom</p>
        <p>Careers</p>
        <p>Security</p>
      </div>
      <div class="col-md-3">
        <h5>Solutions</h5>
        <p>Customer success</p>
        <p>Sales</p>
        <p>Recruiting</p>
        <p>Education</p>
        <p>Marketing</p>
      </div>
      <div class="col-md-3">
        <h5>Popular Features</h5>
        <p>Embed</p>
        <p>Availability</p>
        <p>Sending Notifications</p>
        <p>Using the Mobile App.</p>
        <p></p>
      </div>
    </div>
  )
}

export default Footer