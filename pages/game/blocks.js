import React, { useRef, useEffect, useState } from 'react'
import Game from './game.js'
import Player from './player.js'

const Canvas = (props) => {
  
  let [x, updateX] = useState(0) 
  let [y, updateY] = useState(0) 

  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#CD5C5C'
    ctx.beginPath()
    ctx.fillRect(x, y, 50, 10)
    ctx.fill()
  }
  
  const update = () => {
    if(y > 130){
      let rectX = Math.floor(Math.random() * 250);
      updateX(rectX)
      updateY(0);
    } else {
      let num = y + 0.005;
      updateY(num)
    } 
  }

  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 60
    let animationFrameId
    
    //Our draw came here
    const render = () => {
      frameCount++
      update()
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return (
    <div>
      <canvas ref={canvasRef} {...props} style={{width: '300px', height: '800px'}}></canvas>
      <Player blockX={x} blockY={y} endGame={endGame}/>
    </div>
  );
}

export default Canvas


