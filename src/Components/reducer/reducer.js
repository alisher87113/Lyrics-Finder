import { initialState } from '../../store';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHART':
      return {
        ...state,
        heading: action.payload.heading,
        trackList: action.payload.data.message.body.track_list,
      };
    case 'SET_SEARCH_RESULTS':
      console.log('po');
      console.log(action.payload);
      return {
        ...state,
        heading: 'Search Results',
        trackList: action.payload.data.message.body.track_list,
      };

    default:
      return state;
  }
};
