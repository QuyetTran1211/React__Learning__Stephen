import React from 'react';
import { connect } from 'react-redux/es/exports';

const _SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {mySelectedSong.title}
        <br></br>
        Duration: {mySelectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(_SongDetail);
