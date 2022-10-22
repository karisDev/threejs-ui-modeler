import { useEffect, useState } from "react";
import { GeometryType, MaterialType, MeshObject } from "./interfaces";

interface MeshBuilderProps {
  meshes: MeshObject[];
}

const MeshBuilder: Function = ({ meshes }: MeshBuilderProps): JSX.Element[] => {
  const [meshComponents, setMeshComponents] = useState<JSX.Element[]>([]);
  useEffect(() => {
    setMeshComponents(
      meshes.map((mesh: MeshObject, index: number) => {
        const geometry = () => {
          switch (mesh.geometryType) {
            case GeometryType.Box:
              return <boxBufferGeometry attach="geometry" />;
            case GeometryType.Sphere:
              return <sphereBufferGeometry attach="geometry" />;
          }
        };
        const material = () => {
          switch (mesh.material) {
            case MaterialType.MeshNormalMaterial:
              return <meshNormalMaterial attach="material" />;
            default:
              return <meshNormalMaterial attach="material" />;
          }
        };
        return (
          <mesh key={index} position={mesh.position}>
            {geometry()}
            {material()}
          </mesh>
        );
      })
    );
  }, [meshes]);

  return meshComponents ?? null;
};

export default MeshBuilder;
