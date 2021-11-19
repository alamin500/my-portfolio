import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import SocialLink from '../SocialLink';
import AboutOne from './AboutOne';
import AboutTwo from './AboutTwo';

const About = () => {
  const { path } = useRouteMatch();
  return (
    <>
      {/* <Link to="/about">about</Link>
      <Link to="about/2">about 2</Link>
      <Switch>
        <Route exact path={`${path}`} component={AboutOne} />
        <Route exact path={`${path}/2`} component={AboutTwo} />
      </Switch> */}
      <div className="about section" id="About">
        <div className="container">
          <div className="about-main row">
            <div className="left col-md-5 col-lg-4 mb-3">
              <img
                src="https://scontent.fdac27-1.fna.fbcdn.net/v/t1.0-9/48412585_2361975744033009_925246696995160064_o.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeEIYRVGPqelxijzX7j-Apb-UeMEh6jp6bFR4wSHqOnpsSqZbBgYOq0p-B1gHjHkAjKSk2MBcchj53xXw-N57wNH&_nc_ohc=SktgaOcTeFQAX_Npr9C&_nc_ht=scontent.fdac27-1.fna&oh=392813d9a303bf8a84661d8a7db24fdd&oe=5FE7041D"
                alt=""
              />
            </div>
            <div className="left col-md-7 col-lg-8">
              <div className="about-details">
                <span className="name">My Name is Md Alamin</span>
                <h2 className="sub-position">
                  I'm a Professional Mern Stack Developer.
                </h2>
                <div>
                  A MERN Stack developer with experience building websites. I
                  have experience working with JavaScript, HTML5, CSS3, MongoDB
                  and React. Take a look at my work!
                  https://shampoo-plus-12.web.app/ A Curious, Passionate MERN
                  Stack Developer. Can do any Programming Task in ON-Time,
                  Handling the difficulties and errors Efficiently.
                </div>
                <ul className="details">
                  <li>
                    <strong>Full Name</strong>
                    <p>Md Alamin</p>
                  </li>
                  <li>
                    <strong>Age</strong>
                    <p>26 Years</p>
                  </li>
                  <li>
                    <strong>Location</strong>
                    <p>Chandpur</p>
                  </li>
                  <li>
                    <strong>Email</strong>
                    <p>
                      <a href="#">ahmedsunny868@gmail.com</a>
                    </p>
                  </li>
                </ul>
                <div className="socials">
                  <SocialLink />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
