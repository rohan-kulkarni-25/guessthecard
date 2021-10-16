import React from 'react'
import './Rules.css'
import Next from '../../icons/next.png'
import Footer from '../Footer/Footer';

export default function Rules(props) {

  const letsplay = () => {
    const check = document.getElementById('tcheck');
    if (check.checked === true) {
      document.getElementById('ruleb').style.backgroundColor = 'greenyellow';
      document.getElementById('rulep').style.animationName = `translatetop`
      props.setPage(4);
    } else {
      console.log(check)
      check.parentElement.classList.add('borderred')
    }
  }
  return (
    <div className="rulespage" id="rulep">
      <p className="ruleshead">RULES</p>
      <div className="rulesbox">
        <ul>
          <li>You will be given 5 Credits.</li>
          <li>If you guessed the wrong card one credit will be deducted.</li>
          <li>If you guesses the right card then no credit will be deducted.</li>
          <li>If you guesses the right card then your score will be increased by 1.</li>
          <li>When the credits will reach to 0 the Game will end.</li>
        </ul>
      </div>
      <label htmlFor="terms" className="inputcheck" required><input type="checkbox" name="terms" id="tcheck" />I Accept<span>Rules</span></label>
      <button className="rulesbtn" id="ruleb" onClick={letsplay}>Let's Play <img src={Next} alt="" srcset="" /></button>
      <Footer></Footer>
    </div>
  )
}
