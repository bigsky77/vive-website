import { Component, useRef, useEffect, useState } from "react";
import Player from './player.js'
import styles from '../../styles/Home.module.css'

const Enemy = (props) => {
  const [enemy, updateEnemy] = useState({x: 300, y: 100 });
  const ref = useRef(); 

  let moveX = [0, 100, -100];
  let moveY = [0, 100, -100];
  
  useEffect(() => {
    console.log(ref.current); 
    checkCollide();

    const intervalId = setInterval(() => {
      move();    
    }, 200);
        return () => clearInterval(intervalId);

  }, [props.playerX, props.playerY])

  const checkCollide = () => {
    if(props.playerX == enemy.x && props.playerY == enemy.y){
      props.gameOver();
    }
  }

  const move = () => {
      let newX = enemy.x + moveX[Math.floor(Math.random() * moveX.length)] 
      let newY = enemy.y + moveY[Math.floor(Math.random() * moveX.length)] 
      
      updateEnemy(previousState => {
          return { ...previousState, y: newY, x: newX}
        });
  }

  return(
    <div>    
      <div className={styles.block} style={{top: enemy.y + 'px', left: enemy.x + 'px'}}>☠️</div>
    </div>
  );
}

export default Enemy
