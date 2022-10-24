import { Euler, Vector3 } from "@react-three/fiber";

export enum GeometryType {
  Box,
  Sphere,
}

export enum MaterialType {
  MeshNormalMaterial,
  MeshBasicMaterial,
  MeshStandartMaterial,
}

export interface Material {
  type: MaterialType;
  color?: string;
  roughness?: number;
  metalness?: number;
  wireframe?: boolean;
}

export interface MeshObject {
  id: number;
  geometryType: GeometryType;
  material: Material;
  position?: Vector3;
  rotation?: Euler;
  scale?: Vector3;
}

export interface SceneObject {
  backgroundColor?: string;
  cameraDamping?: boolean;
}
