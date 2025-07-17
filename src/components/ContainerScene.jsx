import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import ProductShape from "./ProductShape";

const ContainerBox = ({ width = 5, height = 2.5, depth = 2 }) => {
  return (
    <mesh>
      <boxGeometry args={[width, height, depth]} />
      <meshBasicMaterial
        color="#4B5563"
        wireframe
        side={THREE.BackSide}
      />
    </mesh>
  );
};

const ContainerScene = ({products}) => {
    const container = { width: 5, height: 2.5, depth: 2 };
    let currentX = -container.width / 2;
    let currentZ = -container.depth / 2;
    let currentY = -container.height / 2;
    const gap = 0.02;
  return (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 4, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <OrbitControls />

        <ContainerBox width={5} height={2.5} depth={2} />
        {
            products.map((product) => {
              const w = product.width / 1000;
              const h = product.height / 1000;
              const d = product.length / 1000;

              const x = -(currentX + w / 2);

              const y = currentY + h / 2;
              const z = currentZ + d / 2;

              currentX += gap + w

              if(currentX + w + gap > container.width/2 ){
                currentX  = -container.width / 2
                currentZ += d + gap; 
              }
              if(currentZ + d + gap > container.depth / 2){
                currentZ = -container.depth / 2;
                currentY += h + gap;
              }
              if (currentY + h > container.height / 2) {
                    console.warn("🚨 Container full! Product skipped:", product.name);
                    return
                }

              return <ProductShape product={product} position={[x, y, z]} />;
            })
        }
      </Canvas>
    </div>
  );
};

export default ContainerScene;
