import Player from './player.js'
import Canvas from './blocks.js'
import { Component, useRef, useEffect, useState } from "react";

const Game = (props) => {
    const [gameOver, updateGameOver] = useState(false);
    
    const endGame = (event, bool) => {
      updateGameOver(true)
    };

      return (
        <div>
          <Canvas endGame={endGame}/>
        </div>
      );
}

export default Game

