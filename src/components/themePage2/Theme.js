import React from 'react'
import './Theme.css'
import Next from '../../icons/next.png'

export default function Theme(props) {

  const themeSelected = () => {
    document.getElementById('themb').style.backgroundColor = 'greenyellow';
    document.getElementById('thep').style.animationName = `translatetop`
    setInterval(() => {
      props.setPage(3);
    }, 1000);

  }
  return (
    <div className="themepage" id="thep">
      <p className="themehead">Select Theme</p>
      <div className="themeselector">
        <select name="" id="">
          <option value="">Select Theme</option>
        </select>
        <select name="" id="">
          <option value="">Select Level</option>
        </select>
      </div>
      <button className="themebtn" id="themb" onClick={themeSelected}>Next <img src={Next} alt="" srcset="" /></button>
    </div>
  )
}
