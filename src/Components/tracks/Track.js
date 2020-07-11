import React from 'react';
import { Link } from 'react-router-dom';

const Track = (props) => {
  const { track } = props;
  return (
    <div className="col s6">
      <div style={{ padding: '2rem' }} className="card">
        <p style={{ marginTop: '0', paddingBottom: '5px' }} className="song">
          <i className="material-icons">audiotrack</i>
          {track.track_name}{' '}
        </p>
        <p
          style={{
            marginTop: '0.3rem',
          }}
          className="artist"
        >
          <i className="material-icons" style={{ paddingRight: '5px' }}>
            person
          </i>
          {track.artist_name}
        </p>

        <Link
          to={`lyrics/track/${track.track_id}`}
          className="btn waves-effect view-lyrics-btn"
          style={{ marginRight: '10px' }}
        >
          View Lyric
        </Link>
        <button className="btn waves-effect favorites-btn ">
          <i className="material-icons left hide-on-med-and-down">cloud</i>To
          Favorites
        </button>
      </div>
    </div>
  );
};

export default Track;
