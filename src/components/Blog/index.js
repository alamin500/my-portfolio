import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="blogs-section section" id="Blogs">
      <div className="container">
        <div className="section-head">
          <h2>Blogs</h2>
        </div>
        <ul className={`blogs-list`}>
          <li className="item">
            <div className="inner">
              <Link className="link" to="#" />
              <img
                src="https://images.ctfassets.net/4bwt4pzmqo4p/018YEl9qSSZ3sbfhQdhgxI/8aa9af5a880c9ee9c57de117716af239/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg?w=600&h=400&q=50&fm=webp"
                alt=""
              />
              <div className="details">
                <h3 className="title">Blog TItile 1</h3>
                <span className="date">
                  <i className="fas fa-calendar-alt"></i>{' '}
                  {/* {moment(item.node.createdAt).format('LL')} */}
                  February 19,2020
                </span>
              </div>
            </div>
          </li>
          <li className="item">
            <div className="inner">
              <Link className="link" to="#" />
              <img
                src="https://images.ctfassets.net/4bwt4pzmqo4p/018YEl9qSSZ3sbfhQdhgxI/8aa9af5a880c9ee9c57de117716af239/carl-heyerdahl-KE0nC8-58MQ-unsplash.jpg?w=600&h=400&q=50&fm=webp"
                alt=""
              />
              <div className="details">
                <h3 className="title">Blog TItile 1</h3>
                <span className="date">
                  <i className="fas fa-calendar-alt"></i>{' '}
                  {/* {moment(item.node.createdAt).format('LL')} */}
                  February 19,2020
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div className="see-more">
          <Link to="/blogs">
            <span>More Blogs</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
