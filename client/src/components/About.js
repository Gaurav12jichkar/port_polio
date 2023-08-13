import React from 'react';
import imag2 from "../images/gg.jpeg";
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='container emp-profile'>
        <form method=''>
          <div className='row'>
            <div className='col-md-4'>
              <img src={imag2} alt="gaurav" />
            </div>

            <div className='col-md-6'>
              <div className='profile-head'>
                <h5>gaurav jichkar</h5>
                <h6>web developer</h6>
                <p className='profile-rating mt-3 mb-5'>Ranking: <span>1/10</span></p>
                <ul className="nav nav-tabs" role='tablist'>
                  <li className="nav-item">
                    <NavLink className="nav-link active" id='home-tab' data-toggle='tab' role='tab' to="#home">About us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link active" id='profile-tab' data-toggle='tab' role='tab' to="#profile">Time Line</NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-md-2'>
              <input type="submit" className='profile-edit-btn' name='btnAddmore' value='Edit Profile' />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-4'>
              <div className='profile-work'>
                <p>Work Link</p>
                <NavLink to="https://www.youtube.com/watch?v=9OfL9H6AmhQ">youtube</NavLink><br />
                <NavLink to="https://www.instagram.com/gaurav_jichkar/">instagram</NavLink><br />
                <NavLink to="https://www.facebook.com/gaurav.jichkar.33/">facebook</NavLink><br />
                <NavLink to="https://www.youtube.com/watch?v=9OfL9H6AmhQ">infotpoint</NavLink><br />
                <NavLink to="https://www.youtube.com/watch?v=9OfL9H6AmhQ">figma</NavLink><br />
                <NavLink to="https://www.youtube.com/watch?v=9OfL9H6AmhQ">software engineer</NavLink><br />
              </div>
            </div>

            <div className='col-md-8 pl-5 about-info'>
              <div className='tab-content profile-tab' id='myTabcontent'>
                <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>User ID</label>
                    </div>
                    <div className='col-md-6'>
                      <label>744746837989</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div className='col-md-6'>
                      <label>Gaurav</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div className='col-md-6'>
                      <label>gauravjichkar12@gmail.com</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Phone</label>
                    </div>
                    <div className='col-md-6'>
                      <label>23456667697</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Profession</label>
                    </div>
                    <div className='col-md-6'>
                      <label>web developer</label>
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label>Experience</label>
                    </div>
                    <div className='col-md-6'>
                      <label>expert</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Hourly rate</label>
                    </div>
                    <div className='col-md-6'>
                      <label>12$</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Total projects</label>
                    </div>
                    <div className='col-md-6'>
                      <label>45</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>English level</label>
                    </div>
                    <div className='col-md-6'>
                      <label>mediator</label>
                    </div>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-6'>
                      <label>Availability</label>
                    </div>
                    <div className='col-md-6'>
                      <label>6 months</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
