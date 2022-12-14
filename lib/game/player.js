import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../../styles/Home.module.css'
import Blocks from './blocks.js'
import Game from './game.js'

const Player = (props) => {
  let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false, Shift: false, Enter: false};

  const player={speed: 5, score: 0};
  const ref = useRef();
  
  let [x, updateX] = useState(100);
  let [y, updateY] = useState(200);
  let [score, updateScore] = useState(0);
 
  useEffect(() => {
    console.log(ref.current)
    window.addEventListener('keydown',keyDown);
    window.addEventListener('keyup',keyUp);
   }, [props.blockY, props.blockX], props.emoji)

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
        if(y >= 600){
          y == 0
          updateY(y)
        } else {
          y+=100
          updateY(y)
        }
      }

      if(keys.ArrowDown){
        if(y <= 0){
          y == 600
          updateY(y)
        } else {
          y-=100
          updateY(y)
        }
      }
      if(keys.ArrowLeft){
        if(x >= 800){
          x == 0
          updateX(x)
        } else {
          x+=100
          updateX(x)
        }             
      }
      if(keys.ArrowRight){
        if(x <= 0){
          x == 800
          updateX(x)
        } else {
          x-=100
          updateX(x)
           }
        }
      
      props.updatePlayer({x: x, y: y});
   }

      return( 
        <div>
          <div className={styles.car} style={{top: y + 'px', left: x + 'px'}}>🚀</div>
        </div>
      )
}

export default Player
