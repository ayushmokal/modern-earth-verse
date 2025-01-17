import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const orbitPathsRef = useRef<THREE.Line[]>([]);
  const satellitesRef = useRef<THREE.Mesh[]>([]);
  
  // Load earth texture
  const earthTexture = useTexture('/earth-texture.jpg');
  
  useEffect(() => {
    if (!meshRef.current) return;
    
    // Create orbit paths
    const createOrbitPath = (radius: number, angle: number) => {
      const curve = new THREE.EllipseCurve(
        0, 0,
        radius, radius,
        0, 2 * Math.PI,
        false,
        0
      );
      
      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0x4a9eff, transparent: true, opacity: 0.5 });
      const ellipse = new THREE.Line(geometry, material);
      
      ellipse.rotation.x = angle;
      return ellipse;
    };
    
    // Create multiple orbit paths
    const orbits = [
      createOrbitPath(2.2, Math.PI / 6),
      createOrbitPath(2.5, -Math.PI / 4),
      createOrbitPath(2.8, Math.PI / 3)
    ];
    
    orbits.forEach(orbit => {
      meshRef.current?.add(orbit);
    });
    
    orbitPathsRef.current = orbits;
    
    // Create satellites
    const satelliteGeometry = new THREE.SphereGeometry(0.04, 16, 16);
    const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    
    const satellites = orbits.map(() => {
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      meshRef.current?.add(satellite);
      return satellite;
    });
    
    satellitesRef.current = satellites;
    
    return () => {
      orbits.forEach(orbit => {
        meshRef.current?.remove(orbit);
        orbit.geometry.dispose();
        orbit.material.dispose();
      });
      
      satellites.forEach(satellite => {
        meshRef.current?.remove(satellite);
        satellite.geometry.dispose();
        satellite.material.dispose();
      });
    };
  }, []);
  
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    
    // Rotate globe
    meshRef.current.rotation.y += 0.001;
    
    // Update satellite positions
    satellitesRef.current.forEach((satellite, index) => {
      const time = clock.getElapsedTime();
      const radius = 2.2 + index * 0.3;
      const speed = 0.2 - index * 0.05;
      
      satellite.position.x = Math.cos(time * speed) * radius;
      satellite.position.z = Math.sin(time * speed) * radius;
      satellite.position.y = Math.sin(time * speed) * (radius * 0.3);
    });
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={earthTexture}
        metalness={0.4}
        roughness={0.7}
      />
    </mesh>
  );
};

export default Globe;