import './App.css';
// import { useState } from 'react';


function App() {
  const arr = ['김밥','순대','만두'];

  return (
    <div className="container">
      {
      arr.map((name, i) => {
        return(
          <p key={i}>{name}</p>
          )
      })
    }
    </div>
  );
}

export default App;
