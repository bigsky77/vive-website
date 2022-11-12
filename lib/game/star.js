import { Component, useRef, useEffect, useState } from "react";
import Player from './player.js'
import styles from '../../styles/Home.module.css'

const Star = (props) => {
  const [star, updateStar] = useState({x: props.x, y: props.y });
  
  let ref = useRef();

  useEffect(() => {
    console.log(ref.current); 
    checkCollide();
  }, [props.playerX, props.playerY, props.score])

  const checkCollide = () => {
    if(props.playerX == star.x && props.playerY == star.y){
      updateStar({x: 1000, y: 1000})
      let n = props.score + 5; 
      props.updateScore(n)
    }
  }

  return(
    <div>
      <div className={styles.block} style={{top: star.y + 'px', left: star.x + 'px'}}>⭐️</div>
    </div>
  );

}

export default Star
