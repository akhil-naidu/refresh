import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = function () {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 06:00 PM</span>
          </div>
          <div className="text">Nice blog post!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Akhil
          </a>
          <div className="metadata">
            <span className="date">Today at 11:23 AM</span>
          </div>
          <div className="text">Oye Oye Oye!</div>
        </div>
      </div>

      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Naruto
          </a>
          <div className="metadata">
            <span className="date">Today at 09:30 PM</span>
          </div>
          <div className="text">It's Heroic!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
