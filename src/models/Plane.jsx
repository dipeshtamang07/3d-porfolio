import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props}) => {
  const { scene, animations } = useGLTF(planeScene);

  const planeRef = useRef();
  const { actions } = useAnimations(animations, planeRef);

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh ref={planeRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
