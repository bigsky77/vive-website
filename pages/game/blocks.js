import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  let rectX = 0;
  let rectY = 0;

  const canvasRef = useRef(null)
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#CD5C5C'
    ctx.beginPath()
    ctx.fillRect(rectX, rectY, 50, 10)
    ctx.fill()
  }
  
  const update = () => {
    if(rectY > 600){
      rectY = 0;
    } else {
      rectY += 1;
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
  
  return <canvas ref={canvasRef} {...props} style={{width: '100%', height: '100%'}}></canvas>
}

export default Canvas


