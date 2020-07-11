import { createStore } from 'redux';
import { reducer } from './Components/reducer/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const initialState = {};

export const store = createStore(reducer, composeWithDevTools());
