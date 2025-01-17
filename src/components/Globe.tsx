import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const textureLoader = new THREE.TextureLoader();
  
  // Load earth texture
  const earthTexture = textureLoader.load('/earth-texture.jpg');
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        map={earthTexture}
        metalness={0.4}
        roughness={0.7}
        emissive="#150033"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

export default Globe;