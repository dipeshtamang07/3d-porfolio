
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { a } from '@react-spring/three';

import island2Scene from '../assets/3d/island2.glb';
import { useFrame, useThree } from '@react-three/fiber';

const Island2 = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
  const { nodes, materials } = useGLTF(island2Scene);

  const island2Ref = useRef();

  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].x : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].x : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      island2Ref.current.rotation.y += delta * 0.01 * Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      island2Ref.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      island2Ref.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      island2Ref.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = island2Ref.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });


  return (
    <a.group ref={island2Ref} {...props} dispose={null}>
      <group position={[-217.84, 69.884, 370.645]} rotation={[-1.52, -0.065, 0.019]} scale={18.518}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_Material013_0.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree_Material015_0.geometry}
          material={materials['Material.015']}
        />
      </group>
      <group position={[18.326, 200.902, -31.902]} rotation={[-Math.PI / 2, 0, 0.981]} scale={5.79}>
        <group position={[0.698, -0.479, -6.719]}>
          <group position={[0.001, -4.891, -7.029]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chest_Bottom_Wood_Metal_Iron_0.geometry}
              material={materials.Metal_Iron}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chest_Bottom_Wood_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Chest_Bottom_Wood_Gem_Green_0.geometry}
              material={materials.Gem_Green}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube013_rock_base_0.geometry}
        material={materials.rock_base}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere000_Material014_0.geometry}
        material={materials['Material.014']}
        position={[-297.998, 187.313, -11.502]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={41.452}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.kiogame3_Material_0.geometry}
        material={materials.Material}
        position={[25.663, 69.823, -31.365]}
        rotation={[0, -0.392, 0]}
        scale={113.592}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_Material018_0.geometry}
        material={materials['Material.018']}
        position={[-424.496, 191.695, 215.471]}
        rotation={[-Math.PI / 2, 0, -1.349]}
        scale={[47.111, 47.111, 70.976]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube001_rock_base_0.geometry}
        material={materials.rock_base}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube002_Material003_0.geometry}
        material={materials['Material.003']}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube003_Material004_0.geometry}
        material={materials['Material.004']}
        scale={36.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.earth_Cube004_rock_base_0.geometry}
        material={materials.rock_base}
        scale={36.358}
      />
    </a.group>
  )
}

export default Island2;
