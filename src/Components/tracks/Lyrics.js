import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
    loading: true,
    op: '',
  };

  async componentDidMount() {
    // this.setState({ loading: true });
    this.setState({ op: 'hui' });
    Promise.all([
      await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=b537393efde7936bf94848972e4f7511`
      ),
      await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=b537393efde7936bf94848972e4f7511`
      ),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({ track: res2, lyrics: res1 });
        this.setState({ loading: false });
      });
  }

  render() {
    const { track, lyrics } = this.state;
    if (
      this.state.loading === true
      // lyrics === undefined ||
      // lyrics === undefined ||
      // Object.keys(track).length === 0 ||
      // Object.keys(lyrics).length === 0
    ) {
      console.log(this.state.op);
      return <Spinner />;
    } else {
      console.log('not loading');

      return (
        // <h1>helo</h1>
        <div className="top-padding">
          <Link to="/" className="btn btn-danger mb-4 btn-md ">
            Go Back
          </Link>
          <div className="card card-margin card-padding">
            <h5 className="card-header">
              {track.message.body.track.track_name}{' '}
              <span style={{ color: 'red' }}>by</span>{' '}
              <span className="text-secondary">
                {track.message.body.track.artist_name}
              </span>
            </h5>
            <div className="card-body lyrics-padding">
              {lyrics.message.body.lyrics.lyrics_body}
            </div>
          </div>
          <ul className="list-group mt-3">
            <li className="list-group-item">
              <span style={{ color: 'blue' }}>Album: </span>
              <strong>{track.message.body.track.album_name}</strong>
            </li>
            <li className="list-group-item">
              <span style={{ color: 'blue' }}>Track ID: </span>{' '}
              <strong>{track.message.body.track.track_id}</strong>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default Lyrics;
