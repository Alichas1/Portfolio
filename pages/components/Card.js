export default function Card({ project }) {
  return (
    <div className="max-w-sm w-full h-[450px] rounded-lg overflow-hidden shadow-lg border-2 mt-10 bg-white relative">
      {/* Image section */}
      <img
        className="w-full h-48 object-cover"
        src={project.image || "/default-image.jpg"} // Provide a fallback image
        alt={project.name || "Project"}
      />

      {/* Content Section */}
      <div className="px-6 py-4 h-[160px] flex flex-col justify-between">
        <div className="font-semibold text-xl mb-2">
          {project.name || "Untitled Project"}
        </div>
        <p className="text-gray-600 text-base flex-grow">
          {project.description || "No description available."}
        </p>
      </div>

      {/* Link Section */}
      <div className="absolute bottom-4 right-4">
        <a
          href={project.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
