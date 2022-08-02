import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const addBy = () => {
    dispatch({ type: 'ADD_BY', payload: 10 });
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
