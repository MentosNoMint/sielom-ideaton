import React, { useEffect, useState, useRef, useMemo } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, OrthographicCamera } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { alienCubeConfig, modelScheme } from "@/components/canvas/constants";

gsap.registerPlugin(useGSAP);

export default function Alien(props) {
  const currentModelConfig = alienCubeConfig;
  const activeScheme = modelScheme[1];
  const { scene } = useGLTF("/models/alien.gltf");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes } = useGraph(clone);
  const meshGroupRef = useRef();
  const [allMesh, setAllMesh] = useState([]);

  const eyesMaterial = useMemo(
    () => new THREE.MeshStandardMaterial({ color: activeScheme.eyes }),
    [activeScheme.eyes],
  );

  useEffect(() => {
    if (nodes?.cube_344?.material) {
      nodes.cube_344.material.color.set(activeScheme.body);
    }
  }, [activeScheme.body, nodes]);

  useEffect(() => {
    if (meshGroupRef.current) {
      setAllMesh(meshGroupRef.current.children.slice(3));
    }
  }, [nodes]);

  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
    >
      <group
        scale={0.01}
        ref={meshGroupRef}
      >
        <directionalLight
          intensity={1}
          decay={2}
          rotation={[0, 0.48, 0]}
          target={nodes.Directional_Light.target}
        >
          <primitive
            object={nodes.Directional_Light.target}
            position={[0, 0, -1]}
          />
        </directionalLight>
        <OrthographicCamera
          makeDefault={false}
          far={100000}
          near={0}
          position={[-14.418, 177.764, 1035.875]}
          rotation={[-0.177, 0.001, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ears_1.geometry}
          material={nodes.ears_1.material}
          position={[36.25, 45.5, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ears_2.geometry}
          material={nodes.ears_2.material}
          position={[27.318, 36.546, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ears_3.geometry}
          material={nodes.ears_3.material}
          position={[-36.25, 45.5, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ears_4.geometry}
          material={nodes.ears_4.material}
          position={[-27.313, 36.546, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_344.geometry}
          material={nodes.cube_344.material}
          position={[18.252, -45.618, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_345.geometry}
          material={nodes.cube_345.material}
          position={[-0.002, -45.618, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_346.geometry}
          material={nodes.cube_346.material}
          position={[18.252, 0.027, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_347.geometry}
          material={nodes.cube_347.material}
          position={[9.123, 9.157, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_348.geometry}
          material={nodes.cube_348.material}
          position={[-0.002, 9.157, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_349.geometry}
          material={nodes.cube_349.material}
          position={[-9.127, 9.157, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_350.geometry}
          material={nodes.cube_350.material}
          position={[9.123, 0.027, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_351.geometry}
          material={nodes.cube_351.material}
          position={[-0.002, 0.027, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_352.geometry}
          material={nodes.cube_352.material}
          position={[-9.127, 0.027, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_353.geometry}
          material={nodes.cube_353.material}
          position={[-18.252, 0.027, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_354.geometry}
          material={nodes.cube_354.material}
          position={[18.252, -9.103, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_355.geometry}
          material={nodes.cube_355.material}
          position={[9.123, -9.103, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_356.geometry}
          material={nodes.cube_356.material}
          position={[-0.002, -9.103, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_357.geometry}
          material={nodes.cube_357.material}
          position={[-9.127, -9.103, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_358.geometry}
          material={nodes.cube_358.material}
          position={[-18.252, -9.103, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_359.geometry}
          material={nodes.cube_359.material}
          position={[18.252, -18.233, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_360.geometry}
          material={nodes.cube_360.material}
          position={[9.123, -18.233, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_361.geometry}
          material={nodes.cube_361.material}
          position={[-0.002, -18.233, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_362.geometry}
          material={nodes.cube_362.material}
          position={[-9.127, -18.233, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_363.geometry}
          material={nodes.cube_363.material}
          position={[-18.252, -18.233, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_364.geometry}
          material={nodes.cube_364.material}
          position={[18.252, -27.368, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_365.geometry}
          material={nodes.cube_365.material}
          position={[9.123, -27.368, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_366.geometry}
          material={nodes.cube_366.material}
          position={[-0.002, -27.368, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_367.geometry}
          material={nodes.cube_367.material}
          position={[-9.127, -27.368, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_368.geometry}
          material={nodes.cube_368.material}
          position={[-18.252, -27.368, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_369.geometry}
          material={nodes.cube_369.material}
          position={[18.252, -36.493, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_370.geometry}
          material={nodes.cube_370.material}
          position={[9.123, -36.493, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_371.geometry}
          material={nodes.cube_371.material}
          position={[-0.002, -36.493, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_372.geometry}
          material={nodes.cube_372.material}
          position={[-9.127, -36.493, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_373.geometry}
          material={nodes.cube_373.material}
          position={[-18.252, -36.493, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_374.geometry}
          material={nodes.cube_374.material}
          position={[-18.252, -45.618, -27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_294.geometry}
          material={nodes.cube_294.material}
          position={[18.252, -45.613, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_295.geometry}
          material={nodes.cube_295.material}
          position={[-0.002, -45.613, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_296.geometry}
          material={nodes.cube_296.material}
          position={[18.252, 0.032, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_297.geometry}
          material={nodes.cube_297.material}
          position={[9.123, 9.162, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_298.geometry}
          material={nodes.cube_298.material}
          position={[-0.002, 9.162, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_299.geometry}
          material={nodes.cube_299.material}
          position={[-27.37, 9.162, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_300.geometry}
          material={nodes.cube_300.material}
          position={[-18.25, 9.162, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_301.geometry}
          material={nodes.cube_301.material}
          position={[-9.127, 9.162, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_302.geometry}
          material={nodes.cube_302.material}
          position={[9.123, 0.032, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_303.geometry}
          material={nodes.cube_303.material}
          position={[-0.002, 0.032, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_304.geometry}
          material={nodes.cube_304.material}
          position={[-9.127, 0.032, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_305.geometry}
          material={nodes.cube_305.material}
          position={[-18.252, 0.032, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_306.geometry}
          material={nodes.cube_306.material}
          position={[18.252, -9.098, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_307.geometry}
          material={nodes.cube_307.material}
          position={[9.123, -9.098, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_308.geometry}
          material={nodes.cube_308.material}
          position={[-0.002, -9.098, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_309.geometry}
          material={nodes.cube_309.material}
          position={[-9.127, -9.098, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_310.geometry}
          material={nodes.cube_310.material}
          position={[-18.252, -9.098, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_311.geometry}
          material={nodes.cube_311.material}
          position={[18.252, -18.228, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_312.geometry}
          material={nodes.cube_312.material}
          position={[9.123, -18.228, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_313.geometry}
          material={nodes.cube_313.material}
          position={[-0.002, -18.228, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_314.geometry}
          material={nodes.cube_314.material}
          position={[-9.127, -18.228, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_315.geometry}
          material={nodes.cube_315.material}
          position={[-18.252, -18.228, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_316.geometry}
          material={nodes.cube_316.material}
          position={[18.252, -27.363, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_317.geometry}
          material={nodes.cube_317.material}
          position={[9.123, -27.363, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_318.geometry}
          material={nodes.cube_318.material}
          position={[-0.002, -27.363, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_319.geometry}
          material={nodes.cube_319.material}
          position={[-9.127, -27.363, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_320.geometry}
          material={nodes.cube_320.material}
          position={[-18.252, -27.363, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_321.geometry}
          material={nodes.cube_321.material}
          position={[-18.25, 18.292, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_322.geometry}
          material={nodes.cube_322.material}
          position={[-9.12, 18.292, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_323.geometry}
          material={nodes.cube_323.material}
          position={[0, 18.292, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_324.geometry}
          material={nodes.cube_324.material}
          position={[9.12, 18.292, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_325.geometry}
          material={nodes.cube_325.material}
          position={[18.25, 18.292, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_326.geometry}
          material={nodes.cube_326.material}
          position={[18.25, 9.162, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_327.geometry}
          material={nodes.cube_327.material}
          position={[27.37, 9.162, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_328.geometry}
          material={nodes.cube_328.material}
          position={[-27.37, 0.027, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_329.geometry}
          material={nodes.cube_329.material}
          position={[-27.37, -9.098, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_330.geometry}
          material={nodes.cube_330.material}
          position={[-27.37, -18.228, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_331.geometry}
          material={nodes.cube_331.material}
          position={[27.37, 0.027, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_332.geometry}
          material={nodes.cube_332.material}
          position={[27.37, -9.098, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_333.geometry}
          material={nodes.cube_333.material}
          position={[27.37, -18.228, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_334.geometry}
          material={nodes.cube_334.material}
          position={[-27.37, -27.358, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_335.geometry}
          material={nodes.cube_335.material}
          position={[-27.37, -36.488, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_336.geometry}
          material={nodes.cube_336.material}
          position={[27.37, -27.358, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_337.geometry}
          material={nodes.cube_337.material}
          position={[27.37, -36.488, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_338.geometry}
          material={nodes.cube_338.material}
          position={[18.25, -36.488, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_339.geometry}
          material={nodes.cube_339.material}
          position={[9.123, -36.488, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_340.geometry}
          material={nodes.cube_340.material}
          position={[-0.002, -36.488, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_341.geometry}
          material={nodes.cube_341.material}
          position={[-9.127, -36.488, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_342.geometry}
          material={nodes.cube_342.material}
          position={[-18.252, -36.488, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_343.geometry}
          material={nodes.cube_343.material}
          position={[-18.252, -45.613, -18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_224.geometry}
          material={nodes.cube_224.material}
          position={[18.252, -45.618, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_225.geometry}
          material={nodes.cube_225.material}
          position={[-0.002, -45.613, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_226.geometry}
          material={nodes.cube_226.material}
          position={[18.252, 0.032, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_227.geometry}
          material={nodes.cube_227.material}
          position={[9.123, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_228.geometry}
          material={nodes.cube_228.material}
          position={[-0.002, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_229.geometry}
          material={nodes.cube_229.material}
          position={[-27.37, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_230.geometry}
          material={nodes.cube_230.material}
          position={[-18.25, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_231.geometry}
          material={nodes.cube_231.material}
          position={[-9.127, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_232.geometry}
          material={nodes.cube_232.material}
          position={[9.123, 0.032, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_233.geometry}
          material={nodes.cube_233.material}
          position={[-0.002, 0.032, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_234.geometry}
          material={nodes.cube_234.material}
          position={[-9.127, 0.032, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_235.geometry}
          material={nodes.cube_235.material}
          position={[-18.252, 0.032, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_236.geometry}
          material={nodes.cube_236.material}
          position={[18.252, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_237.geometry}
          material={nodes.cube_237.material}
          position={[9.123, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_238.geometry}
          material={nodes.cube_238.material}
          position={[-0.002, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_239.geometry}
          material={nodes.cube_239.material}
          position={[-9.127, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_240.geometry}
          material={nodes.cube_240.material}
          position={[-18.252, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_241.geometry}
          material={nodes.cube_241.material}
          position={[18.252, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_242.geometry}
          material={nodes.cube_242.material}
          position={[9.123, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_243.geometry}
          material={nodes.cube_243.material}
          position={[-0.002, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_243_1.geometry}
          material={nodes.cube_243_1.material}
          position={[-9.127, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_244.geometry}
          material={nodes.cube_244.material}
          position={[-18.252, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_245.geometry}
          material={nodes.cube_245.material}
          position={[18.252, -27.363, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_246.geometry}
          material={nodes.cube_246.material}
          position={[9.123, -27.363, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_247.geometry}
          material={nodes.cube_247.material}
          position={[-0.002, -27.363, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_248.geometry}
          material={nodes.cube_248.material}
          position={[-9.127, -27.363, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_249.geometry}
          material={nodes.cube_249.material}
          position={[-18.252, -27.363, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_250.geometry}
          material={nodes.cube_250.material}
          position={[-27.37, 18.292, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_251.geometry}
          material={nodes.cube_251.material}
          position={[-18.25, 27.422, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_252.geometry}
          material={nodes.cube_252.material}
          position={[-9.12, 27.422, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_253.geometry}
          material={nodes.cube_253.material}
          position={[0, 27.422, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_254.geometry}
          material={nodes.cube_254.material}
          position={[9.12, 27.422, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_255.geometry}
          material={nodes.cube_255.material}
          position={[18.25, 27.422, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_256.geometry}
          material={nodes.cube_256.material}
          position={[-18.25, 18.292, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_257.geometry}
          material={nodes.cube_257.material}
          position={[-9.12, 18.292, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_258.geometry}
          material={nodes.cube_258.material}
          position={[0, 18.292, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_259.geometry}
          material={nodes.cube_259.material}
          position={[9.12, 18.292, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_260.geometry}
          material={nodes.cube_260.material}
          position={[27.37, 18.292, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_261.geometry}
          material={nodes.cube_261.material}
          position={[18.25, 18.292, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_262.geometry}
          material={nodes.cube_262.material}
          position={[18.25, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_263.geometry}
          material={nodes.cube_263.material}
          position={[-36.49, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_264.geometry}
          material={nodes.cube_264.material}
          position={[-36.49, 0.027, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_265.geometry}
          material={nodes.cube_265.material}
          position={[-36.49, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_266.geometry}
          material={nodes.cube_266.material}
          position={[-36.49, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_267.geometry}
          material={nodes.cube_267.material}
          position={[-36.49, -27.358, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_268.geometry}
          material={nodes.cube_268.material}
          position={[-36.49, -45.618, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_269.geometry}
          material={nodes.cube_269.material}
          position={[-36.49, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_270.geometry}
          material={nodes.cube_270.material}
          position={[36.49, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_271.geometry}
          material={nodes.cube_271.material}
          position={[36.49, 0.027, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_272.geometry}
          material={nodes.cube_272.material}
          position={[36.49, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_273.geometry}
          material={nodes.cube_273.material}
          position={[36.49, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_274.geometry}
          material={nodes.cube_274.material}
          position={[36.49, -27.358, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_275.geometry}
          material={nodes.cube_275.material}
          position={[27.37, 9.162, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_276.geometry}
          material={nodes.cube_276.material}
          position={[-27.37, 0.027, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_277.geometry}
          material={nodes.cube_277.material}
          position={[-27.37, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_278.geometry}
          material={nodes.cube_278.material}
          position={[-27.37, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_279.geometry}
          material={nodes.cube_279.material}
          position={[27.37, 0.027, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_280.geometry}
          material={nodes.cube_280.material}
          position={[27.37, -9.098, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_281.geometry}
          material={nodes.cube_281.material}
          position={[27.37, -18.228, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_282.geometry}
          material={nodes.cube_282.material}
          position={[-27.37, -27.358, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_283.geometry}
          material={nodes.cube_283.material}
          position={[-27.37, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_284.geometry}
          material={nodes.cube_284.material}
          position={[27.37, -27.358, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_285.geometry}
          material={nodes.cube_285.material}
          position={[36.49, -45.618, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_286.geometry}
          material={nodes.cube_286.material}
          position={[36.49, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_287.geometry}
          material={nodes.cube_287.material}
          position={[27.37, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_288.geometry}
          material={nodes.cube_288.material}
          position={[18.25, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_289.geometry}
          material={nodes.cube_289.material}
          position={[9.123, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_290.geometry}
          material={nodes.cube_290.material}
          position={[-0.002, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_291.geometry}
          material={nodes.cube_291.material}
          position={[-9.127, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_292.geometry}
          material={nodes.cube_292.material}
          position={[-18.252, -36.488, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_293.geometry}
          material={nodes.cube_293.material}
          position={[-18.252, -45.613, -9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_153.geometry}
          material={nodes.cube_153.material}
          position={[18.252, -45.618, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_154.geometry}
          material={nodes.cube_154.material}
          position={[-0.002, -45.613, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_155.geometry}
          material={nodes.cube_155.material}
          position={[18.252, 0.032, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_156.geometry}
          material={nodes.cube_156.material}
          position={[9.123, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_157.geometry}
          material={nodes.cube_157.material}
          position={[-0.002, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_158.geometry}
          material={nodes.cube_158.material}
          position={[-27.37, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_159.geometry}
          material={nodes.cube_159.material}
          position={[-18.25, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_160.geometry}
          material={nodes.cube_160.material}
          position={[-9.127, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_161.geometry}
          material={nodes.cube_161.material}
          position={[9.123, 0.032, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_162.geometry}
          material={nodes.cube_162.material}
          position={[-0.002, 0.032, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_163.geometry}
          material={nodes.cube_163.material}
          position={[-9.127, 0.032, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_164.geometry}
          material={nodes.cube_164.material}
          position={[-18.252, 0.032, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_165.geometry}
          material={nodes.cube_165.material}
          position={[18.252, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_166.geometry}
          material={nodes.cube_166.material}
          position={[9.123, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_167.geometry}
          material={nodes.cube_167.material}
          position={[-0.002, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_168.geometry}
          material={nodes.cube_168.material}
          position={[-9.127, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_169.geometry}
          material={nodes.cube_169.material}
          position={[-18.252, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_170.geometry}
          material={nodes.cube_170.material}
          position={[18.252, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_171.geometry}
          material={nodes.cube_171.material}
          position={[9.123, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_172.geometry}
          material={nodes.cube_172.material}
          position={[-0.002, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_173.geometry}
          material={nodes.cube_173.material}
          position={[-9.127, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_174.geometry}
          material={nodes.cube_174.material}
          position={[-18.252, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_175.geometry}
          material={nodes.cube_175.material}
          position={[18.252, -27.363, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_176.geometry}
          material={nodes.cube_176.material}
          position={[9.123, -27.363, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_177.geometry}
          material={nodes.cube_177.material}
          position={[-0.002, -27.363, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_178.geometry}
          material={nodes.cube_178.material}
          position={[-9.127, -27.363, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_179.geometry}
          material={nodes.cube_179.material}
          position={[-18.252, -27.363, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_180.geometry}
          material={nodes.cube_180.material}
          position={[-27.37, 18.292, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_181.geometry}
          material={nodes.cube_181.material}
          position={[-18.25, 27.422, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_182.geometry}
          material={nodes.cube_182.material}
          position={[-9.12, 27.422, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_183.geometry}
          material={nodes.cube_183.material}
          position={[0, 27.422, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_184.geometry}
          material={nodes.cube_184.material}
          position={[9.12, 27.422, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_185.geometry}
          material={nodes.cube_185.material}
          position={[18.25, 27.422, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_186.geometry}
          material={nodes.cube_186.material}
          position={[-18.25, 18.292, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_187.geometry}
          material={nodes.cube_187.material}
          position={[-9.12, 18.292, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_188.geometry}
          material={nodes.cube_188.material}
          position={[0, 18.292, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_189.geometry}
          material={nodes.cube_189.material}
          position={[9.12, 18.292, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_190.geometry}
          material={nodes.cube_190.material}
          position={[27.37, 18.292, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_191.geometry}
          material={nodes.cube_191.material}
          position={[18.25, 18.292, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_192.geometry}
          material={nodes.cube_192.material}
          position={[18.25, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_193.geometry}
          material={nodes.cube_193.material}
          position={[-36.49, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_194.geometry}
          material={nodes.cube_194.material}
          position={[-36.49, 0.027, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_195.geometry}
          material={nodes.cube_195.material}
          position={[-36.49, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_196.geometry}
          material={nodes.cube_196.material}
          position={[-36.49, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_197.geometry}
          material={nodes.cube_197.material}
          position={[-36.49, -27.358, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_198.geometry}
          material={nodes.cube_198.material}
          position={[-36.49, -45.618, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_199.geometry}
          material={nodes.cube_199.material}
          position={[-36.49, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_200.geometry}
          material={nodes.cube_200.material}
          position={[36.49, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_201.geometry}
          material={nodes.cube_201.material}
          position={[36.49, 0.027, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_202.geometry}
          material={nodes.cube_202.material}
          position={[36.49, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_203.geometry}
          material={nodes.cube_203.material}
          position={[36.49, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_204.geometry}
          material={nodes.cube_204.material}
          position={[36.49, -27.358, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_205.geometry}
          material={nodes.cube_205.material}
          position={[27.37, 9.162, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_206.geometry}
          material={nodes.cube_206.material}
          position={[-27.37, 0.027, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_207.geometry}
          material={nodes.cube_207.material}
          position={[-27.37, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_208.geometry}
          material={nodes.cube_208.material}
          position={[-27.37, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_209.geometry}
          material={nodes.cube_209.material}
          position={[27.37, 0.027, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_210.geometry}
          material={nodes.cube_210.material}
          position={[27.37, -9.098, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_211.geometry}
          material={nodes.cube_211.material}
          position={[27.37, -18.228, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_212.geometry}
          material={nodes.cube_212.material}
          position={[-27.37, -27.358, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_213.geometry}
          material={nodes.cube_213.material}
          position={[-27.37, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_214.geometry}
          material={nodes.cube_214.material}
          position={[27.37, -27.358, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_215.geometry}
          material={nodes.cube_215.material}
          position={[36.49, -45.618, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_216.geometry}
          material={nodes.cube_216.material}
          position={[36.49, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_217.geometry}
          material={nodes.cube_217.material}
          position={[27.37, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_218.geometry}
          material={nodes.cube_218.material}
          position={[18.25, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_219.geometry}
          material={nodes.cube_219.material}
          position={[9.123, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_220.geometry}
          material={nodes.cube_220.material}
          position={[-0.002, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_221.geometry}
          material={nodes.cube_221.material}
          position={[-9.127, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_222.geometry}
          material={nodes.cube_222.material}
          position={[-18.252, -36.488, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_223.geometry}
          material={nodes.cube_223.material}
          position={[-18.252, -45.613, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_82.geometry}
          material={nodes.cube_82.material}
          position={[18.252, -45.618, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_83.geometry}
          material={nodes.cube_83.material}
          position={[-0.002, -45.613, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_84.geometry}
          material={nodes.cube_84.material}
          position={[18.252, 0.032, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_85.geometry}
          material={nodes.cube_85.material}
          position={[9.123, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_86.geometry}
          material={nodes.cube_86.material}
          position={[-0.002, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_87.geometry}
          material={nodes.cube_87.material}
          position={[-27.37, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_88.geometry}
          material={nodes.cube_88.material}
          position={[-18.25, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_89.geometry}
          material={nodes.cube_89.material}
          position={[-9.127, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_90.geometry}
          material={nodes.cube_90.material}
          position={[9.123, 0.032, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_91.geometry}
          material={nodes.cube_91.material}
          position={[-0.002, 0.032, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_92.geometry}
          material={nodes.cube_92.material}
          position={[-9.127, 0.032, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_93.geometry}
          material={nodes.cube_93.material}
          position={[-18.252, 0.032, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_94.geometry}
          material={nodes.cube_94.material}
          position={[18.252, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_95.geometry}
          material={nodes.cube_95.material}
          position={[9.123, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_96.geometry}
          material={nodes.cube_96.material}
          position={[-0.002, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_97.geometry}
          material={nodes.cube_97.material}
          position={[-9.127, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_98.geometry}
          material={nodes.cube_98.material}
          position={[-18.252, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_99.geometry}
          material={nodes.cube_99.material}
          position={[18.252, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_100.geometry}
          material={nodes.cube_100.material}
          position={[9.123, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_101.geometry}
          material={nodes.cube_101.material}
          position={[-0.002, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_102.geometry}
          material={nodes.cube_102.material}
          position={[-9.127, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_103.geometry}
          material={nodes.cube_103.material}
          position={[-18.252, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_104.geometry}
          material={nodes.cube_104.material}
          position={[18.252, -27.363, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_105.geometry}
          material={nodes.cube_105.material}
          position={[9.123, -27.363, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_106.geometry}
          material={nodes.cube_106.material}
          position={[-0.002, -27.363, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_107.geometry}
          material={nodes.cube_107.material}
          position={[-9.127, -27.363, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_108.geometry}
          material={nodes.cube_108.material}
          position={[-18.252, -27.363, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_115.geometry}
          material={nodes.cube_115.material}
          position={[-18.25, 18.292, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_116.geometry}
          material={nodes.cube_116.material}
          position={[-9.12, 18.292, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_117.geometry}
          material={nodes.cube_117.material}
          position={[0, 18.292, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_118.geometry}
          material={nodes.cube_118.material}
          position={[9.12, 18.292, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_120.geometry}
          material={nodes.cube_120.material}
          position={[18.25, 18.292, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_121.geometry}
          material={nodes.cube_121.material}
          position={[18.25, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_134.geometry}
          material={nodes.cube_134.material}
          position={[27.37, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_135.geometry}
          material={nodes.cube_135.material}
          position={[-27.37, 0.027, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_136.geometry}
          material={nodes.cube_136.material}
          position={[-27.37, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_137.geometry}
          material={nodes.cube_137.material}
          position={[-27.37, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_138.geometry}
          material={nodes.cube_138.material}
          position={[27.37, 0.027, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_139.geometry}
          material={nodes.cube_139.material}
          position={[27.37, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_140.geometry}
          material={nodes.cube_140.material}
          position={[27.37, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_141.geometry}
          material={nodes.cube_141.material}
          position={[-27.37, -27.358, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_142.geometry}
          material={nodes.cube_142.material}
          position={[-27.37, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_143.geometry}
          material={nodes.cube_143.material}
          position={[27.37, -27.358, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_146.geometry}
          material={nodes.cube_146.material}
          position={[27.37, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_147.geometry}
          material={nodes.cube_147.material}
          position={[18.25, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_148.geometry}
          material={nodes.cube_148.material}
          position={[9.123, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_149.geometry}
          material={nodes.cube_149.material}
          position={[-0.002, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_150.geometry}
          material={nodes.cube_150.material}
          position={[-9.127, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_151.geometry}
          material={nodes.cube_151.material}
          position={[-18.252, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_152.geometry}
          material={nodes.cube_152.material}
          position={[-18.252, -45.613, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_109.geometry}
          material={nodes.cube_109.material}
          position={[-27.37, 18.292, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_110.geometry}
          material={nodes.cube_110.material}
          position={[-18.25, 27.422, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_111.geometry}
          material={nodes.cube_111.material}
          position={[-9.12, 27.422, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_112.geometry}
          material={nodes.cube_112.material}
          position={[0, 27.422, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_113.geometry}
          material={nodes.cube_113.material}
          position={[9.12, 27.422, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_114.geometry}
          material={nodes.cube_114.material}
          position={[18.25, 27.422, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_119.geometry}
          material={nodes.cube_119.material}
          position={[27.37, 18.292, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_122.geometry}
          material={nodes.cube_122.material}
          position={[-36.49, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_123.geometry}
          material={nodes.cube_123.material}
          position={[-36.49, 0.027, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_124.geometry}
          material={nodes.cube_124.material}
          position={[-36.49, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_125.geometry}
          material={nodes.cube_125.material}
          position={[-36.49, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_126.geometry}
          material={nodes.cube_126.material}
          position={[-36.49, -27.358, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_127.geometry}
          material={nodes.cube_127.material}
          position={[-36.49, -45.618, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_128.geometry}
          material={nodes.cube_128.material}
          position={[-36.49, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_129.geometry}
          material={nodes.cube_129.material}
          position={[36.49, 9.162, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_130.geometry}
          material={nodes.cube_130.material}
          position={[36.49, 0.027, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_131.geometry}
          material={nodes.cube_131.material}
          position={[36.49, -9.098, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_132.geometry}
          material={nodes.cube_132.material}
          position={[36.49, -18.228, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_133.geometry}
          material={nodes.cube_133.material}
          position={[36.49, -27.358, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_144.geometry}
          material={nodes.cube_144.material}
          position={[36.49, -45.618, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_145.geometry}
          material={nodes.cube_145.material}
          position={[36.49, -36.488, 9.13]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_32.geometry}
          material={nodes.cube_32.material}
          position={[18.252, -45.613, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_33.geometry}
          material={nodes.cube_33.material}
          position={[-0.002, -45.613, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_34.geometry}
          material={nodes.cube_34.material}
          position={[18.252, 0.032, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_35.geometry}
          material={nodes.cube_35.material}
          position={[9.123, 9.162, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_36.geometry}
          material={nodes.cube_36.material}
          position={[-0.002, 9.162, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_39.geometry}
          material={nodes.cube_39.material}
          position={[-9.127, 9.162, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_40.geometry}
          material={nodes.cube_40.material}
          position={[9.123, 0.032, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_41.geometry}
          material={nodes.cube_41.material}
          position={[-0.002, 0.032, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_42.geometry}
          material={nodes.cube_42.material}
          position={[-9.127, 0.032, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_43.geometry}
          material={nodes.cube_43.material}
          position={[-18.252, 0.032, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_44.geometry}
          material={nodes.cube_44.material}
          position={[18.252, -9.098, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_45.geometry}
          material={nodes.cube_45.material}
          position={[9.123, -9.098, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_46.geometry}
          material={nodes.cube_46.material}
          position={[-0.002, -9.098, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_47.geometry}
          material={nodes.cube_47.material}
          position={[-9.127, -9.098, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_48.geometry}
          material={nodes.cube_48.material}
          position={[-18.252, -9.098, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_49.geometry}
          material={nodes.cube_49.material}
          position={[18.252, -18.228, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_50.geometry}
          material={nodes.cube_50.material}
          position={[9.123, -18.228, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_51.geometry}
          material={nodes.cube_51.material}
          position={[-0.002, -18.228, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_52.geometry}
          material={nodes.cube_52.material}
          position={[-9.127, -18.228, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_53.geometry}
          material={nodes.cube_53.material}
          position={[-18.252, -18.228, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_54.geometry}
          material={nodes.cube_54.material}
          position={[18.252, -27.363, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_55.geometry}
          material={nodes.cube_55.material}
          position={[9.123, -27.363, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_56.geometry}
          material={nodes.cube_56.material}
          position={[-0.002, -27.363, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_57.geometry}
          material={nodes.cube_57.material}
          position={[-9.127, -27.363, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_58.geometry}
          material={nodes.cube_58.material}
          position={[-18.252, -27.363, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_76.geometry}
          material={nodes.cube_76.material}
          position={[18.25, -36.488, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_77.geometry}
          material={nodes.cube_77.material}
          position={[9.123, -36.488, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_78.geometry}
          material={nodes.cube_78.material}
          position={[-0.002, -36.488, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_79.geometry}
          material={nodes.cube_79.material}
          position={[-9.127, -36.488, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_80.geometry}
          material={nodes.cube_80.material}
          position={[-18.252, -36.488, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_81.geometry}
          material={nodes.cube_81.material}
          position={[-18.252, -45.613, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_37.geometry}
          material={nodes.cube_37.material}
          position={[-27.37, 9.162, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_38.geometry}
          material={nodes.cube_38.material}
          position={[-18.25, 9.162, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_59.geometry}
          material={nodes.cube_59.material}
          position={[-18.25, 18.292, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_60.geometry}
          material={nodes.cube_60.material}
          position={[-9.12, 18.292, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_61.geometry}
          material={nodes.cube_61.material}
          position={[0, 18.292, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_62.geometry}
          material={nodes.cube_62.material}
          position={[9.12, 18.292, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_63.geometry}
          material={nodes.cube_63.material}
          position={[18.25, 18.292, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_64.geometry}
          material={nodes.cube_64.material}
          position={[18.25, 9.162, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_65.geometry}
          material={nodes.cube_65.material}
          position={[27.37, 9.162, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_7.geometry}
          material={eyesMaterial}
          position={[-27.37, 0.027, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_8.geometry}
          material={eyesMaterial}
          position={[-27.37, -9.098, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_9.geometry}
          material={eyesMaterial}
          position={[-27.37, -18.228, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_10.geometry}
          material={eyesMaterial}
          position={[27.37, 0.027, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_11.geometry}
          material={eyesMaterial}
          position={[27.37, -9.098, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_12.geometry}
          material={eyesMaterial}
          position={[27.37, -18.228, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_72.geometry}
          material={nodes.cube_72.material}
          position={[-27.37, -27.358, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_73.geometry}
          material={nodes.cube_73.material}
          position={[-27.37, -36.488, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_74.geometry}
          material={nodes.cube_74.material}
          position={[27.37, -27.358, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_75.geometry}
          material={nodes.cube_75.material}
          position={[27.37, -36.488, 18.26]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_1.geometry}
          material={nodes.cube_1.material}
          position={[18.252, -45.618, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_2.geometry}
          material={nodes.cube_2.material}
          position={[-0.002, -45.618, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_3.geometry}
          material={nodes.cube_3.material}
          position={[18.252, 0.027, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_7.geometry}
          material={nodes.cube_7.material}
          position={[9.123, 0.027, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_8.geometry}
          material={nodes.cube_8.material}
          position={[-0.002, 0.027, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_9.geometry}
          material={nodes.cube_9.material}
          position={[-9.127, 0.027, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_10.geometry}
          material={nodes.cube_10.material}
          position={[-18.252, 0.027, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_4.geometry}
          material={nodes.cube_4.material}
          position={[9.123, 9.157, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_5.geometry}
          material={nodes.cube_5.material}
          position={[-0.002, 9.157, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_6.geometry}
          material={nodes.cube_6.material}
          position={[-9.127, 9.157, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_6.geometry}
          material={eyesMaterial}
          position={[18.252, -9.103, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_12.geometry}
          material={nodes.cube_12.material}
          position={[9.123, -9.103, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_13.geometry}
          material={nodes.cube_13.material}
          position={[-0.002, -9.103, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_14.geometry}
          material={nodes.cube_14.material}
          position={[-9.127, -9.103, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_1.geometry}
          material={eyesMaterial}
          position={[-18.252, -9.103, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_5.geometry}
          material={eyesMaterial}
          position={[18.252, -18.233, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_4.geometry}
          material={eyesMaterial}
          position={[9.123, -18.233, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_18.geometry}
          material={nodes.cube_18.material}
          position={[-0.002, -18.233, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_3.geometry}
          material={eyesMaterial}
          position={[-9.127, -18.233, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.eye_2.geometry}
          material={eyesMaterial}
          position={[-18.252, -18.233, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_21.geometry}
          material={nodes.cube_21.material}
          position={[18.252, -27.368, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_22.geometry}
          material={nodes.cube_22.material}
          position={[9.123, -27.368, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_23.geometry}
          material={nodes.cube_23.material}
          position={[-0.002, -27.368, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_24.geometry}
          material={nodes.cube_24.material}
          position={[-9.127, -27.368, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_25.geometry}
          material={nodes.cube_25.material}
          position={[-18.252, -27.368, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_26.geometry}
          material={nodes.cube_26.material}
          position={[18.252, -36.493, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_27.geometry}
          material={nodes.cube_27.material}
          position={[9.123, -36.493, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_28.geometry}
          material={nodes.cube_28.material}
          position={[-0.002, -36.493, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_29.geometry}
          material={nodes.cube_29.material}
          position={[-9.127, -36.493, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_30.geometry}
          material={nodes.cube_30.material}
          position={[-18.252, -36.493, 27.39]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cube_31.geometry}
          material={nodes.cube_31.material}
          position={[-18.252, -45.618, 27.39]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/alien.gltf");
