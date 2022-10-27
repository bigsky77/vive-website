import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../../styles/Home.module.css'
import Canvas from './blocks.js'
import Game from './game.js'

const Player = (props) => {
  let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false, Shift: false, Enter: false};

  const player={speed: 5, score: 0};
  const ref = useRef();
  
  let [x, updateX] = useState(100);
  let [y, updateY] = useState(700);
 
  useEffect(() => {
    console.log(ref.current)
    window.addEventListener('keydown',keyDown);
    window.addEventListener('keyup',keyUp);
      
      const interval = setInterval(() => {
          checkCollide();
      }, 0.001)
        return () => clearInterval(interval);

      }, [])

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
        if(y >= 700){
          y == 0
          updateY(y)
        } else {
          y+=100
          updateY(y)
        }
      }

      if(keys.ArrowDown){
        if(y <= 0){
          y == 700
          updateY(y)
        } else {
          y-=100
          updateY(y)
        }
      }
      if(keys.ArrowLeft){
        if(x >= 200){
          x == 0
          updateX(x)
        } else {
          x+=100
          updateX(x)
        }             
      }
      if(keys.ArrowRight){
        if(x <= 0){
          x == 300
          updateX(x)
        } else {
          x-=100
          updateX(x)
           }
        }

        checkCollide();
   }

    function checkCollide() {
      if (x == props.blockX && y == props.blockY){
        props.endGame();
      }
    }

      return( 
        <div>
        <h1>x={x} y={y}</h1>
        <h1>bx={props.blockX} by={props.blockY}</h1>
        <div>
          <div className={styles.car} style={{top: y + 'px', left: x + 'px'}}>🚀</div>
        </div>
        </div>
      )
}

export default Player
