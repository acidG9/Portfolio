import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import Model from "./Model"

import Loader from "./Loader";

const Panel = ({ texture }) => {

    return (
        <mesh>
            <hemisphereLight intensity={0.75} groundColor="black" />
            <ambientLight intensity={0.75} color={"#ffffff"} />
            <pointLight intensity={1.5} />
            <spotLight position={[15, 35, 0]} angle={0.12} penumbra={1} intensity={3800} castShadow shadow-mapSize={1024} />
            <Model texture={texture}/>
        </mesh>
    );
};

const Canbas = ({ texture }) => {
    return (
        <Canvas frameloop='always' shadows camera={{ position:[20, 3, 5], fov:25 }} gl={ {preserveDrawingBuffer: true}  } dpr={[1, 2]}>
            <Suspense fallback={<Loader />}>
               <OrbitControls  enableZoom={false} enablePan={false}  maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
               <Panel texture={texture}/>
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default Canbas;