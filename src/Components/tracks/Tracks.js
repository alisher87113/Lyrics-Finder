import React, { useEffect } from 'react';
import { Consumer } from '../../context';
import Track from './Track';
import Spinner from '../layout/Spinner';
import Button from '../layout/LoadMoreButton';
import { connect } from 'react-redux';

const Tracks = (props) => {
  const { addChart, trackList, heading } = props;

  useEffect(async () => {
    const response = await fetch(
      'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=b537393efde7936bf94848972e4f7511'
    );
    const data = await response.json();
    addChart({ heading: 'Top 10 tracks', data: data });
  }, []);

  if (trackList === undefined) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {trackList.map((item) => (
            <Track key={item.track.track_id} track={item.track} />
          ))}
        </div>
        <Button />
      </React.Fragment>
    );
  }
};

// class Tracks extends Component {
//   async componentDidMount() {
//     const { addChart } = this.props;
//     const response = await fetch(
//       'https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=b537393efde7936bf94848972e4f7511'
//     );
//     const data = await response.json();
//     addChart({ heading: 'Top 10 tracks', data: data });
//   }

//   render() {
//     const { trackList, heading } = this.props;
//     if (trackList === undefined) {
//       return <Spinner />;
//     } else {
//       return (
//         <React.Fragment>
//           <h3 className="text-center mb-4">{heading}</h3>
//           <div className="row">
//             {trackList.map((item) => (
//               <Track key={item.track.track_id} track={item.track} />
//             ))}
//           </div>
//           <Button />
//         </React.Fragment>
//       );
//     }

//   }
// }

const mapStateToProps = (state) => {
  return {
    heading: state.heading,
    trackList: state.trackList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addChart: (payload) => dispatch({ type: 'ADD_CHART', payload: payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
