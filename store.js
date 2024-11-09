/**
 * Creates a Redux-inspired store for state management
 * @param {Object} reducer - Function that determines how state should be updated
 * @param {Object} initialState - Initial state of the application
 * @returns {Object} Store object with getState, dispatch, and subscribe methods
 */
const createStore = (reducer, initialState) => {
    let state = initialState;
    const listeners = new Set();
  
    /**
     * Returns the current state
     * @returns {Object} Current state
     */
    const getState = () => state;
  
    /**
     * Dispatches an action to update the state
     * @param {Object} action - Action object with type and optional payload
     */
    const dispatch = (action) => {
      // Update state using the reducer
      state = reducer(state, action);
      
      // Notify all subscribers
      listeners.forEach(listener => listener(state));
    };
  
    /**
     * Subscribes to state changes
     * @param {Function} listener - Callback function to be called on state changes
     * @returns {Function} Unsubscribe function
     */
    const subscribe = (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    };
  
    // Initialize store with default state
    dispatch({ type: '@@INIT' });
  
    return {
      getState,
      dispatch,
      subscribe
    };
  };
  
  export default createStore;