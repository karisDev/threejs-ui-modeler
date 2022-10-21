import { GeometryObject, GeometryType } from "./interfaces";

interface GeometryProps {
  type: GeometryType;
}

const Geometry: React.FC<GeometryProps> = ({ type }) => {
  switch (type) {
    case GeometryType.Box:
      return <boxBufferGeometry attach="geometry" />;
    default:
      throw new Error("Geometry type not supported");
  }
};

interface ThreeJSBodyProps {
  geometries: GeometryObject[];
}

const ThreeJSBody: React.FC<ThreeJSBodyProps> = ({ geometries }) => {
  return (
    <>
      {geometries.map((geometry, index) => {
        return (
          <mesh
            key={index}
            position={geometry.position}
            rotation={geometry.rotation}
            scale={geometry.scale}
          >
            <Geometry type={geometry.type} />
            <meshStandardMaterial
              color={geometry.material.color ?? "white"}
              roughness={geometry.material.roughness}
              metalness={geometry.material?.metalness}
              wireframe={geometry.material?.wireframe}
            />
          </mesh>
        );
      })}
    </>
  );
};

export default ThreeJSBody;
