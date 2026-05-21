export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white sticky top-0">
      <h1 className="font-bold">Portfolio</h1>

      <div className="space-x-6">
        <a className="hover:text-blue-400" href="#">Home</a>
        <a className="hover:text-blue-400" href="#">Projects</a>
        <a className="hover:text-blue-400" href="#">Contact</a>
      </div>
    </div>
  );
}