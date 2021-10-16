import React from 'react'
import Footer from '../Footer/Footer';
import './Game.css'
import GameBoard from './GameBoard'

export default function Game(props) {
  console.log(props.gameLevel);
  console.log(props.gameTheme);
  return (
    <div className="gamepage">
      <p className="gamehead">GUESS THE CARD</p>
      <div className="dashboard">
        <div className="score"><p>0</p><p>SCORE</p></div>
        <p className="credits"><p>5</p><p>CREDIT</p></p>
      </div>
      <GameBoard gameLevel={props.gameLevel}></GameBoard>
      <Footer></Footer>
    </div>
  )
}
