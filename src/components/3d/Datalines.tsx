'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Major cities/countries coordinates [lng, lat] - focusing on Asia/Australia
const cities = [
  // India (primary focus)
  { name: "Mumbai", lng: 72.8777, lat: 19.0760 },
  { name: "Delhi", lng: 77.1025, lat: 28.7041 },
  { name: "Bangalore", lng: 77.5946, lat: 12.9716 },
  { name: "Chennai", lng: 80.2707, lat: 13.0827 },
  { name: "Kolkata", lng: 88.3639, lat: 22.5726 },
  { name: "Hyderabad", lng: 78.4867, lat: 17.3850 },
  
  // Asia
  { name: "Shanghai", lng: 121.4737, lat: 31.2304 },
  { name: "Beijing", lng: 116.4074, lat: 39.9042 },
  { name: "Tokyo", lng: 139.6917, lat: 35.6895 },
  { name: "Seoul", lng: 126.9780, lat: 37.5665 },
  { name: "Singapore", lng: 103.8198, lat: 1.3521 },
  { name: "Bangkok", lng: 100.5018, lat: 13.7563 },
  { name: "Jakarta", lng: 106.8456, lat: -6.2088 },
  { name: "Manila", lng: 120.9842, lat: 14.5995 },
  { name: "Kuala Lumpur", lng: 101.6869, lat: 3.1390 },
  
  // Australia
  { name: "Sydney", lng: 151.2093, lat: -33.8688 },
  { name: "Melbourne", lng: 144.9631, lat: -37.8136 },
  { name: "Brisbane", lng: 153.0251, lat: -27.4698 },
  { name: "Perth", lng: 115.8605, lat: -31.9505 },
  
  // Middle East
  { name: "Dubai", lng: 55.2708, lat: 25.2048 },
  { name: "Riyadh", lng: 46.6753, lat: 24.7136 },
]

// Filter cities to only those visible in our initial view
const visibleCities = cities.filter(city => {
  return (city.lng > 40 && city.lng < 160) && (city.lat > -40 && city.lat < 50)
})

// Neon white color
const NEON_WHITE = new THREE.Color(0.9, 0.95, 1.0) // Slightly blue-tinted white for that neon glow

export default function DataLines() {
  const linesRef = useRef<THREE.Group>(null)
  const [connections, setConnections] = useState<any[]>([])
  
  // Initialize connections
  useEffect(() => {
    const newConnections = []
    const numberOfLines = 15
    
    for (let i = 0; i < numberOfLines; i++) {
      // Pick random start and end cities from visible set
      const startCity = visibleCities[Math.floor(Math.random() * visibleCities.length)]
      let endCity = visibleCities[Math.floor(Math.random() * visibleCities.length)]
      
      // Ensure different cities
      let attempts = 0
      while (endCity.name === startCity.name && attempts < 10) {
        endCity = visibleCities[Math.floor(Math.random() * visibleCities.length)]
        attempts++
      }
      
      // Convert to 3D coordinates
      const startPhi = (90 - startCity.lat) * Math.PI / 180
      const startTheta = startCity.lng * Math.PI / 180
      const endPhi = (90 - endCity.lat) * Math.PI / 180
      const endTheta = endCity.lng * Math.PI / 180
      
      // Calculate points on sphere surface
      const startPoint = new THREE.Vector3(
        Math.sin(startPhi) * Math.cos(startTheta),
        Math.cos(startPhi),
        Math.sin(startPhi) * Math.sin(startTheta)
      ).multiplyScalar(2.15)
      
      const endPoint = new THREE.Vector3(
        Math.sin(endPhi) * Math.cos(endTheta),
        Math.cos(endPhi),
        Math.sin(endPhi) * Math.sin(endTheta)
      ).multiplyScalar(2.15)
      
      // Calculate midpoint for curve
      const midPoint = new THREE.Vector3().lerpVectors(startPoint, endPoint, 0.5)
      // Push it outward slightly for the arc
      midPoint.normalize().multiplyScalar(2.28)
      
      // Create curve
      const curve = new THREE.QuadraticBezierCurve3(startPoint, midPoint, endPoint)
      
      newConnections.push({
        id: i,
        curve,
        color: NEON_WHITE, // All lines use the same neon white color
        progress: Math.random(),
        speed: 0.001 + Math.random() * 0.002,
        segments: 15,
        width: 0.006,
        startCity: startCity.name,
        endCity: endCity.name
      })
    }
    
    setConnections(newConnections)
  }, [])
  
  // Animation for moving lines
  useFrame(() => {
    if (linesRef.current && connections.length > 0) {
      // Update each line segment
      linesRef.current.children.forEach((child, index) => {
        const connectionIndex = Math.floor(index / 15)
        const segmentIndex = index % 15
        
        if (connections[connectionIndex]) {
          const connection = connections[connectionIndex]
          
          // Calculate position along curve
          const segmentSpacing = 0.03
          const baseProgress = (connection.progress + (segmentIndex * segmentSpacing)) % 1
          const nextProgress = Math.min(baseProgress + 0.04, 1)
          
          if (baseProgress < 0.98 && nextProgress <= 1) {
            const startPoint = connection.curve.getPoint(baseProgress)
            const endPoint = connection.curve.getPoint(nextProgress)
            
            // Position at midpoint
            const midPoint = new THREE.Vector3().lerpVectors(startPoint, endPoint, 0.5)
            child.position.copy(midPoint)
            
            // Scale to fit between points
            const direction = new THREE.Vector3().subVectors(endPoint, startPoint)
            const distance = direction.length()
            
            child.scale.set(connection.width, distance * 1.8, connection.width)
            
            // Rotate to follow curve
            child.quaternion.setFromUnitVectors(
              new THREE.Vector3(0, 1, 0),
              direction.clone().normalize()
            )
          } else {
            child.position.set(0, 100, 0) // Hide off-screen
          }
        }
      })
      
      // Update progress
      connections.forEach(connection => {
        connection.progress += connection.speed
        if (connection.progress > 1) {
          connection.progress = 0
        }
      })
    }
  })
  
  return (
    <group ref={linesRef}>
      {connections.map((connection) => (
        // Create 15 segments per line for smoother curves
        [...Array(15)].map((_, i) => (
          <mesh key={`${connection.id}-${i}`}>
            <cylinderGeometry args={[1, 1, 1, 6]} />
            <meshPhongMaterial 
              color={connection.color}
              emissive={connection.color}
              emissiveIntensity={1.0} // Increased for brighter glow
              transparent
              opacity={0.7}
            />
          </mesh>
        ))
      ))}
    </group>
  )
}