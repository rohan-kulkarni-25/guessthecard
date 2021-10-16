import React from 'react'
import './GameBoard.css'

export default function GameBoard(props) {

  if (props.gameLevel === 1) {
    return (
      <div className="gameboard">
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    )
  } else if (props.gameLevel === 2) {
    return (
      <div className="gameboard">
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    )
  } else if (props.gameLevel === 3) {
    return (
      <div className="gameboard">
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="hor">
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    )
  }


}
