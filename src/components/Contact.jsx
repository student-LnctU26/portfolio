export default function Contact() {
  return (
    <div className="py-20 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold">Contact</h2>

      <p className="mt-4 text-gray-300">
        Feel free to reach out for opportunities or collaboration.
      </p>

      <div className="mt-6 space-x-6">
        <a href="mailto:yourmail@gmail.com" className="text-blue-400">
          Email
        </a>
        <a href="https://github.com/" className="text-blue-400">
          GitHub
        </a>
        <a href="https://linkedin.com/" className="text-blue-400">
          LinkedIn
        </a>
      </div>
    </div>
  );
}