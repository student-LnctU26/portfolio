const projects = [
  {
    title: "StockFlow",
    desc: "Zerodha-inspired stock trading dashboard with real-time holdings, positions tracking, and order management. Includes secure session-based authentication.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Passport.js"],
    live: "https://stockflow-fullstack.onrender.com",
    github: "https://github.com/student-LnctU26/StockFlow",
  },
  {
    title: "Meetify",
    desc: "Zoom-inspired video conferencing application enabling real-time meetings with live video and audio communication.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC"],
    live: "https://your-meetify-link.onrender.com", // TODO: replace
    github: "https://github.com/student-LnctU26/YOUR-MEETIFY-REPO", // TODO: replace
  },
  {
    title: "NetworkPro",
    desc: "LinkedIn-inspired professional networking platform with user authentication, profiles, posts, and connections.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://your-networkpro-link.onrender.com", // TODO: replace
    github: "https://github.com/student-LnctU26/YOUR-NETWORKPRO-REPO", // TODO: replace
  },
  {
    title: "OmniAI",
    desc: "Gemini-inspired conversational AI assistant with a clean chat interface and AI-generated responses.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    live: "https://your-omniai-link.onrender.com", // TODO: replace
    github: "https://github.com/student-LnctU26/YOUR-OMNIAI-REPO", // TODO: replace
  },
  {
    title: "Wanderlust",
    desc: "Full-stack travel listing platform with authentication, CRUD operations, image upload, and a reviews system.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://wanderlust-deltaproject.onrender.com",
    github: "https://github.com/student-LnctU26/WanderLust.git",
  },
];

export default function Projects() {
  return (
    <div id="projects" className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold">Projects</h2>

      {projects.map((project) => (
        <div
          key={project.title}
          className="mt-8 max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg text-left"
        >
          <h3 className="text-2xl font-semibold">{project.title}</h3>

          <p className="mt-2 text-gray-300">{project.desc}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-4 space-x-4">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
