import { PerspectiveCamera, View, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Alien from "@/components/canvas/model/Alien";

const AlienModelView = ({ modelRef, modelWrapperRef }) => {
  return (
    <View className="w-full h-full absolute">
      <PerspectiveCamera
        makeDefault
        position={[0, -0.2, 4.1]}
      />
      <directionalLight
        position={[2, 10, 5]}
        intensity={25}
        color="white"
        castShadow
      />
      <directionalLight
        position={[-2, 10, -5]}
        intensity={25}
        color="white"
        castShadow
      />
      <directionalLight
        position={[0, -2, 15]}
        intensity={0}
        color="white"
        castShadow
      />

        <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={3.5}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2}
      />

      <group
        ref={modelRef}
        position={[0, 0, 0]}
      >
        <Suspense fallback={null}>
          <Alien
            scale={[2.7, 2.7, 2.7]}
            rotation={[0.05, 0, 0]}
            modelRef={modelRef}
            modelWrapperRef={modelWrapperRef}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default AlienModelView;
