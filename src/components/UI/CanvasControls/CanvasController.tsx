import { MeshObject, GeometryType, SceneObject } from "../../three/interfaces";
import ThreeCanvas from "../../three/ThreeCanvas";
import TopNav from "./TopNav";

const CanvasController = () => {
  const geometries: MeshObject[] = [
    {
      geometryType: GeometryType.Sphere,
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
    <main style={{ backgroundColor: "black" }}>
      <TopNav />
      <ThreeCanvas scene={scene} geometries={geometries} />
    </main>
  );
};

export default CanvasController;
