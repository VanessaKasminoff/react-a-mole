import './App.css';
import React, {useState} from 'react';
import MoleContainer from './MoleContainer';

function App() {
/* 
  - Store the score state variable
  - Create a function to generate the nine MoleContainers
*/

  let [score, setScore] = useState(0)

  function createMoleHill(i) {
    let moleHills = [];
    for (let h = 0; h < 9; h++) {
      moleHills.push(<MoleContainer key={i} setScore={setScore} score={score}/>)
    }
    return (
      <div className='game-container'>
        {moleHills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-A-Mole!</h1>
      <div className='score-container'>
        {score}
      </div>
      {createMoleHill()}
    </div>
  );
}

export default App;
