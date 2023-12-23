/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";


import HomeInfo from "../components/HomeInfo"
import Loader from "../components/Loader";
// import { soundoff, soundon } from "../assets/icons";
//import { Bird, Island, Bus, } from "../models";
import Bird from "../model/Bird";
import { Island } from "../model";


const Home = () => {
    // const audioRef = useRef(new Audio(sakura));
    // audioRef.current.volume = 0.4;
    // audioRef.current.loop = true;

    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    // const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    // useEffect(() => {
    //     if (isPlayingMusic) {
    //         audioRef.current.play();
    //     }

    //     return () => {
    //         audioRef.current.pause();
    //     };
    // }, [isPlayingMusic]);

    // const adjustIslandForScreenSize = () => {
    //     let screenScale, screenPosition;

    //     if (window.innerWidth < 768) {
    //         screenScale = [0.9, 0.9, 0.9];
    //         screenPosition = [0, -6.5, -43.4];
    //     } else {
    //         screenScale = [2, 2, 2];
    //         screenPosition = [20, -240, -720];
    //     }

    //     return [screenScale, screenPosition];
    // };

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
            screenPosition = [0, -6.5, -43.4];
        } else {
            screenScale = [1, 1, 1];
            screenPosition = [0, -6.5, -43.4];
        }

        return [screenScale, screenPosition];
    };


    const [islandScale, islandPosition] = adjustIslandForScreenSize();

    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"
                    }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={.3} />
                    <ambientLight intensity={0.1} />
                    <pointLight position={[10, 5, 10]} intensity={0} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={0}
                        intensity={0}
                    />
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />
                    <Bird />
                    <Island
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        rotation={[0.1, 5.7077, 0]}
                        scale={islandScale}
                    />
                </Suspense>
            </Canvas>

            {/* <div className='absolute bottom-2 left-2'>
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt='jukebox'
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className='w-10 h-10 cursor-pointer object-contain'
                />
            </div> */}
        </section>
    );
};

export default Home;