import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    const progress = useProgress();
  return <div>{progress}% loaded</div>
}

export default Loader