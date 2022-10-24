import { MeshObject, GeometryType, SceneObject } from "../../three/interfaces";
import ThreeCanvas from "../../three/ThreeCanvas";
import TopNav, { TopNavItems } from "./TopNav";
import { ReactComponent as CubeIcon } from "../../../assets/icons/cube.svg";
import { ReactComponent as LightIcon } from "../../../assets/icons/lighting.svg";
import { ReactComponent as LandscapeIcon } from "../../../assets/icons/landscape.svg";
import { ReactComponent as ExportIcon } from "../../../assets/icons/export.svg";
import SideNav from "./SideNav/SideNav";
import { useState } from "react";

// test data
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

const CanvasController = () => {
  const [shapesActive, setShapesActive] = useState(false);
  const [lightingActive, setLightingActive] = useState(false);
  const [backgroundActive, setBackgroundActive] = useState(false);

  const topNavItems: TopNavItems[] = [
    {
      type: "button",
      icon: <CubeIcon />,
      tooltip: "Shapes",
      onClick: () => setShapesActive(!shapesActive),
      active: shapesActive,
    },
    {
      type: "button",
      icon: <LightIcon />,
      tooltip: "Lighting",
      onClick: () => setLightingActive(!lightingActive),
      active: lightingActive,
    },
    {
      type: "button",
      icon: <LandscapeIcon />,
      tooltip: "Background",
      onClick: () => setBackgroundActive(!backgroundActive),
      active: backgroundActive,
    },
    {
      type: "separator",
    },
    {
      type: "button",
      icon: <ExportIcon />,
      tooltip: "Export",
      onClick: () =>
        console.log(shapesActive, lightingActive, backgroundActive),
    },
  ];

  return (
    <main style={{ backgroundColor: "black" }}>
      <TopNav navItems={topNavItems} />
      <SideNav
        backgroundActive={backgroundActive}
        lightingActive={lightingActive}
        shapesActive={shapesActive}
      />
      <ThreeCanvas scene={scene} geometries={geometries} />
    </main>
  );
};

export default CanvasController;
