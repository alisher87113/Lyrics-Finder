import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import { connect } from 'react-redux';

class Search extends Component {
  state = {
    trackTitle: '',
    artistName: '',
  };

  onChange = (e) => {
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.trackTitle);
  };

  handleSubmit = (dispatch, e) => {
    e.preventDefault();
    console.log('lo');

    axios
      .get(
        this.state.trackTitle !== ''
          ? `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=b537393efde7936bf94848972e4f7511`
          : `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_artist=${this.state.artistName}&page_size=10&page=1&s_track_rating=desc&apikey=b537393efde7936bf94848972e4f7511`
      )
      .then((res) => {
        this.props.setSearchResults(res);
        this.setState({
          trackTitle: '',
          artistName: '',
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <form
              onSubmit={this.handleSubmit.bind(this, dispatch)}
              className="form s6"
            >
              <div className="input-field col s6">
                <input
                  type="text"
                  id="song"
                  name="trackTitle"
                  placeholder="Song"
                  value={this.state.trackTitle}
                  onChange={this.onChange}
                />
                <label htmlFor="song "></label>

                <input
                  type="text"
                  id="artist"
                  name="artistName"
                  placeholder="Artist"
                  value={this.state.artistName}
                  onChange={this.onChange}
                />
                <label htmlFor="artist"></label>

                <input
                  onSubmit={() => this.handleSubmit}
                  type="submit"
                  className="btn waves-effect"
                  value="search"
                ></input>
              </div>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDisPatchToProps = (dispatch) => {
  return {
    setSearchResults: (data) =>
      dispatch({ type: 'SET_SEARCH_RESULTS', payload: data }),
  };
};

export default connect(mapStateToProps, mapDisPatchToProps)(Search);
