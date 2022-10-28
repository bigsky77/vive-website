import Blocks from './blocks.js'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { Component, useRef, useEffect, useState } from "react";
import Player from './player.js'
import high from '../../public/high.jpg'

const Game = (props) => {
    const [gameOver, updateGameOver] = useState(false);
    const [score, updateScore] = useState(0);

    const endGame = (props) => {
      updateGameOver(true)
      let score = props.score
      updateScore(score)
    };

    const mintNFT = (props) => {

    }

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
        {Array(1).fill(<Blocks endGame={endGame} updateScore={updateScore}/>)}
        </div>
      );
}

export default Game


