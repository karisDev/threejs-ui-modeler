import { GeometryObject, GeometryType } from "./components/three/interfaces";
import ThreeCanvas from "./components/three/ThreeCanvas";

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
  return (
    <div className="App">
      <ThreeCanvas geometries={geometries} />
    </div>
  );
}

export default App;
