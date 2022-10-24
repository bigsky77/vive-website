import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../../styles/Home.module.css'

const Player = (props) => {
  let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false, Shift: false, Enter: false};

  const player={speed: 5, score: 0};
  const ref = useRef();
  
  let [x, updateX] = useState(700);
  let [y, updateY] = useState(100);
  let [isStopped, updateIsStopped] = useState(0);
  let [gameDisplay, updateGameDisplay] = useState('block');
 
  useEffect(() => {
    console.log(ref.current)
    window.addEventListener('keydown',keyDown);
    window.addEventListener('keyup',keyUp);
  },[])

  function keyUp(ev) {
    ev.preventDefault();
    keys[ev.key]=false;
    gameState();
  }

  function keyDown(ev) {
    ev.preventDefault();
    keys[ev.key]=true;
    gameState();
  }
  
  function gameState() {
 
      if(keys.ArrowUp){
        if(x >= 700){
          x == 0
          updateX(x)
        } else {
          x+=100
          updateX(x)
        }
      }

      if(keys.ArrowDown){
        if(x <= 0){
          x == 700
          updateX(x)
        } else {
          x-=100
          updateX(x)
        }
      }
      if(keys.ArrowLeft){
        if(y >= 200){
          y == 0
          updateY(y)
        } else {
          y+=100
          updateY(y)
        }             
      }
      if(keys.ArrowRight){
        if(y <= 0){
          y == 300
          updateY(y)
        } else {
          y-=100
          updateY(y)
           }
        }
  }
      return <div className={styles.car} style={{top: x + 'px', left: y + 'px', display: gameDisplay}}>🚀</div>
}

export default Player
