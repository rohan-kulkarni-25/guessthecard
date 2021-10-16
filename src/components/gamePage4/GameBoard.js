import React from 'react'
import { Component } from 'react';
import './GameBoard.css'
import Lvl1 from './Lvl1';
// import cardImg from '../../cardimg/tech'

export default function GameBoard(props) {

  if (props.gameLevel === '1') {
    return (
      <Lvl1></Lvl1>
    )
  } else if (props.gameLevel === '2') {
    return (
      <div className="gameboard">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  } else if (props.gameLevel === '3') {
    return (
      <div className="gameboard">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  } else {
    return (
      <>Something Went Wrong</>
    )
  }
}
