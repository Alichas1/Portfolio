import Card from "@/pages/components/Card";
import { usePortfolio } from "./Context/PortfolioContext";

export default function Home() {
  const { projects, setProjects, techSkills, setTechSkills } = usePortfolio();

  // Function to handle deleting a tech skill
  const deleteTechSkill = (index) => {
    const updatedSkills = techSkills.filter((_, i) => i !== index);
    setTechSkills(updatedSkills);
  };

  // Function to handle deleting a project
  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="bg-blue-300">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-6 mt-10 ">
        <div>
          <img
            src="/image/css-3.svg"
            alt="Profile"
            className="w-32 h-32 rounded-full pl-10"
          />
          <div className="mt-4 text-2xl font-semibold">
            Hej, Jag heter Ali Yusuf
          </div>
        </div>
        <h1 className="font-semibold text-3xl mt-2">
          Frontend Developer Junior in Sweden
        </h1>
      </div>

      {/* Tech Skills Section */}
      <div className="my-12">
        <div className="flex justify-center">
          <h2 className="text-xl font-medium text-gray-700">My Tech Skills</h2>
        </div>
        <div className="flex justify-center mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-100 px-4 py-2 rounded-lg shadow-md text-center text-sm font-medium text-gray-600"
              >
                <div>{skill}</div>
                {/* Delete Button for Skill */}
                <button
                  onClick={() => deleteTechSkill(index)}
                  className="text-red-500 mt-2 text-xs"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="my-12">
        <div className="flex justify-center">
          <h2 className="text-xl font-medium text-gray-700">Projects</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <Card project={project} />
              {/* Delete Button for Project */}
              <button
                onClick={() => deleteProject(index)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
