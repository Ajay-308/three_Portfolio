/* eslint-disable react/no-unknown-property */
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

import DragonScene from "../assets/3d models/baby_dragon.glb";

export function Dragon({ ...props }) {
    const { scene, animations } = useGLTF(DragonScene);
    const DragonRef = useRef();
    const { actions } = useAnimations(animations, DragonRef);

    useEffect(() => {
        if (actions && actions["Walk 01"]) {
            actions["Walk 01"].play();
        }
    }, [actions]);

    useFrame(({ clock }) => {
        // Ensure actions are loaded before accessing them
        if (actions && actions["Take 01"]) {
            const time = clock.getElapsedTime() / 2;
            // Define the flight path here, for example a circular path
            const x = Math.sin(time) * 3;
            const y = Math.cos(time) * 1;
            const z = Math.sin(time) * Math.cos(time);

            // Update position
            DragonRef.current.position.set(x, y, z);

            // Update rotation to face the direction of movement
            // Assuming the dragon faces along the positive Y-axis by default
            DragonRef.current.rotation.y = Math.atan2(x, y);

            // Add some scale changes for more natural movement
            DragonRef.current.scale.set(
                1 + Math.sin(time) * 0.1,
                1 + Math.cos(time) * 0.1,
                1
            );
        }
    });

    return (
        <mesh ref={DragonRef} {...props}>
            <primitive object={scene} />
        </mesh>
    );
}
