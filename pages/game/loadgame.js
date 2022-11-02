import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Game from "./game.js";
import { StrictMode, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Space from "../../public/space.jpg";
import React from 'react'

const LoadGame = () => {

  const [startGame, updateStartGame] = useState(false);

  const gameStart = () => {
    updateStartGame(true);
  }

  return(
      <div> 
      {
        startGame
        ? <Game/>
        : <Load gameStart={gameStart}/>
      }
      </div>
  );
} 

export default LoadGame


const Load = (props) => {
  return(
      <div>
        <div className={styles.backgroundImage}>
        <div className={styles.grid}>
          <button className={styles.card} onClick={props.gameStart} style={{backgroundColor: 'Transparent'}}>
            <p>לחץ כדי להתחיל את המשחק</p>
            <p>click to start game</p>
            <p>انقر لبدء اللعبة</p>
          </button>
        </div>
        </div>
      </div>
  );
}
