import { FaGithubAlt } from "react-icons/fa"

function Github() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <a
        href="https://github.com/BryanLomerio"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white p-2 rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 transform hover:scale-110"
      >
        <FaGithubAlt className="text-gray-700 text-lg" />
      </a>
    </div>
  )
}

export default Github

