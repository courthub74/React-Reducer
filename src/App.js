import React, { useReducer } from 'react';
import './style.css';

function reducer(state, action) {
  //if no if statement is needed just return state with default value
  // return {
  // count: 1
  //}

  if (action.type == 'increment') {
    return {
      count: state.count + 1,
    };
  } else if (action.type == 'decrement') {
    return {
      count: state.count - 1,
    };
  } else if (action.type === 'reset') {
    return {
      count: 0,
    };
  } else {
    return {
      count: 0,
    };
  }
}

export default function App() {
  // useState version
  // const [count, useCount] = useState({
  //   count: 1
  // })
  const [state, dispatcher] = useReducer(reducer, { count: 0 });
  return (
    <div>
      Count {state.count}
      <button
        onClick={() => {
          console.log('increment');
        }}
      >
        Increment +
      </button>
      <button
        onClick={() => {
          console.log('decrement');
        }}
      >
        Decrement -
      </button>
      <button
        onClick={() => {
          console.log('reset');
        }}
      >
        Reset
      </button>
    </div>
  );
}
