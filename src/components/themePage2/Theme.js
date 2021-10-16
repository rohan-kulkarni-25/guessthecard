import React from 'react'
import './Theme.css'
import Next from '../../icons/next.png'
import Footer from '../Footer/Footer';

export default function Theme(props) {


  const select1 = document.getElementById('thm');
  const select2 = document.getElementById('lvl');
  const themeSelected = () => {
    if (select1.value === '' || select2.value === '') {
      select1.classList.add('borderred');
      select2.classList.add('borderred');
      select1.style.border = '1px solid red';
      select2.style.border = '1px solid red'
    } else {
      document.getElementById('themb').style.backgroundColor = 'greenyellow';
      document.getElementById('thep').style.animationName = `translatetop`
      props.setPage(3);
    }

  }

  const setThemes = () => {
    // select1.style.border = '2px solid gold';

    const value = document.getElementById('thm').value;
    props.setTheme(value);
  }

  const setLevels = () => {
    // select2.style.border = '2px solid gold'
    const value = document.getElementById('lvl').value;
    props.setLevel(value);
  }

  return (
    <div className="themepage" id="thep">
      <p className="themehead">Select Theme</p>
      <div className="themeselector">
        <select name="" id="thm" onChange={setThemes} required>
          <option value="">Select Theme</option>
          <option value="a">Animals</option>
          <option value="b">Birds</option>
          <option value="c">Plants</option>
          <option value="d">Vehicles</option>
          <option value="e">Technology</option>
        </select>
        <select name="" id="lvl" onChange={setLevels} required>
          <option value="">Select Level</option >
          <option value="1">Beginner</option>
          <option value="2">Moderate</option>
          <option value="3">Pro</option>
        </select>
      </div>
      <button className="themebtn" id="themb" onClick={themeSelected}>Next <img src={Next} alt="" srcset="" /></button>
      <Footer></Footer>
    </div>
  )
}
