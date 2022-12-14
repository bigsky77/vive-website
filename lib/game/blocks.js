import React, { useRef, useEffect, useState } from 'react'
import Game from './game.js'
import Player from './player.js'
import ReactDOM from "react-dom";
import styles from '../../styles/Home.module.css'

const Blocks = (props) => {
  
  const ref = useRef();

  let [blockX, updateBlockX] = useState(100);
  let [blockY, updateBlockY] = useState(0);
  let [emoji, updateEmoji] = useState(0);
  let score = 0;
  let rangeX = [0, 100, 200];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(blockY >= 700){
          blockY = 0;
          updateBlockY(blockY);
          blockX = Math.floor(Math.random() * rangeX.length)
          updateBlockX(rangeX[blockX])
          emoji = Math.floor(Math.random() * type.length)
          updateEmoji(emoji)
      } else {
          blockY += 100
          updateBlockY(blockY);
      }

      checkCollide();
    }, 100) 
        return () => clearInterval(intervalId);

  }, [props.player.x, props.player.y])

  function checkCollide(){
      if (
        blockX == props.player.x && 
        blockY == props.player.y &&
        emoji == 0
      ){
        props.endGame(props.score);
      } else if(
        blockX == props.player.x && 
        blockY == props.player.y &&
        emoji == 1
      ){
        props.updateScore(props.score + 5)
      } else if(
        blockX == props.player.x && 
        blockY == props.player.y &&
        emoji == 2
      ){
        props.updateScore(props.score + 10)
      }
    }

 return (
    <div>
      <div className={styles.block} style={{top: blockY + 'px', left: blockX + 'px'}}>⭐️</div>
    </div>
  );
}

export default Blocks




