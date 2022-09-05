import React, { Suspense, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useLoader } from '@react-three/fiber';
import { Html, Preload, OrbitControls } from '@react-three/drei';

import styles from '../styles/Tour.module.css';

const store = [
  { name: 'Outside', color: 'lightpink', position: [10, 0, -15], url: 'https://res.cloudinary.com/dl38nyo08/image/upload/v1660638352/Roccolo%20del%20Lago/2294472375_24a3b8ef46_o_lppw9n.jpg', link: 1 },
  { name: 'Inside', color: 'lightblue', position: [15, 0, 0], url: 'https://res.cloudinary.com/dl38nyo08/image/upload/v1660638352/Roccolo%20del%20Lago/Photosphere1_fddta7.jpg', link: 0 }
]

const Dome = ({ name, position, texture, onClick }) => {
  return (
    <group>
      <mesh>
        <sphereBufferGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="white" />
        <Html center>
          <a className={styles.zindex} onClick={onClick}>{name}</a>
        </Html>
      </mesh>
    </group>
  )
}

const Portals = () => {
  const [which, set] = useState(0);
  const { link, ...props } = store[which];
  const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url));

  return (
    <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
  )
}

const View360 = () => {
    return (
        <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              touches={THREE.ROTATE} 
              enableDamping 
              dampingFactor={0.2} 
              autoRotate={false} 
              rotateSpeed={-0.5} 
            />
                <Suspense fallback={null}>
                <Preload all />
                <Portals />
            </Suspense>
        </Canvas>
    )
}
export default View360