import createReducer from '../utils/createReducer';
import actionTypes from '../consts/actionTypes';

const helloState = {
  message: 'Add new message',
  reverse: false,
};

const helloReducer = {};

helloReducer[actionTypes.hello.UPDATE_MESSAGE] = (state, { message }) => ({
  ...state,
  message,
});

helloReducer[actionTypes.hello.TOGGLE_REVERSE] = state => ({
  ...state,
  reverse: !state.reverse,
});

export default createReducer(helloReducer, helloState);
