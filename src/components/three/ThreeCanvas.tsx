import { Canvas } from "@react-three/fiber";
import { CameraController } from "./CameraController";
interface ThreeJSBodyProps {}

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

const ThreeCanvas: React.FC<ThreeJSBodyProps> = () => {
  // create canvas with a box, ambient light and orbit controls
  return (
    <Canvas>
      <CameraController />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <color attach="background" args={["black"]} />
      <Box />
    </Canvas>
  );
};

export default ThreeCanvas;
