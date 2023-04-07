import './App.css';
import { useState } from 'react';


function App() {
const [color , setColor] = useState('lightgray');
  const addColor = (color) =>{
    setColor(color);
    
  }

  return (
    <div className="container">
      <h1>Color App</h1>
      <div className="color-box" style={{background : color}}>

      </div>
      <div className="btn-group">
        <button onClick={function(){setColor('red')}}>red</button>
        <button onClick={function(){setColor('green')}}>green</button>
        <button onClick={function(){setColor('blue')}}>blue</button>
      </div>
    </div>
  );
}

export default App;
