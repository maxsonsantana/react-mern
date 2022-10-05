import React, { useState} from 'react';
import Header from './Header';


function App() {
  let [counter, setCounter] = useState(0);

  function handleSoma(){
    setCounter(counter + 1);
  }

  function handleMenos(){
    setCounter(counter - 1);
  }

  return (  
    <>
      <h1>{counter}</h1>
      <button onClick={handleSoma}>+</button>
      <button onClick={handleMenos}>-</button>

      <Header title="Minha Nota 1"/>
      <Header title="Minha Nota 2"/>
      <Header title="Minha Nota 3"/>      
    </>  
  );
}

export default App;
