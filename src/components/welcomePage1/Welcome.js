import React from 'react'
import Footer from '../Footer/Footer'
import './Welcome.css'

export default function Welcome(props) {

  const contentChange = () => {
    document.getElementById('wc').innerHTML = `<p>Let's Play</p>`;
  }

  const removeContent = () => {
    document.getElementById('wc').innerHTML = ``
  }

  const pageChange = () => {
    props.setPage(2);
  }

  return (
    <div className="welcomePage">
      <div className="welcomeCard" id="wc" onAnimationStart={removeContent} onAnimationEnd={contentChange}>
        <p>GUESS MY</p>
        <p>PARTNER</p>
      </div>
      <p className="subhead">A CARD GAME</p>
      <p className="progress" >
        <p className="bar" onAnimationEnd={pageChange}></p>
      </p>
      <Footer></Footer>
    </div>
  )
}
