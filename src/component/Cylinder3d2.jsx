import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Cylinder3d2(props) {
  const ref = useRef();
  const [hovered, hover] = useState(false);

  const handleClick = () => {
    window.location.href = "https://www.youtube.com";
  };

  useFrame(() => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={handleClick}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <cylinderGeometry args={[1, 1, 3]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "white" : "#E94560"}
      />
    </mesh>
  );
}

export default Cylinder3d2;
