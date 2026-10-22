import { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, Center, Environment, useGLTF } from "@react-three/drei";
import { cn } from "@/lib/cn.ts";

const MODEL_URL = "/models/rabbit/rabbit.glb";

const RabbitModel = () => {
  const { scene } = useGLTF(MODEL_URL);
  const ref = useRef<THREE.Group>(null);

  // медленно крутится сам, без реакции на мышь — показываем на экране
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.6;
  });

  return (
    <group ref={ref}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
};

const Rabbit = ({ className }: { className?: string }) => (
  <div className={cn("pointer-events-none", className)}>
    <Canvas
      camera={{ position: [0, 0, 3], fov: 40 }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.6} color="#fff5e6" />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={20} />
      <pointLight position={[-10, -10, -10]} intensity={10} color="#b3e0ff" />
      <Suspense fallback={null}>
        <Environment preset="lobby" />
        {/* вписываем модель в кадр целиком, с запасом на поворот */}
        <Bounds fit clip margin={1.25}>
          <RabbitModel />
        </Bounds>
      </Suspense>
    </Canvas>
  </div>
);

useGLTF.preload(MODEL_URL);

export default Rabbit;
