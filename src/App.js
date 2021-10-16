import './App.css';
import Welcome from './components/welcomePage1/Welcome';
import React, { useState } from 'react'
import Theme from './components/themePage2/Theme';
import Rules from './components/rulesPage3/Rules';
import Game from './components/gamePage4/Game';


function App() {

  const [page, setPage] = useState(1);
  const [level, setLevel] = useState(1);
  const [theme, setTheme] = useState('a');
  if (page === 1) {
    return (
      <>
        <Welcome setPage={setPage}></Welcome>
      </>
    );
  } else if (page === 2) {
    return (
      <>
        <Theme setPage={setPage} setLevel={setLevel} setTheme={setTheme}></Theme>
      </>
    );
  } else if (page === 3) {
    return (
      <>
        <Rules setPage={setPage}></Rules>
      </>
    );
  } else if (page === 4) {
    return (
      <>
        <Game setPage={setPage} gameLevel={level} gameTheme={theme}></Game>
      </>
    )
  }


}

export default App;
