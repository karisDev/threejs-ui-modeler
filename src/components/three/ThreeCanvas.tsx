import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { MeshObject, SceneObject } from "./interfaces";
import MeshBuilder from "./MeshBuilder";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}

export interface ThreeCanvasProps {
  scene: SceneObject;
  geometries: MeshObject[];
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ scene, geometries }) => {
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
      <MeshBuilder meshes={geometries} />
    </Canvas>
  );
};

export default ThreeCanvas;
