import Player from './player.js'
import Canvas from './blocks.js'
import { Component, useRef, useEffect, useState } from "react";

const Game = (props) => {

    return (
      <div>
        <h1></h1>
        <Canvas/>
        <Player/>
      </div>
  );
}

export default Game

