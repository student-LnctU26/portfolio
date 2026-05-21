export default function Hero() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-950 text-white text-center">
      <h1 className="text-5xl font-bold">Nishita</h1>
      <p className="text-xl mt-3 text-gray-400">MERN Stack Developer</p>

      <div className="mt-6 space-x-4">
        <a className="px-4 py-2 bg-blue-500 rounded" href="#projects">Projects</a>
        <a className="px-4 py-2 border rounded" href="#contact">Contact</a>
      </div>
    </div>
  );
}