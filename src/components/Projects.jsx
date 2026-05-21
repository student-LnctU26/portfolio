export default function Projects() {
  return (
    <div id="projects" className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold">Projects</h2>

      {/* Project Card */}
      <div className="mt-8 max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg text-left">
        
        <h3 className="text-2xl font-semibold">Wanderlust</h3>

        <p className="mt-2 text-gray-300">
          Full-stack travel platform with auth, CRUD, image upload, reviews.
        </p>

        <p className="mt-3 text-sm text-gray-400">
          Tech: React, Node, Express, MongoDB
        </p>

        <div className="mt-4 space-x-4">
          <a href="https://wanderlust-deltaproject.onrender.com" className="text-blue-400 hover:underline">
            Live
          </a>
          <a href="https://github.com/student-LnctU26/WanderLust.git" className="text-blue-400 hover:underline">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}