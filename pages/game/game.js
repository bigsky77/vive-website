import Blocks from './blocks.js'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Component, useRef, useEffect, useState } from "react";
import Player from './player.js'
import high from '../../public/high.jpg'
import Enemy from './enemy.js'
import Star from './star.js'

const Game = (props) => {
    const [endGame, updateGameOver] = useState(false);
    const [score, updateScore] = useState(0);
    const [player, updatePlayer] = useState({x: 100, y: 700});

    let ref = useRef();

    useEffect(() => {  
      console.log(ref.current)
      checkWin();
    }, [player.x, player.y])

    const gameOver = (props) => {
      updateGameOver(true)
    };

    const checkWin = () => {
      if(player.x == 700 && player.y == 300){
        updateGameOver(true)
      }
    }
 
    if(endGame == true){
      return (
        <div>
        <h1>Game Over</h1>
            <Image src={high} height={300} width={200}/>
          <p>score={score}</p>
       </div>
      );
    }

    var stars = [];
    var starX = 0;
    var starY = 0;
    
    for(var j=0; j < 8; j++){
      starY +=100  
      stars.push(<Star x={starX} y={starY} playerX={player.x} playerY={player.y} updateScore={updateScore} score={score}/>)
      for (var i=0; i < 8; i++){
        starX+=100;
        stars.push(<Star x={starX} y={starY} playerX={player.x} playerY={player.y} updateScore={updateScore} score={score}/>)
      }
    }

    return (
        <div>
          <Enemy playerX={player.x} playerY={player.y} gameOver={gameOver}/>
          {stars}
          <Player updatePlayer={updatePlayer}/>
          <div className={styles.block} style={{top: 300 + 'px', left: 700 + 'px'}}>🌌</div>
        </div>); 
}

export default Game


