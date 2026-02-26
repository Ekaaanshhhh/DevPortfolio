import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Civix — Civic Issue Reporting Platform",
    description:
      "A full-stack civic platform enabling users to report and track local infrastructure issues with real-time status updates and secure authentication.",
    tech: ["React", "Firebase Auth", "Firestore", "Role-Based Admin"],
    image: "/assets/civix.png", // add screenshot
    github: "https://github.com/shristi482004/Civix",
    live: "https://civix-7f8d2.web.app/",
    status: "Live",
  },
  {
    title: "SecureAuth — Industry Grade MERN Auth System",
    description:
      "Production-ready authentication and authorization system with JWT, protected routes, email workflows and scalable MongoDB persistence.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "bcrypt", "Nodemailer"],
    image: "/assets/secureauth.png",
    github: "#",
    live: "#",
    status: "Ongoing",
  },
  {
  title: "DevPortfolio — 3D Interactive Personal Portfolio",
  description:
    "A modern interactive portfolio built with React and Three.js featuring 3D models, animated sections, parallax effects, and immersive UI interactions.",
  tech: [
    "React",
    "Vite",
    "TailwindCSS",
    "Framer Motion",
    "React Three Fiber",
    "Drei"
  ],
  image: "/assets/portfolio.png", // add screenshot
  github: "https://github.com/Ekaaanshhhh/DevPortfolio",
  live: "https://ekanshsatsangi.netlify.app",
  status: "Live",
},
  {
    title: "More Projects Coming Soon",
    description:
      "Currently building scalable full-stack and AI-driven applications. Stay tuned for upcoming releases.",
    tech: ["Full-Stack", "AI/ML", "System Design"],
    image: "/assets/moreprojects.jpg",
    github: "#",
    live: "#",
    status: "Building",
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="relative py-32 bg-gradient-to-b from-[#050816] via-[#060b1f] to-[#050816]"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-purple-400/70 tracking-widest uppercase text-xs">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}