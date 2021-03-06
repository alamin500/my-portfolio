import React from 'react';

const SocialLink = () => {
  return (
    <div className="social-card">
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-facebook" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>
              <a href="https://web.facebook.com/ahmedsunny2" target="_blank">
                Md Alamin
              </a>
            </h3>
            <p>This is where I network and build my professional protfolio.</p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-twitter-square" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>
              <a href="https://web.facebook.com/ahmedsunny2" target="_blank">
                @AhmedSunny
              </a>
            </h3>
            <p>
              This is where I read news and network with different social
              groups.
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="face face1">
          <div className="content">
            <div className="icon">
              <i className="fa fa-github-square" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <h3>
              <a href="https://github.com/sunny335" target="_blank">
                sunny335
              </a>
            </h3>
            <p>This is where I share code and work on projects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
