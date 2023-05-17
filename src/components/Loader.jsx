import React from 'react'
import { Html,useProgress } from '@react-three/drei'

const Loader = () => {
  const {progress} = useProgress();

  return (
    <Html>
      <span className='canvasLoad'></span>
      <p
        style={{
          fontSize:16,
          color:'#f1f1f1',
          fontWeight:600,
          marginTop:40
        }}
      >{progress.toFixed(2)}%</p>
    </Html> 
  )
}

export default Loader