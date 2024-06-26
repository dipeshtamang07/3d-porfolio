import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from '../assets/icons'
import Island2 from '../models/Island2'

const Home = () => {

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.3, -47];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  // const adjustIslandForScreenSize = () => {
  //   let screenScale = null;
  //   let screenPosition = [0, -5, -47];
  //   let rotation = [0.1, 4.7, 0];

  //   if (window.innerWidth < 768) {
  //     screenScale = [0.03, 0.03, 0.03];
  //   } else {
  //     screenScale = [0.04, 0.04, 0.04];
  //   }

  //   return [screenScale, screenPosition, rotation];
  // };

  const adjustPlaneScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={
          `w-full h-screen bg-transparent
          ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}
          `
        }
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2}/>
          <ambientLight intensity={0.5} />
          {/* <pointLight /> */}
          {/* <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={2}
          />
          <Sky
            isRotating={isRotating}
          />
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          {/* <Island2
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}
          <Plane
            isRotating={isRotating}
            position={planePosition}
            scale={planeScale}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className='absolute bottom-4 right-4'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home