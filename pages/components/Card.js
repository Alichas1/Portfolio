export default function Card({ project }) {
  return (
    <div className="max-w-sm w-full h-[450px] rounded overflow-hidden shadow-lg border-2 mt-10">
      {/* Image section */}
      <img
        className="w-full h-48 object-cover"
        src={project.image}
        alt={project.name}
      />

      {/* Content Section */}
      <div className="px-6 py-4 h-[160px]">
        <div className="font-light mb-4">{project.name}</div>
        <p className="text-gray-600 text-sm">{project.description}</p>
      </div>

      {/* Link Section */}
      <div className="px-6 py-4 flex items-end">
        <a href={project.url} className="text-blue-600 hover:underline text-sm">
          Learn more
        </a>
      </div>
    </div>
  );
}
