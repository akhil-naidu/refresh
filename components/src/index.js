import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetail from './CommentDetail.js';

const App = function () {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date="Today at 06:00 PM"
        content="Nice blog post!"
      />
      <CommentDetail
        author="Akhil"
        date="Today at 11:23 AM"
        content="Oye Oye Oye!"
      />
      <CommentDetail
        author="Naruto"
        date="Today at 09:30 PM"
        content="It's Heroic!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
