import React from 'react'
import './Theme.css'
import Next from '../../icons/next.png'

export default function Theme(props) {

  const themeSelected = () => {
    document.getElementById('themb').style.backgroundColor = 'greenyellow';
    document.getElementById('thep').style.animationName = `translatetop`
    props.setPage(3);
  }

  const setThemes = () => {
    const value = document.getElementById('thm').value;
    props.setTheme(value);
  }

  const setLevels = () => {
    const value = document.getElementById('lvl').value;
    props.setLevel(value);
  }

  return (
    <div className="themepage" id="thep">
      <p className="themehead">Select Theme</p>
      <div className="themeselector">
        <select name="" id="thm" onChange={setThemes}>
          <option value="">Select Theme</option>
          <option value="a">Animals</option>
          <option value="b">Birds</option>
          <option value="c">Plants</option>
          <option value="d">Vehicles</option>
          <option value="e">Technology</option>
        </select>
        <select name="" id="lvl" onChange={setLevels}>
          <option value="">Select Level</option >
          <option value="1">Beginner</option>
          <option value="2">Moderate</option>
          <option value="3">Pro</option>
        </select>
      </div>
      <button className="themebtn" id="themb" onClick={themeSelected}>Next <img src={Next} alt="" srcset="" /></button>
    </div>
  )
}
