/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";


import HomeInfo from "../components/HomeInfo"
import Loader from "../components/Loader";
// import { soundoff, soundon } from "../assets/icons";
//import { Bird, Island, Bus, } from "../models";
import Bird from "../model/Bird";
import { Island, Dragon } from "../model";


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

    const adjustBiDragonForScreenSize = () => {
        let DragonScale, DragonPosition;

        if (window.innerWidth < 768) {
            DragonScale = [0.5, 0.5, 0.5]; // Smaller scale for the bus on smaller screens
            DragonPosition = [13, -4, -4]; // Set fixed position on the island (adjust x, y, z values)
        } else {
            DragonScale = [20, 20, 20]; // Regular scale for the bus on larger screens
            DragonPosition = [13, -3, -22]; // Same fixed position on the island
        }

        return [DragonScale, DragonPosition];
    };



    const [biDragonScale, biDragonPosition] = adjustBiDragonForScreenSize();
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
                    <directionalLight position={[1, 1, 1]} intensity={1} />
                    <ambientLight intensity={0.1} />
                    <pointLight position={[10, 5, 10]} intensity={0} />
                    <spotLight
                        position={[0, 50, 10]}
                        angle={0.15}
                        penumbra={0}
                        intensity={0}
                    />
                    <Bird />
                    <Island
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        rotation={[0.1, 4.7077, 0]}
                        scale={islandScale}
                    />
                    <Dragon
                        isRotating={isRotating}
                        position={biDragonPosition}
                        rotation={[0, 20.1, 0]}
                        scale={biDragonScale}
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