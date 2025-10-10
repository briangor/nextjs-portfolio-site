import Image from "next/image";
// import styles from "./page.module.css";
import './styles/styles.module.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeroRibbon from "./components/hero-ribbon";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <HeroRibbon />
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            I am a seasoned Java developer with over 10 years of experience in building robust and scalable applications. My expertise lies in developing microservices, REST APIs, and enterprise-level solutions using Spring Boot and related technologies. I have a strong background in software architecture, design patterns, and best practices, ensuring that the applications I build are maintainable and efficient.
          </p>
          <p>
            Throughout my career, I have worked on various projects across different industries, including finance, healthcare, and e-commerce. I am passionate about learning new technologies and continuously improving my skills to stay up-to-date with the latest trends in software development.
          </p>
          <p>
            In addition to my technical skills, I am a team player who enjoys collaborating with cross-functional teams to deliver high-quality software solutions. I am also an advocate for clean code and agile methodologies, which help streamline the development process and enhance productivity.
          </p>
          <p>
            When I'm not coding, I enjoy contributing to open-source projects, attending tech meetups, and mentoring junior developers. I believe in giving back to the community and helping others grow in their careers.
          </p>
          <p>
            If you're looking for a dedicated and experienced Java developer to join your team or work on your project, feel free to reach out. I'm always open to new opportunities and collaborations.
          </p>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>Project One</h3>
              <p>A brief description of Project One, highlighting its features and technologies used.</p>
            </div>
            <div className="project-item">
              <h3>Project Two</h3>
              <p>A brief description of Project Two, highlighting its features and technologies used.</p>
            </div>
            <div className="project-item">
              <h3>Project Three</h3>
              <p>A brief description of Project Three, highlighting its features and technologies used.</p>
            </div>
          </div>
        </div>
        <div className="contact">
          <h2>Contact Me</h2>
          <p>If you'd like to get in touch, please reach out via email or connect with me on LinkedIn.</p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
