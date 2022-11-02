import Blocks from './blocks.js'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Component, useRef, useEffect, useState } from "react";
import Player from './player.js'
import photo46 from '../../public/photo47.jpg'
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
        <h1 className={styles.description}>Game Over</h1>
            <div className={styles.description}>
              <Image src={photo46} height={350} width={250}/>
            </div>
          <p className={styles.description}>score={score}</p>
       </div>
      );
    }
    
    const fillStars = () => {
      var stars = [];
      var starX = [0, 100, 200, 300, 400, 500, 600, 700];
      var starY = [0, 100, 200, 300, 400, 500, 600, 700];
    
      for(var i=0; i < 40; i++){
        let newX = starX[Math.floor(Math.random() * starX.length)] 
        let newY = starY[Math.floor(Math.random() * starY.length)] 
        stars.push(<Star x={newX} y={newY} playerX={player.x} playerY={player.y} updateScore={updateScore} score={score}/>)
      }

      return stars
    }

    return (
        <div>
          <Enemy playerX={player.x} playerY={player.y} gameOver={gameOver}/>
          <Enemy playerX={player.x} playerY={player.y} gameOver={gameOver}/>
          <Enemy playerX={player.x} playerY={player.y} gameOver={gameOver}/>
          {fillStars()}
          <Player updatePlayer={updatePlayer}/>
          <div className={styles.block} style={{top: 300 + 'px', left: 700 + 'px'}}>🌌</div>
        </div>); 
}

export default Game


