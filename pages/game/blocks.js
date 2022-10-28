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
  let timer = 10;
  let rangeX = [0, 100, 200];
  let type = ['💀', '🏆', '⭐️']

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
          blockY+=100
          updateBlockY(blockY);
      }
    }, 100) 

        return () => clearInterval(intervalId);
  },[])
 
    return (
    <div>
      <div className={styles.block} style={{top: blockY + 'px', left: blockX + 'px'}}>{type[emoji]}</div>
      <Player blockX={blockX} blockY={blockY} emoji={emoji} endGame={props.endGame} updateScore={props.updateScore}/>
    </div>
  );
}

export default Blocks


