import { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from '../../styles/Home.module.css'

export default function Game() {
  let keys={ArrowUp: false, ArrowDown: false, ArrowRight: false, ArrowLeft: false, Shift: false, Enter: false};

  const player={speed: 5, score: 0};
  const ref = useRef();
  
  let [x, updateX] = useState(700);
  let [y, updateY] = useState(100);
  let [playerColor, updateColor] = useState('#CD955C');
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
  
    if(!isStopped){ 
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

    checkColide();
  }

  let numbers = [0, 100, 200];
  let colors = ['#CD5C5C', ' #CD955C'];
  let [color1, updateColor1] = useState('#CD5C5C');
  let emojis = ["💀", "⭐️", '👑'];
  let timer = 100;

  const [x1, updateX1] = useState(0);
  const [y1, updateY1] = useState(random());
  const [emoji, updateEmoji] = useState("💀")
  
  useEffect(() => {
        const intervalId = setInterval(() => {

          if(x1 >= 700){
            x1 = 0
            y1 = random()
            updateY1(y1)
            updateX1(x1)
            let num = Math.floor(Math.random()*emojis.length);
            updateEmoji(emojis[num]);

        } else {
            checkColide();
            x1+=50;
            updateX1(x1);
        }
    }, timer)
        
        return () => clearInterval(intervalId);
    }, [])

  function random(){
    return numbers[Math.floor(Math.random()*numbers.length)]
  }

  const [display, updateDisplay] = useState('none')
  const [score, updateScore] = useState(0);
  
  function checkColide() {
    if(emoji == emojis[0]){
    if(x == x1 && y == y1) {
        updateIsStopped(true);       
        updateDisplay('block')
        updateGameDisplay('none')
      }

    }

  }

  return(
    <div>
      <div className={styles.block} style={{top: x1 + 'px', left: y1 + 'px', backgroundColor: 'none', display: gameDisplay}}>{emoji}</div>
      <div className={styles.block} style={{top: x1 + 'px', left: y1 + 'px', backgroundColor: 'none', display: gameDisplay}}>{emoji}</div>
      <div className={styles.car} style={{top: x + 'px', left: y + 'px', backgroundColor: playerColor, display: gameDisplay}}>🚀</div>
      <div className={styles.description} style={{display: display}}>GAME OVER</div>
      <div className={styles.description} style={{display: 'block'}}>{score}</div>
    </div>
  );
} 
