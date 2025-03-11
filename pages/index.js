import Card from "@/pages/components/Card";
import { usePortfolio } from "./Context/PortfolioContext";

export default function Home() {
  const { projects, setProjects, techSkills, setTechSkills } = usePortfolio();

  return (
    <div className="bg-blue-200 mb-0">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-6">
        <div>
          <img
            src="/image/bild.jpeg"
            alt="Profile"
            className="w-60 h-62 rounded-full "
          />
          <div className="mt-4 text-2xl font-semibold">
            Hi!, my name is Ali Yusuf
          </div>
        </div>
        <h1 className="font-semibold text-3xl mt-2">
          Frontend Developer Junior in Sweden
        </h1>
      </div>

      <div className="mt-16">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-gray-700">My Tech Skills</h2>
          <p className="text-lg font-medium mt-4">
            Skills I have acquired throughout my education
          </p>
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techSkills.map((skillImage, index) => (
              <div
                key={index}
                className=" px-4 py-2 rounded-lg text-center  bg-white"
              >
                {/* Displaying the image for the skill */}
                <img
                  src={skillImage}
                  alt={`Tech Skill ${index}`}
                  className="w-16 h-16 object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="mt-24">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-gray-700">Projects</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="relative">
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
