import React from 'react';

const Work = () => {
  return (
    <div className="work section" id="Work">
      <div className="container">
        <div className="section-head">
          <h2 className="text-center">Projects</h2>
        </div>
        <ul className="work-list">
          <li className="item ">
            <div className="inner overflow-hidden">
              <a href="https://shampoo-plus-12.web.app/">
                <img
                  height="270px"
                  src="https://i.ibb.co/VqG6C7T/Capture1.png"
                  alt=""
                />
                <span className="name">Shampoo Plus</span>
              </a>
            </div>
          </li>
          <li className="item">
            <div className="inner overflow-hidden">
              <a href="https://mongodb-assingnment-11.firebaseapp.com/">
                <img
                  height="270px"
                  src="https://i.ibb.co/ZB75Zhy/Capture3.png"
                  alt=""
                />
                <span className="name">Trendy Travels</span>
              </a>
            </div>
          </li>
          <li className="item">
            <div className="inner overflow-hidden">
              <a href="https://remix-store-nalamin500.netlify.app/">
                <img
                  height="270px"
                  src="https://i.ibb.co/mFFBMh2/Capture4.png"
                  alt=""
                />
                <span className="name">Remix Store</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
