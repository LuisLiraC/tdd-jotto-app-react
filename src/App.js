import React from 'react'
import './App.css'
import GuessedWords from './components/GuessedWords'
import Congrats from './components/Congrats'

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'teemo', letterMatchCount: 2 }
      ]} />
    </div>
  );
}

export default App;
