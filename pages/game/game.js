import Blocks from './blocks.js'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Component, useRef, useEffect, useState } from "react";
import Player from './player.js'
import high from '../../public/high.jpg'

const Game = (props) => {
    const [gameOver, updateGameOver] = useState(false);
    const [score, updateScore] = useState(0);
    const [player, updatePlayer] = useState({x: 100, y: 700});

    let ref = useRef();

    useEffect(() => {  
      console.log(ref.current)
    }, [player.x, player.y])

    const endGame = (props) => {
      updateGameOver(true)
    };

    if(gameOver == true){
      return (
        <div>
        <h1>Game Over</h1>
            <Image src={high} height={300} width={200}/>
          <p>score={score}</p>
       </div>
      );
    }

    return (
        <div>
          <h1>{score}</h1>
          <Blocks updateScore={updateScore} score={score} player={player} endGame={endGame}/>
          <Blocks updateScore={updateScore} score={score} player={player} endGame={endGame}/>
          <Player updatePlayer={updatePlayer}/>
        </div>); 
}

export default Game


