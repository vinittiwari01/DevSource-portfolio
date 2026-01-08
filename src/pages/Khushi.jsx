import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

import "./khushi.css";

export default function Khushi() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const cx = useSpring(mx, { stiffness: 250, damping: 20 });
  const cy = useSpring(my, { stiffness: 250, damping: 20 });

  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX-150);
      my.set(e.clientY-150);
    };

    const click = (e) => {
      setRipple({ x: e.clientX, y: e.clientY, show: true });
      setTimeout(() => {
        setRipple((r) => ({ ...r, show: false }));
      }, 600);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("click", click);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("click", click);
    };
  }, [mx, my]);


  return (
    <>
      <section className="hero">
        <motion.div className="cursor-glow" style={{ x: cx, y: cy }} />
        <motion.div className="trail" style={{ x: cx, y: cy }} />

        {ripple.show && (
          <motion.div
            className="click-ripple"
            style={{ left: ripple.x - 40, top: ripple.y - 40 }}
            initial={{ scale: 0.5, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}

        <div className="fire-glow" />

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="spark spark-1" />
        <div className="spark spark-2" />
        <div className="spark spark-3" />

        <div className="profile-wrap">
          <img src="/khushi.JPG" alt="Khushi Bhaskar" />
        </div>

        <motion.h1
          className="name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Khushi Bhaskar
        </motion.h1>

        <p className="tagline">
           Lead - <span>DevSource 🔥</span>
        </p>
      </section>
      <motion.section
  className="intro"
  initial={{ opacity: 0.4 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <motion.h2
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    About Me
  </motion.h2>

  <motion.p
    initial={{ y: 60, opacity: 0.3 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    I'm <strong>Khushi Bhaskar</strong>, the lead of <strong>DevSource</strong>,
    where I focus on building developer ecosystems that prioritize hands-on
    learning, open-source culture, and collaborative growth.
    <br /><br />
    DevSource has been my biggest learning space. I didn't just learn web
    development from tutorials, but by building real projects, collaborating
    with people, and solving practical problems.
    <br /><br />
    From open-source contributions to leading teams, these experiences shaped
    how I think, build, and grow as both a developer and a leader. Today, I
    enjoy working at the intersection of technology, leadership, and community,
    turning ideas into real-world products while helping others grow along
    the way.
  </motion.p>
  </motion.section>

   <section className="skills-split">
  <div className="skills-content">
    <h2>Skills I have worked on</h2>
    <div className="skills-wrap">
      {[
        "Python",
        "JavaScript",
        "HTML & CSS",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "Docker",
        "Figma",
      ].map((skill) => (
        <div key={skill} className="skill-pill">{skill}</div>
      ))}
    </div>
  </div>

  <div className="skills-image">
    <img src="/cat.webp" alt="Astronaut" />
  </div>
</section>


<section className="contact-section">
  <div className="contact-container">
    <h2 className="contact-title">Contact Me</h2>

    <div className="contact-cards">
      {[
        {
          title: "GitHub",
          desc: "Projects & Open Source",
          icon: <FaGithub />,
          link: "https://github.com/Khushi-bhaskar01",
        },
        {
          title: "LinkedIn",
          desc: "Professional Profile",
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/in/khushi-bhaskar-b00586324/",
        },
        {
          title: "Mail",
          desc: "Let's Talk",
          icon: <FaEnvelope />,
          link: "mailto:khushibhaskar.2006@gmail.com",
        },
      ].map((card, index) => (
        <motion.a
          key={card.title}
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.25 }}
          viewport={{ once: true }}
        >
          <div className="contact-icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </motion.a>
      ))}
    </div>
  </div>
</section>

    </>
  );
}