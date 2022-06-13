import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class _SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div
              onClick={() => {
                this.props.selectSong(song);
              }}
              className="ui button primary"
            >
              Select
            </div>
          </div>
          <div className="content">
            {song.title}
            <div>
              <b>{song.title === this.props.favoriteTitle && 'Favorite!'}</b>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs, favoriteTitle: state.favoriteTitle };
};

export default connect(mapStateToProps, {
  selectSong
})(_SongList);
