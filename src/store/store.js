import { legacy_createStore as createStore } from 'redux';

const reducersFn = (state = { counter: 0 }, action) => {
  //should be syncronous
  //should not mutate original state
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1 };
  }
  if (action.type === 'ADD_BY') {
    return { counter: state.counter + action.payload };
  }
  return state;
};

const store = createStore(
  reducersFn,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
