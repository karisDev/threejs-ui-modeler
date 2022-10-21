export enum MaterialType {
  Normal,
}

interface Vector3 {
  x: number;
  y: number;
  z: number;
}

interface Object3D {
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
  materialType: MaterialType;
}

// each interface will have properties needed for the object type

export interface ThreeCube extends Object3D {}

export interface ThreeTorus extends Object3D {}
