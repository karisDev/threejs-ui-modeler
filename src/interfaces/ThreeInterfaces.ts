import { Vector3 } from "three";

export enum ObjectType {
  Cube,
  Sphere,
  Cone,
  Cylinder,
  Torus,
}

export enum MaterialType {
  Normal,
}

export interface Object3D {
  type: ObjectType;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
}
