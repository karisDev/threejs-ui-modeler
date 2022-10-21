import { Euler, Vector3 } from "@react-three/fiber";

export enum GeometryType {
  Box = "Box",
}

export enum MaterialType {
  MeshStandardMaterial,
  MeshBasicMaterial,
  MeshNormalMaterial,
}

export interface Material {
  type: MaterialType;
  color: string;
  roughness: number;
  metalness: number;
  wireframe: boolean;
}

export interface GeometryObject {
  type: GeometryType;
  material: Material;
  position: Vector3;
  rotation: Euler;
  scale: Vector3;
}
