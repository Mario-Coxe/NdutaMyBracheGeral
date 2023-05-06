import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  region: null,
  directions: null,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGION':
      return { ...state, region: action.payload };
    case 'SET_DIRECTIONS':
      return { ...state, directions: action.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    map: mapReducer,
  },
});

export default store;
