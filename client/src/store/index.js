import { createStore } from 'redux';
import imagePlaceholder from '../assets/image_placeholder.jpg';

const initialState = {
  prompt: '',
  size: '512x512',
  predict: imagePlaceholder,
  isDarkMode: true,
  error: false,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PROMPT':
      return {
        ...state,
        prompt: action.payload,
      }
    case 'SET_SIZE': 
      return {
        ...state,
        size: action.payload,
      }
    case 'SET_PREDICT':
      return {
        ...state,
        predict: action.payload,
      }
    case 'SET_IS_DARKMODE':
      return {
        ...state,
        isDarkMode: action.payload,
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;