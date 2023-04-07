import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // console.log('앱실행');
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count+1);
  }

  useEffect(() => {
    if(count>10) {console.log('최고점수')}
    console.log('count업데이트');
  }, [count])

  return (
    <div className="App">
      <h1>App</h1>
      <p>count: {count}</p>
      <button onClick={addCount}>count++</button>
    </div>
  );
}

export default App;
