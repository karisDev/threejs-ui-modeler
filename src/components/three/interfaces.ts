import { Euler, Vector3 } from "@react-three/fiber";

export enum GeometryType {
  Box,
}

export enum MaterialType {
  MeshStandardMaterial,
  MeshBasicMaterial,
  MeshNormalMaterial,
}

export interface Material {
  type?: MaterialType;
  color?: string;
  roughness?: number;
  metalness?: number;
  wireframe?: boolean;
}

export interface GeometryObject {
  type: GeometryType;
  material: Material;
  position?: Vector3;
  rotation?: Euler;
  scale?: Vector3;
}

export interface SceneObject {
  backgroundColor?: string;
  cameraDamping?: boolean;
}

export interface ThreeJSBodyProps {
  scene: SceneObject;
  geometries: GeometryObject[];
}
