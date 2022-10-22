import {
  GeometryObject,
  GeometryType,
  SceneObject,
} from "./components/three/interfaces";
import ThreeCanvas from "./components/three/ThreeCanvas";
import TopNav from "./components/UI/TopNav";

function App() {
  // wait for import to finish
  const geometries: GeometryObject[] = [
    {
      type: GeometryType.Box,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      material: {
        color: "red",
        roughness: 0.5,
        metalness: 0.5,
        wireframe: false,
      },
    },
  ];
  const scene: SceneObject = {
    cameraDamping: true,
    backgroundColor: "#565656",
  };

  return (
    <>
      <TopNav />
      <main style={{ backgroundColor: "black" }}>
        <ThreeCanvas scene={scene} geometries={geometries} />
      </main>
    </>
  );
}

export default App;
