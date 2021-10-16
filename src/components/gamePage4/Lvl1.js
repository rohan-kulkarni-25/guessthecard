import React from 'react'
import './Lvl1.css'
import Tech1 from '../../cardimg/tech/1.png'
import Tech2 from '../../cardimg/tech/2.png'
import Tech3 from '../../cardimg/tech/3.png'

export default function Lvl1() {

  const valueArray = [1, 2, 3, 1, 2, 3];

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  let IMG1 = Tech1;
  let IMG2 = Tech1;
  let IMG3 = Tech1;
  let IMG4 = Tech1;
  let IMG5 = Tech1;
  let IMG6 = Tech1;

  const gameSetter = () => {
    shuffle(valueArray);
    for (let index = 0; index < valueArray.length; index++) {
      let sampleImg;
      switch (valueArray[index]) {
        case 1:
          sampleImg = Tech1
          break;
        case 2:
          sampleImg = Tech2
          break;
        case 3:
          sampleImg = Tech3;
          break;
        default:
          break;
      }
      switch (index) {
        case 1:
          IMG1 = sampleImg
          break;
        case 2:
          IMG2 = sampleImg
          break;
        case 3:
          IMG3 = sampleImg
          break;
        case 4:
          IMG4 = sampleImg
          break;
        case 5:
          IMG5 = sampleImg
          break;
        case 6:
          IMG6 = sampleImg
          break;
        default:
          break;
      }
    }
  }

  const cardClicked = (event) => {
    const card = event.target;
    card.innerHTMl = 'HI';
    const imgInCard = card.children[0];
    card.style.animationPlayState = 'running';
    imgInCard.style.display = 'block';
  }

  gameSetter();
  return (
    <div className="gameboard" >
      <p id="1" onClick={cardClicked}><img className="cardimg" src={IMG1} alt="" srcset="" /></p>
      <p id="2" onClick={cardClicked}><img className="cardimg" src={IMG2} alt="" srcset="" /></p>
      <p id="3" onClick={cardClicked}><img className="cardimg" src={IMG3} alt="" srcset="" /></p>
      <p id="4" onClick={cardClicked}><img className="cardimg" src={IMG4} alt="" srcset="" /></p>
      <p id="5" onClick={cardClicked}><img className="cardimg" src={IMG5} alt="" srcset="" /></p>
      <p id="6" onClick={cardClicked}><img className="cardimg" src={IMG6} alt="" srcset="" /></p>
    </div>
  )
}
