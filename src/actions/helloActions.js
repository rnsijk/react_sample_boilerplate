import actionTypes from '../consts/actionTypes';

const helloActions = dispatch => ({
  updateMEssage: (message) => {
    dispatch({
      type: actionTypes.hello.UPDATE_MESSAGE,
      payload: { message },
    });
  },

  toggleReverse: () => {
    dispatch({ type: actionTypes.hello.TOGGLE_REVERSE });
  },
});

export default helloActions;
