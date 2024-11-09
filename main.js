import createStore from './store.js';
import reducer, { initialState, ActionTypes } from './reducer.js';

// Create store
const store = createStore(reducer, initialState);

// Update UI function
const updateUI = (state) => {
    const counterDisplay = document.getElementById('counter');
    if (counterDisplay) {
        counterDisplay.textContent = state.count;
    }
};

// Subscribe to state changes
store.subscribe((state) => {
    console.log('State updated:', state);
    updateUI(state);
});

// Initialize UI with initial state
updateUI(initialState);

// Test scenarios
console.log('--- Initial State Verification ---');
console.log('Initial state:', store.getState());

console.log('\n--- Incrementing the Counter ---');
store.dispatch({ type: ActionTypes.ADD });
store.dispatch({ type: ActionTypes.ADD });

console.log('\n--- Decrementing the Counter ---');
store.dispatch({ type: ActionTypes.SUBTRACT });

console.log('\n--- Resetting the Counter ---');
store.dispatch({ type: ActionTypes.RESET });

export default store;