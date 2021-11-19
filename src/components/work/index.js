import React from 'react';

const Work = () => {
  return (
    <div className="work section" id="Work">
      <div className="container">
        <div className="section-head">
          <h2 className="text-center">Work</h2>
        </div>
        <ul className="work-list">
          <li className="item ">
            <div className="inner overflow-hidden">
              <a href="https://preview.themeforest.net/item/jbdesks-react-job-board-template-with-graphql-apollo-client/full_screen_preview/29272765?_ga=2.122072011.1944711017.1606548039-532172593.1605323522">
                <img
                  src="https://images.ctfassets.net/4bwt4pzmqo4p/LkWkisSeBiTaYyaaH6OTr/11aa301d3cce0ba64dbed6f68a620da4/plush-design-studio-y7GlIdTUOvo-unsplash.jpg?w=1800&h=1350&q=50"
                  alt=""
                />
                <span className="name">JB DESK</span>
              </a>
            </div>
          </li>
          <li className="item">
            <div className="inner overflow-hidden">
              <a href="">
                <img
                  src="https://images.ctfassets.net/4bwt4pzmqo4p/LkWkisSeBiTaYyaaH6OTr/11aa301d3cce0ba64dbed6f68a620da4/plush-design-studio-y7GlIdTUOvo-unsplash.jpg?w=1800&h=1350&q=50"
                  alt=""
                />
                <span className="name">Shop Up</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
