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
  let [y, updateY] = useState(700);
  let [score, updateScore] = useState(0);
 
  useEffect(() => {
    console.log(ref.current)
    window.addEventListener('keydown',keyDown);
    window.addEventListener('keyup',keyUp);
    checkCollide(); 
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

   }

    function checkCollide() {
      if (
        x == props.blockX && 
        y == props.blockY &&
        props.emoji == 0
      ){
        props.endGame({score});
      } else if(
        x == props.blockX && 
        y == props.blockY &&
        props.emoji == 1
      ){
        score+=5
        updateScore(score)
      } else if(
        x == props.blockX && 
        y == props.blockY &&
        props.emoji == 2
      ){
        score+=10
        updateScore(score)
      }
    }

      return( 
        <div>
          <h1>score = {score}</h1>
          <div className={styles.car} style={{top: y + 'px', left: x + 'px'}}>🚀</div>
        </div>
      )
}

export default Player
