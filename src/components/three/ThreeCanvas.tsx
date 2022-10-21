import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
      <OrbitControls enableDamping={false} />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
};

export default ThreeCanvas;
