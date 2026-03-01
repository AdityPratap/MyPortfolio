'use client'

import { useRef, useMemo, useEffect } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import DataLines from './Datalines' // Import the new component

export default function Globe() {
  const globeRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const scrollProgress = useScrollPosition()
  
  // Load texture
  const texture = useLoader(THREE.TextureLoader, '/globe-night.jpg')
  
  // Position calculation
  const positionX = useMemo(() => {
    return -8 + (scrollProgress * 16)
  }, [scrollProgress])
  
  // Set initial rotation
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.rotation.x = 0.25
      globeRef.current.rotation.y = 4.7
      globeRef.current.rotation.z = -0.1
    }
  }, [])
  
  // Animation
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0005
    }
  })
  
  return (
    <group ref={groupRef} position={[positionX, 0, -0.5]} scale={[4.5, 4.5, 4.5]}>
      {/* Globe with texture */}
      <Sphere ref={globeRef} args={[2, 128, 128]}>
        <meshBasicMaterial map={texture} />
      </Sphere>
      
      {/* Data lines connecting cities */}
      <DataLines />
      
      {/* Very subtle atmosphere glow */}
      <Sphere args={[2.08, 64, 64]}>
        <meshPhongMaterial 
          color="#88aadd" 
          transparent 
          opacity={0.08}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}