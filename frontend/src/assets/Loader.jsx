import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <p style={{ color: "white" }}> {progress.toFixed(2)}% </p>
    </Html>
  );
};

export default Loader;