export type Vector3 = {
  x: number;
  y: number;
  z: number;
};

export type ModelSchemeItem = {
  id: number;
  name: string;
  body: string;
  eyes: string;
  ears: {
    color: string;
    position: {
      ears_3: Vector3;
      ears_1: Vector3;
    };
  };
};

export type CubeGroup = {
  id: string;
  position: Vector3;
  rotation: Vector3;
};

export type modelConfig = {
  name: string;
  groups?: CubeGroup[];
  positionCube: Vector3[];
};