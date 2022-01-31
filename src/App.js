import React from 'react'
import './App.css';
function App() {
  // variables
  const [count, setCount] = React.useState(0)

  // functions 
  const increment = ()=>{
    setCount(count + 1);
  }
  const decrement = ()=>{
    setCount(count-1);
  }

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      sdgsdgsdgdg dfsdfsfsdfsdfadfasdfasdsdfsdfadfsdfdf
    </div>
  );
}

export default App;
