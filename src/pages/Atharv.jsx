import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import './atharv.css';

function TaurusUniverse() {
  const starRef = useRef();
  const lineRef = useRef();
  
  
  const stars = useMemo(() => {
    const pos = new Float32Array(4000 * 3);
    for (let i = 0; i < 4000 * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
    return pos;
  }, []);

  const taurusPoints = useMemo(() => [
    new THREE.Vector3(-1.5, 2, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(1.5, 2, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, -2, 0),
  ], []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    starRef.current.rotation.y = t * 0.05; // Slightly faster rotation
    starRef.current.rotation.x = t * 0.02;
    lineRef.current.position.y = Math.sin(t) * 0.1;
    lineRef.current.rotation.z = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group>
      <points ref={starRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={stars.length / 3} array={stars} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="white" transparent opacity={0.8} sizeAttenuation={true} />
      </points>
      <line ref={lineRef}>
        <bufferGeometry attach="geometry" setFromPoints={taurusPoints} />
        <lineBasicMaterial attach="material" color="white" transparent opacity={0.4} />
      </line>
    </group>
  );
}

const Atharv = () => {
  const projects = [
    { 
      name: "MERN E-Commerce Platform", 
      tech: "MongoDB • Express • React • Node", 
      about: "A full-stack retail platform featuring JWT authentication, a persistent cloud-synced shopping cart, and a dedicated admin dashboard for inventory management.", 
      icon: "🛒" 
    },
    { 
      name: "Weather App", 
      tech: "JS • Fetch API • Netlify Functions", 
      about: "A secure weather gateway that uses serverless functions to protect API keys while delivering real-time meteorological data to the frontend.", 
      icon: "☁️" 
    },
    { 
      name: "To-Do List App",
      tech: "HTML5 • CSS3 • JS • LocalStorage", 
      about: "An advanced task manager focused on DOM manipulation and state persistence. Engineered for zero-latency updates using browser local storage.", 
      icon: "📝" 
    }
  ];

  const techStack = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "HTML5", "CSS3", "Git", "Three.js"];

  return (
    <div className="portfolio-root">
      {/* Background Canvas */}
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach="background" args={['#000000']} />
          <TaurusUniverse />
        </Canvas>
      </div>

      <section className="section hero-area">
        <h1 className="hero-name">ATHARV <span className="name-outline">HANDA</span></h1>
        <div className="hex-wrapper">
           <div className="profile-hex-frame">
              <img src="/portfolio.png" alt="Atharv" className="profile-img" />
           </div>
        </div>
        
        <div className="about-me-text">
  <h2 className="about-title">About Me</h2>
  <br />
  <p>
    Building the "invisible" logic that ensures the web remains secure, persistent, and scalable. 
    I focus on the deep-level coding that keeps systems running—from securing API keys through 
    serverless gateways to engineering zero-latency data updates in the MERN stack. I’m less 
    interested in just making things look good and more obsessed with the code that keeps them stable.
  </p>
  <p>
    Beyond my solo builds, I contribute to open-source and collaborate within DevSource to turn 
    complex ideas into resilient products. I don’t just ship features; I build systems 
    meant to last.
  </p>
</div>
      </section>

      <div className="tech-marquee">
        <div className="marquee-content">
          {techStack.concat(techStack).map((tech, i) => (
            <span key={i} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <section className="section projects-grid">
        <h2 className="section-title">PROJECTS</h2>
        <div className="cards-container">
          {projects.map((p, i) => (
            <div className="project-card-wrapper" key={i}>
              <div className="project-card">
                <div className="card-side front">
                  <span className="card-icon">{p.icon}</span>
                  <h3>{p.name}</h3>
                  <p className="tech-used">{p.tech}</p>
                  <span className="flip-hint">↻ FLIP TO READ</span>
                </div>
                <div className="card-side back">
                  <h3>ABOUT</h3>
                  <p className="detailed-desc">{p.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-socials">
        <a href="https://github.com/younginnovator777-design" target="_blank" rel="noreferrer">GITHUB</a>
        <a href="https://in.linkedin.com/in/atharv-handa-068160384" target="_blank" rel="noreferrer">LINKEDIN</a>
      </footer>
    </div>
  );
};

export default Atharv;