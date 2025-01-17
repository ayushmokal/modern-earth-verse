import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    let isSubscribed = true;

    textureLoader.load(
      '/earth-texture.jpg',
      (loadedTexture) => {
        if (isSubscribed) {
          loadedTexture.colorSpace = THREE.SRGBColorSpace;
          setTexture(loadedTexture);
        }
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error);
      }
    );

    return () => {
      isSubscribed = false;
      if (texture) {
        texture.dispose();
      }
    };
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  if (!texture) {
    return null;
  }

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        metalness={0.2}
        roughness={0.8}
        emissive="#ffffff"
        emissiveMap={texture}
        emissiveIntensity={0.8}
      />
    </mesh>
  );
};

export default Globe;