// Initial state definition
export const initialState = {
  count: 0
};

// Action Types
export const ActionTypes = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  RESET: 'RESET'
};

/**
 * Reducer function to handle state updates based on actions
 * @param {Object} state - Current state
 * @param {Object} action - Action object with type and optional payload
 * @returns {Object} New state
 */
const tallyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      return {
        ...state,
        count: state.count + 1
      };
    case ActionTypes.SUBTRACT:
      return {
        ...state,
        count: state.count - 1
      };
    case ActionTypes.RESET:
      return {
        ...state,
        count: 0
      };
    default:
      return state;
  }
};

export default tallyReducer;