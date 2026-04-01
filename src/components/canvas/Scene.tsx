"use client";

import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas
      shadows
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <View.Port />
    </Canvas>
  );
};
