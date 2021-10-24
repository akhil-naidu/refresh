import React from 'react';
import { connect } from 'react-redux';

const SongList = () => {
  return (
    <div>
      <h1>Song List</h1>
      Not yet configured
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return state;
};

export default connect(mapStateToProps)(SongList);
