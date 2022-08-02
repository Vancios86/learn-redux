import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './store/store';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div className="App">
      <h3>Counter</h3>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>add by 10</button>
    </div>
  );
}

export default App;
