import { useState } from "react";
import { usePortfolio } from "./Context/PortfolioContext";
export default function Admin() {
  const { setProjects, setTechSkills } = usePortfolio();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newTechskill, setNewTechskill] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "1212") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function handleCreateProject() {
    if (projectName && projectDescription && projectImage && projectUrl) {
      const newProject = {
        name: projectName,
        description: projectDescription,
        image: projectImage,
        url: projectUrl,
      };
      setProjects((prevProjects) => [...prevProjects, newProject]);
      setProjectName("");
      setProjectDescription("");
      setProjectImage("");
      setProjectUrl("");
    }
  }

  function addTechSkill() {
    if (newTechskill) {
      setTechSkills((prevSkills) => [...prevSkills, newTechskill]);
      setNewTechskill("");
    }
  }

  if (!loggedIn) {
    return (
      <div className="flex justify-center items-center gap-4 p-6 bg-blue-300">
        <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-md bg-white">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 p-2 rounded-md"
            placeholder="Password"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Logga in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-blue-300">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      {/* Tech Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Tech Skills</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={newTechskill}
            onChange={(e) => setNewTechskill(e.target.value)}
            placeholder="Add a new tech skill"
            className="border border-gray-400 p-2 rounded-md flex-grow"
          />
          <button
            onClick={addTechSkill}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Add Skill
          </button>
        </div>
        {/* You can optionally display the skills here if you want */}
      </div>

      {/* Projects Form */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Project Name</label>
            <input
              className="border border-gray-400 p-2 rounded-md w-full"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              className="border border-gray-400 p-2 rounded-md w-full"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Image URL</label>
            <input
              className="border border-gray-400 p-2 rounded-md w-full"
              value={projectImage}
              onChange={(e) => setProjectImage(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700">Project URL</label>
            <input
              className="border border-gray-400 p-2 rounded-md w-full"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={handleCreateProject}
          className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Create Project
        </button>
      </div>
    </div>
  );
}
