import Blocks from './blocks.js'
import { Component, useRef, useEffect, useState } from "react";
import Player from './player.js'

const Game = (props) => {
    const [gameOver, updateGameOver] = useState(false);
    
    const endGame = () => {
      updateGameOver(true)
    };

    if(gameOver == true){
      return (
      <div>
        <h1>Game Over</h1>
      </div>
      );
    }

      return (
        <div>
          <Blocks endGame={endGame}/>
        </div>
      );
}

export default Game


