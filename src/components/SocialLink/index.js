import React from 'react';

const SocialLink = () => {
  return (
    <ul className="social">
      <li>
        <a
          className="fa fa-facebook"
          href="https://www.facebook.com/nalamin500/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </li>
      {/* <li>
        <a
          className="fa fa-twitter"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        />
      </li> */}
      {/* <li>
        <a
          className="fa fa-instagram"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        />
      </li> */}
      <li>
        <a
          className="fa fa-linkedin"
          href="https://www.linkedin.com/in/md-alamin1/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </li>
      <li>
        <a
          className="fa fa-github"
          href="https://github.com/alamin500"
          target="_blank"
          rel="noopener noreferrer"
        />
      </li>
    </ul>
  );
};

export default SocialLink;
