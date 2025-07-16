import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const mountRef = useRef({});

  useEffect(() => {
    fetch("./skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data))
      .catch((err) => console.log("err", err.meesage));
  }, []);

  useEffect(() => {
    skills.forEach((skill, i) => {
      const mount = mountRef.current[i];
      if (!mount) return;

      const width = mount.clientWidth;
      const height = mount.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

      const renderer = new THREE.WebGLRenderer({alpha: true});
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(width, height);

      mount.innerHTML = "";

      mount.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(skill.image, (texture) => {
  
        
        const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true});
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        function animate() {
          cube.rotation.x += 0.01;
          cube.rotation.y += 0.01;

          controls.update();
          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }
        animate();
      })
    })
  }, [skills]);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto px-8">
        <h1 className="text-6xl font-bold mb-10">Skills in 3D</h1>
        <div className=" flex  justify-center items-center">
          {skills.map((skill, i) => (
            <div key={i} className="w-full  h-72 relative flex flex-col items-center justify-center">
              <div
                ref={(el) => (mountRef.current[i] = el)}
                className="w-full h-full"
              />
              <p className=" relative text-white font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection