"use client";

import { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai"; // Email
import { FaLinkedin, FaGithub } from "react-icons/fa"; // LinkedIn & GitHub

const techStack = [
  { name: "C", logo: "https://cdn.simpleicons.org/c/38bdf8" },
  { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus/38bdf8" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/38bdf8" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/38bdf8" },
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5/38bdf8" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/38bdf8" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/38bdf8" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/38bdf8" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express/38bdf8" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/38bdf8" },
  { name: "SQL", logo: "https://cdn.simpleicons.org/mysql/38bdf8" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/38bdf8" },
  { name: "Postman", logo: "https://cdn.simpleicons.org/postman/38bdf8" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/38bdf8" },
  { name: "Linux", logo: "https://cdn.simpleicons.org/linux/38bdf8" },
];

export default function Portfolio() {
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive grid columns
  const techGridColumns =
    windowWidth > 1024 ? 5 : windowWidth > 640 ? 3 : 2;

  // Project card flex
  const projectCardFlex =
    windowWidth > 1024 ? "30%" : windowWidth > 640 ? "45%" : "100%";

  // Profile image size
  const profileSize = windowWidth > 1024 ? 200 : windowWidth > 640 ? 150 : 120;

  // Tech logo size
  const techLogoSize = windowWidth > 1024 ? 100 : windowWidth > 640 ? 80 : 60;

  // Hero text sizes
  const nameSize = windowWidth > 1024 ? "3rem" : windowWidth > 640 ? "2.4rem" : "1.8rem";
  const roleSize = windowWidth > 1024 ? "1.5rem" : windowWidth > 640 ? "1.2rem" : "1rem";
  const subtitleSize = windowWidth > 1024 ? "1rem" : windowWidth > 640 ? "0.95rem" : "0.85rem";

  // Section title size
  const sectionTitleSize =
    windowWidth > 1024 ? "2.3rem" : windowWidth > 640 ? "2rem" : "1.6rem";

  // Project card title & text sizes
  const projectTitleSize =
    windowWidth > 1024 ? "1.4rem" : windowWidth > 640 ? "1.2rem" : "1rem";
  const projectStackSize =
    windowWidth > 1024 ? "0.9rem" : windowWidth > 640 ? "0.85rem" : "0.75rem";
  const projectDescSize =
    windowWidth > 1024 ? "0.9rem" : windowWidth > 640 ? "0.85rem" : "0.75rem";

  // Resume button size
  const resumeBtnSize =
    windowWidth > 1024 ? "1rem" : windowWidth > 640 ? "0.9rem" : "0.8rem";

  return (
    <>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <a href="#home" style={styles.navLink}>
          Home
        </a>
        <a href="#about" style={styles.navLink}>
          About
        </a>
        <a href="#techstack" style={styles.navLink}>
          Tech Stack
        </a>
        <a href="#projects" style={styles.navLink}>
          Projects
        </a>
        <a href="#contact" style={styles.navLink}>
          Contact
        </a>
      </nav>

      <main style={styles.container}>
        {/* HERO */}
        <section id="home" style={styles.hero}>
          <div
  style={styles.profileWrapper}
  onMouseEnter={(e) => {
    const img = e.currentTarget.firstChild as HTMLElement;
    img.style.transform = "rotateY(180deg)";
  }}
  onMouseLeave={(e) => {
    const img = e.currentTarget.firstChild as HTMLElement;
    img.style.transform = "rotateY(0deg)";
  }}
>
  <img
    src="/profile.jpg"
    alt="Shifali Florine Lobo"
    style={{
      ...styles.profileImage,
      width: profileSize,
      height: profileSize,
    }}
  />
</div>


          <h1 style={{ ...styles.name, fontSize: nameSize }}>
            Shifali Florine Lobo
          </h1>
          <h2 style={{ ...styles.role, fontSize: roleSize }}>
            Computer Science Engineering Student
          </h2>

          <p style={{ ...styles.subtitle, fontSize: subtitleSize }}>
            Final-year Computer Science Engineering student with a strong
            academic background (CGPA 9.72), experienced in full stack web
            development, machine learning, and blockchain-based systems.
          </p>

          <a
            href="/resume.pdf"
            download
            style={{ ...styles.resumeButton, fontSize: resumeBtnSize }}
          >
            Download Resume
          </a>
        </section>

        {/* TECH STACK */}
        <section
          id="techstack"
          style={{
            ...styles.section,
            maxWidth: "100%",
            padding: "80px 40px",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ ...styles.title, fontSize: sectionTitleSize }}>Tech Stack</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${techGridColumns}, 1fr)`,
              gap: "20px",
            }}
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                style={styles.techCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(56,189,248,0.4)";
                  e.currentTarget.style.border = "1px solid #38bdf8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.border = "1px solid rgba(56,189,248,0.4)";
                }}
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  style={{ ...styles.techLogo, width: techLogoSize, height: techLogoSize }}
                />
                <p style={{ fontSize: projectStackSize }}>{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          style={{
            ...styles.section,
            maxWidth: "100%",
            padding: "80px 40px",
            boxSizing: "border-box",
            backgroundColor: "#0b0c1a",
          }}
        >
          <h2 style={{ ...styles.title, fontSize: sectionTitleSize }}>About Me</h2>
          <p
            style={{
              ...styles.text,
              fontSize: projectDescSize,
              maxWidth: "1200px",
              margin: "auto",
            }}
          >
            I am a final-year Computer Science Engineering student at Sahyadri
            College of Engineering and Management with a strong academic record
            (CGPA 9.72) and a deep interest in building impactful technology
            solutions. My core strengths lie in full stack web development,
            blockchain systems, and machine learning, where I enjoy working
            across both frontend and backend to create secure, scalable, and
            user-focused applications. I have hands-on experience developing
            real-world projects using modern frameworks, databases, and
            blockchain platforms, and I enjoy solving complex problems by
            applying clean code practices and strong system design principles. I
            am highly motivated to learn new technologies, collaborate in
            team-driven environments, and continuously improve my technical and
            problem-solving skills to build software that creates real value.
          </p>
        </section>


        {/* PROJECTS */}
        <section id="projects" style={styles.projectsSection}>
          <h2 style={{ ...styles.title, fontSize: sectionTitleSize }}>Projects</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {[
              {
                title: "American Sign Language Translator",
                frontStack: ["Python", "CNN", "LSTM"],
                github: "https://github.com/Shifaliii/ASL_using_LSTM",
                backDesc:
                  "This project uses a CNN + LSTM hybrid model to recognize American Sign Language gestures from live video feed. It allows users to communicate using ASL, converting gestures into text in real time.",
              },
              {
                title: "ThinkBoard – MERN App",
                frontStack: ["MongoDB", "Express", "React", "Node.js"],
                github: "https://github.com/Shifaliii/Note-taking-application",
                backDesc:
                  "ThinkBoard is a full-stack note-taking application built using the MERN stack. Users can create, edit, and organize notes securely, with a clean and intuitive interface.",
              },
              {
                title: "Blockchain Record Storage",
                frontStack: ["Hyperledger", "Node.js", "Docker"],
                github: "https://github.com/Shifaliii/THEMIS",
                backDesc:
                  "A Hyperledger Fabric-based system for secure document storage. Files are encrypted, chunked, and stored on a blockchain network, ensuring tamper-proof access and high security.",
              },
            ].map((project) => (
              <div
  style={{ ...styles.projectCardWrapper, flexBasis: projectCardFlex }}
  onMouseEnter={(e) => {
    const card = e.currentTarget.firstChild as HTMLElement | null;
    if (card) {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 10px 25px rgba(56,189,248,0.4)";
    }
  }}
  onMouseLeave={(e) => {
    const card = e.currentTarget.firstChild as HTMLElement | null;
    if (card) {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    }
  }}
>
                <div style={styles.projectCard}>
                  <h3 style={{ fontSize: projectTitleSize }}>{project.title}</h3>
                  <p style={{ ...styles.techStackText, fontSize: projectStackSize }}>
                    {project.frontStack.join(" • ")}
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    style={styles.githubButton}
                  >
                    View on GitHub
                  </a>
                  <p style={{ ...styles.projectBackDesc, fontSize: projectDescSize }}>
                    {project.backDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
<section
  id="contact"
  style={{
    ...styles.section,
    maxWidth: "100%",
    padding: "80px 40px",
    backgroundColor: "#0b0c1a", // darker tech-style background
    color: "#e5e7eb",
    boxSizing: "border-box",
  }}
>
  <h2 style={{ ...styles.title, fontSize: sectionTitleSize, textAlign: "center" }}>
    Contact Me
  </h2>

  {/* Contact Info Cards */}
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
      marginTop: "40px",
    }}
  >
    {/* Email */}
    <div
      style={styles.contactCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(56,189,248,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 5px 20px rgba(56,189,248,0.3)";
      }}
    >
      <AiOutlineMail style={styles.contactIcon} />
      <p style={styles.contactText}>shifalilobo9@gmail.com</p>
    </div>

    {/* GitHub */}
    <div
      style={styles.contactCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(56,189,248,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 5px 20px rgba(56,189,248,0.3)";
      }}
    >
      <FaGithub style={styles.contactIcon} />
      <p style={styles.contactText}>
        <a
          href="https://github.com/Shifaliii"
          target="_blank"
          style={{ color: "#38bdf8", textDecoration: "none" }}
        >
          github.com/Shifaliii
        </a>
      </p>
    </div>

    {/* LinkedIn */}
    <div
      style={styles.contactCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(56,189,248,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 5px 20px rgba(56,189,248,0.3)";
      }}
    >
      <FaLinkedin style={styles.contactIcon} />
      <p style={styles.contactText}>
        <a
          href="https://www.linkedin.com/in/shifali-florine-lobo-1b2923243/"
          target="_blank"
          style={{ color: "#38bdf8", textDecoration: "none" }}
        >
          linkedin.com/in/shifali-florine-lobo
        </a>
      </p>
    </div>
  </div>

  {/* Optional Contact Form */}
  <form
    style={{
      marginTop: "60px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
    <input type="text" placeholder="Your Name" style={styles.contactInput} />
    <input type="email" placeholder="Your Email" style={styles.contactInput} />
    <textarea
      placeholder="Your Message"
      rows={5}
      style={styles.contactTextarea}
    ></textarea>
    <button type="submit" style={styles.contactButton}>
      Send Message
    </button>
  </form>
</section>


        <footer style={{ ...styles.footer, fontSize: projectDescSize }}>
          © 2026 Shifali Florine Lobo
        </footer>
      </main>
    </>
  );
}

// Styles remain the same as previous version (hover effects preserved)
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    fontFamily: "Arial, sans-serif",
    scrollBehavior: "smooth",
  },
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#020617",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    borderBottom: "1px solid #38bdf8",
    zIndex: 1000,
  },
  navLink: { color: "#38bdf8", textDecoration: "none", fontWeight: "bold" },
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 20px",
  },
  name: { color: "#38bdf8" },
  role: {},
  subtitle: { maxWidth: "700px", marginTop: "10px" },
  resumeButton: {
    marginTop: "25px",
    padding: "12px 24px",
    backgroundColor: "#38bdf8",
    color: "#020617",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  section: { padding: "80px 20px", maxWidth: "900px", margin: "auto" },
  title: { color: "#38bdf8", marginBottom: "20px" },
  techCard: {
    border: "1px solid rgba(56,189,248,0.4)",
    borderRadius: "18px",
    padding: "28px 20px",
    textAlign: "center",
    transition: "0.2s",
  },
  techLogo: {},
  profileWrapper: { width: "190px", height: "190px", perspective: "1000px", marginBottom: "20px" },
  profileImage: {
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #38bdf8",
    transition: "transform 0.8s",
    transformStyle: "preserve-3d",
  },
  projectsSection: { width: "100vw", padding: "80px 40px", backgroundColor: "#020617" },
  projectCardWrapper: { minWidth: "250px" },
  projectCard: {
    width: "100%",
    minHeight: "300px",
    backgroundColor: "#38bdf8",
    color: "#000000",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  techStackText: { marginTop: "10px", fontWeight: "normal" },
  githubButton: {
    marginTop: "15px",
    padding: "8px 14px",
    backgroundColor: "#000000",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold",
  },
  projectBackDesc: { marginTop: "15px", fontWeight: "normal", lineHeight: "1.4" },
  footer: { textAlign: "center", padding: "20px", borderTop: "1px solid #38bdf8" },
  contactCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#11121a",
    padding: "20px",
    borderRadius: "12px",
    minWidth: "180px",
    boxShadow: "0 5px 20px rgba(56,189,248,0.3)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
  },
  contactIcon: { fontSize: 40, color: "#38bdf8" },
  contactText: { color: "#38bdf8", textAlign: "center", fontSize: "0.95rem" },
  contactInput: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #38bdf8",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    outline: "none",
  },
  contactTextarea: {
    width: "100%",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #38bdf8",
    backgroundColor: "#020617",
    color: "#e5e7eb",
    outline: "none",
    resize: "vertical",
  },
  contactButton: {
    padding: "12px 25px",
    backgroundColor: "#38bdf8",
    color: "#020617",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s",
  },

};
