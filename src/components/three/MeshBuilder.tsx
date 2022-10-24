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
              return <boxBufferGeometry />;
            case GeometryType.Sphere:
              return <sphereBufferGeometry args={[1, 24, 24]} />;
          }
        };
        const material = () => {
          switch (mesh.material.type) {
            case MaterialType.MeshNormalMaterial:
              return <meshNormalMaterial />;
            case MaterialType.MeshBasicMaterial:
              return (
                <meshBasicMaterial
                  color={mesh.material.color}
                  wireframe={mesh.material.wireframe}
                />
              );
            case MaterialType.MeshStandartMaterial:
              return (
                <meshStandardMaterial
                  color={mesh.material.color}
                  wireframe={mesh.material.wireframe}
                />
              );
          }
        };
        return (
          <mesh key={mesh.id} position={mesh.position} rotation={mesh.rotation}>
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
