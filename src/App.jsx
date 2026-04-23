import { HashRouter, Routes, Route, NavLink } from "react-router-dom";

const pageStyle = {
  maxWidth: "900px",
  margin: "30px auto",
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const navStyle = {
  background: "#1e3a8a",
  padding: "16px 24px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
};

const linksStyle = {
  display: "flex",
  gap: "18px",
};

const linkStyle = ({ isActive }) => ({
  color: "white",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  borderBottom: isActive ? "2px solid white" : "none",
  paddingBottom: "3px",
});

function Layout({ children }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6", fontFamily: "Arial, sans-serif" }}>
      <nav style={navStyle}>
        <div>
          <h2 style={{ margin: 0 }}>Pranavi Raju</h2>
        </div>
        <div style={linksStyle}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/skills" style={linkStyle}>Skills</NavLink>
          <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
          <NavLink to="/github" style={linkStyle}>GitHub</NavLink>
        </div>
      </nav>
      {children}
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <div style={pageStyle}>
        <h1>Home</h1>
        <p>
          Hello, I am Pranavi Raju, an Artificial Intelligence student interested in
          machine learning, speech technologies, and web development.
        </p>
        <p>
          This portfolio presents my skills, projects, and GitHub profile in a simple
          and organized way.
        </p>

        <h2>About Me</h2>
        <p>
          I enjoy learning new technologies and applying them in practical projects.
          My interests include AI, multilingual systems, and building useful applications.
        </p>

        <h2>Personal Details</h2>
        <p><strong>Name:</strong> Pranavi Raju</p>
        <p><strong>Phone:</strong> 7337432323</p>
        <p><strong>Personal Email:</strong> pranaviraju18@gmail.com</p>
        <p><strong>College Email:</strong> se23uari060@mahindrauniversity.edu.in</p>
      </div>
    </Layout>
  );
}

function Skills() {
  const skills = ["Python", "JavaScript", "React", "HTML", "CSS", "Machine Learning", "GitHub"];
  return (
    <Layout>
      <div style={pageStyle}>
        <h1>Skills</h1>
        <ul>
          {skills.map((skill) => (
            <li key={skill} style={{ marginBottom: "10px" }}>{skill}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

function Projects() {
  const projects = [
    {
      title: "Multilingual Video Dubbing Project",
      desc: "A project related to speech processing, translation, and AI-based dubbing.",
      link: "https://github.com/pranavirajuk/multilingual-library-",
    },
    {
      title: "Green Commute Planner",
      desc: "A sustainability-focused application that suggests eco-friendly travel routes and transportation options to reduce carbon footprint.",
      link: "https://github.com/AKSHITHA9406/Green-commute-planner",
    },
    {
      title: "Portfolio Website",
      desc: "A personal portfolio website built using React and React Router.",
      link: "https://github.com/pranavirajuk/Portfolio",
    },
  ];

  return (
    <Layout>
      <div style={pageStyle}>
        <h1>Projects</h1>
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              border: "1px solid #d1d5db",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "16px",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

function GitHubPage() {
  return (
    <Layout>
      <div style={pageStyle}>
        <h1>GitHub</h1>
        <p>You can find my work here:</p>
        <p>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
            https://github.com/your-username
          </a>
        </p>
        <p>Replace this with your actual GitHub profile link.</p>
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/github" element={<GitHubPage />} />
      </Routes>
    </HashRouter>
  );
}