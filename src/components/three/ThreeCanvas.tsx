import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { ThreeJSBodyProps } from "./interfaces";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

const ThreeCanvas: React.FC<ThreeJSBodyProps> = ({ scene, geometries }) => {
  // create canvas with a box, ambient light and orbit controls
  return (
    <Canvas>
      <OrbitControls
        maxDistance={10}
        minDistance={3}
        enableDamping={scene.cameraDamping ?? false}
      />
      <ambientLight intensity={0.5} />
      <Stars />
      {scene.backgroundColor && (
        <color attach="background" args={[scene.backgroundColor]} />
      )}
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default ThreeCanvas;
