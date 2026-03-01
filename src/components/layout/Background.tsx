'use client'

import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import Globe from '@/components/3d/Globe'
import UniverseParticles from '@/components/3d/UniverseParticles'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        {/* Deep space background - pure black */}
        <color attach="background" args={['#000000']} />
        
        {/* Minimal lighting - just enough to see the globe texture */}
        <ambientLight intensity={0.2} />
        
        {/* Universe particles with night theme */}
        <UniverseParticles />
        
        {/* Main globe */}
        <Globe />
        
        {/* Night environment preset */}
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}