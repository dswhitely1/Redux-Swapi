// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchStarWarsPeople = () => async dispatch => {
	dispatch({ type: FETCH_START });
	try {
		const response = await axios.get('https://swapi.co/api/people');
		dispatch({ type: FETCH_SUCCESS, payload: response.data.results });
	} catch (error) {
		dispatch({ type: FETCH_FAILURE, payload: error.response });
	}
};
