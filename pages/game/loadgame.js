import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import Game from "./game.js";
import { StrictMode, useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import space from "../../public/space.jpg"

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
        <Image src={space} height={1000} width={1000}/>
      <button className={styles.card} onClick={props.gameStart} style={{backgroundColor: 'white'}}>
        <p>לחץ כדי להתחיל את המשחק</p>
        <p>click to start game</p>
        <p>انقر لبدء اللعبة</p>
      </button>
      </div>
  );
}
