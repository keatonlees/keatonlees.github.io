// @ts-nocheck
import { useRef, useState } from "react";

// import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { randFloat } from "three/src/math/MathUtils";

function RotatingCube({ size, position, gradient }) {
  const cubeRef = useRef();
  const texture = useLoader(
    THREE.TextureLoader,
    require(`../../images/gradient_${gradient}.png`),
  );
  const [rotationSpeed] = useState({
    x: randFloat(-0.0003, 0.0003),
    y: randFloat(-0.0003, 0.0003),
    z: randFloat(-0.0003, 0.0003),
  });

  useFrame(() => {
    cubeRef.current.rotation.x += rotationSpeed.x;
    cubeRef.current.rotation.y += rotationSpeed.y;
    cubeRef.current.rotation.z += rotationSpeed.z;
  });

  return (
    <mesh ref={cubeRef} position={position}>
      <boxGeometry args={size} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

// function FloatingSphere({ position, gradient }) {
//   const sphereRef = useRef();
//   const texture = useLoader(
//     THREE.TextureLoader,
//     require(`../../images/gradient_${gradient}.png`),
//   );
//   const [rotationSpeed] = useState({
//     z: randFloat(-0.002, 0.002),
//   });

//   useFrame(() => {
//     sphereRef.current.rotation.z += rotationSpeed.z;
//   });

//   return (
//     <mesh ref={sphereRef} position={position}>
//       <sphereGeometry args={[0.2, 24, 24]} />
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// }

export default function CubesAndSpheresScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <RotatingCube
        size={[1.5, 1.5, 1.5]}
        position={[0, 0, -2]}
        gradient="primary"
      />
      <RotatingCube
        size={[0.8, 0.8, 0.8]}
        position={[-1, -1, -1.5]}
        gradient="primary"
      />
      <RotatingCube
        size={[0.8, 0.8, 0.8]}
        position={[1.5, -0.6, -1.5]}
        gradient="primary"
      />
      <RotatingCube
        size={[0.8, 0.8, 0.8]}
        position={[0.8, 1.6, -1.5]}
        gradient="primary"
      />
      <RotatingCube
        size={[0.8, 0.8, 0.8]}
        position={[-1.5, 1, -1.5]}
        gradient="primary"
      />

      <RotatingCube
        size={[1.3, 1.3, 1.3]}
        position={[0.8, 0.4, 0]}
        gradient="rbb"
      />
      <RotatingCube
        size={[0.8, 0.8, 0.8]}
        position={[-0.5, 0, 1.3]}
        gradient="gw"
      />
      <RotatingCube
        size={[1, 1, 1]}
        position={[0.2, -1, -1.3]}
        gradient="octodo"
      />
      <RotatingCube
        size={[0.8, 0.8, 0.8]}
        position={[-0.2, 1.2, -1.3]}
        gradient="jarvis"
      />
    </Canvas>
  );
}
