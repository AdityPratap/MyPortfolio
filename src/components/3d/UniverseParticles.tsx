'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function UniverseParticles() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Character set for data particles
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*(){}[]<>?/=+'
  
  // Create canvas texture for a character
  const createCharacterTexture = (char: string, color: string) => {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')!
    
    // Clear with transparency
    ctx.clearRect(0, 0, 64, 64)
    
    // Draw glow
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
    gradient.addColorStop(0, `${color}ff`)
    gradient.addColorStop(0.5, `${color}80`)
    gradient.addColorStop(1, `${color}00`)
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 64, 64)
    
    // Draw character
    ctx.font = 'bold 40px "Courier New", monospace'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'white'
    ctx.fillText(char, 32, 32)
    
    return new THREE.CanvasTexture(canvas)
  }
  
  // Create canvas texture for tool icons
  const createIconTexture = (type: string) => {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')!
    
    ctx.clearRect(0, 0, 128, 128)
    
    // Draw glow based on icon type
    let color, symbol
    
    switch(type) {
      case 'python':
        color = '#3776AB'
        symbol = '🐍'
        break
      case 'tensorflow':
        color = '#FF6F00'
        symbol = 'TF'
        break
      case 'pytorch':
        color = '#EE4C2C'
        symbol = '🔥'
        break
      case 'sql':
        color = '#4479A1'
        symbol = 'SQL'
        break
      case 'ai':
        color = '#8B5CF6'
        symbol = '🤖'
        break
      case 'data':
        color = '#10B981'
        symbol = '📊'
        break
      default:
        color = '#FFFFFF'
        symbol = '⚡'
    }
    
    // Draw glow
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
    gradient.addColorStop(0, `${color}ff`)
    gradient.addColorStop(0.6, `${color}80`)
    gradient.addColorStop(1, `${color}00`)
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 128, 128)
    
    // Draw symbol or text
    ctx.font = 'bold 60px "Arial", sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = 'white'
    ctx.fillText(symbol, 64, 64)
    
    return new THREE.CanvasTexture(canvas)
  }
  
  // Generate all particles
  const particles = useMemo(() => {
    const particleData = []
    const totalCount = 600
    
    // 80% data particles (characters/numbers)
    const dataParticleCount = Math.floor(totalCount * 0.8)
    
    // Create data particles
    for (let i = 0; i < dataParticleCount; i++) {
      const radius = 20 + Math.random() * 50
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      const char = characters[Math.floor(Math.random() * characters.length)]
      
      // Color based on character type
      let color
      if (char >= '0' && char <= '9') {
        color = '#FFAA00' // Orange-gold for numbers
      } else if ('!@#$%^&*(){}[]<>?/='.includes(char)) {
        color = '#FF66CC' // Pink for symbols
      } else {
        color = '#88CCFF' // Blue for letters
      }
      
      particleData.push({
        type: 'data',
        position: [x, y, z],
        texture: createCharacterTexture(char, color),
        scale: 0.3 + Math.random() * 0.4,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
      })
    }
    
    // 20% tool icons
    const iconTypes = ['python', 'tensorflow', 'pytorch', 'sql', 'ai', 'data']
    const iconCount = totalCount - dataParticleCount
    
    for (let i = 0; i < iconCount; i++) {
      const radius = 25 + Math.random() * 60
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      const iconType = iconTypes[Math.floor(Math.random() * iconTypes.length)]
      
      particleData.push({
        type: 'icon',
        position: [x, y, z],
        texture: createIconTexture(iconType),
        scale: 0.5 + Math.random() * 0.6,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
      })
    }
    
    return particleData
  }, [])
  
  // Animation
  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Slow rotation of entire universe
      groupRef.current.rotation.y += 0.0001
      
      // Pulse effect on all particles
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Sprite) {
          const scale = particles[i].scale
          const pulse = 1 + Math.sin(clock.getElapsedTime() * 2 + i) * 0.1
          child.scale.set(scale * pulse, scale * pulse, 1)
        }
      })
    }
  })
  
  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <sprite
          key={index}
          position={new THREE.Vector3(particle.position[0], particle.position[1], particle.position[2])}
          scale={particle.scale}
        >
          <spriteMaterial
            map={particle.texture}
            blending={THREE.AdditiveBlending}
            depthTest={true}
            depthWrite={false}
            transparent={true}
            opacity={0.7}
          />
        </sprite>
      ))}
    </group>
  )
}