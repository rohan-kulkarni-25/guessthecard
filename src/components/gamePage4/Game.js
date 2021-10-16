import React from 'react'
import './Game.css'
import GameBoard from './GameBoard'

export default function Game(props) {
  return (
    <div className="gamepage">
      <p className="gamehead">GUESS THE CARD</p>
      <div className="dashboard">
        <div className="score"><p>0</p><p>SCORE</p></div>
        <p className="credits"><p>5</p><p>CREDIT</p></p>
      </div>
      <GameBoard gameLevel={props.gameLevel}></GameBoard>
    </div>
  )
}