import { MeshObject, GeometryType, SceneObject } from "../../three/interfaces";
import ThreeCanvas from "../../three/ThreeCanvas";
import TopNav, { TopNavItems } from "./TopNav";
import { ReactComponent as CubeIcon } from "../../../assets/icons/cube.svg";
import { ReactComponent as LightIcon } from "../../../assets/icons/lighting.svg";
import { ReactComponent as LandscapeIcon } from "../../../assets/icons/landscape.svg";
import { ReactComponent as ExportIcon } from "../../../assets/icons/export.svg";

const CanvasController = () => {
  const topNavItems: TopNavItems[] = [
    {
      type: "button",
      icon: <CubeIcon />,
      tooltip: "Shapes",
      onClick: () => console.log("test"),
      active: true,
    },
    {
      type: "button",
      icon: <LightIcon />,
      tooltip: "Lighting",
      onClick: () => console.log("test"),
    },
    {
      type: "button",
      icon: <LandscapeIcon />,
      tooltip: "Background",
      onClick: () => console.log("test"),
    },
    {
      type: "separator",
    },
    {
      type: "button",
      icon: <ExportIcon />,
      tooltip: "Export",
      onClick: () => console.log("test"),
    },
  ];
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
      <TopNav navItems={topNavItems} />
      <ThreeCanvas scene={scene} geometries={geometries} />
    </main>
  );
};

export default CanvasController;
