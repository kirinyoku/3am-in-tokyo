import { createStore } from 'redux';
import imagePlaceholder from '../assets/image_placeholder.jpg';

const initialState = {
  predict: imagePlaceholder,
  isDarkMode: true,
  isError: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PREDICT':
      return {
        ...state,
        predict: action.payload,
      };
    case 'SET_IS_DARKMODE':
      return {
        ...state,
        isDarkMode: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        isError: action.payload,
      };
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
