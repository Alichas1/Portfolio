import { useState } from "react";
import { usePortfolio } from "./Context/PortfolioContext";

export default function Admin() {
  const { setProjects, setTechSkills, techSkills, projects } = usePortfolio();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [newTechSkillImage, setNewTechSkillImage] = useState("");
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectUrl, setProjectUrl] = useState("");

  // State to track editing project
  const [editProjectIndex, setEditProjectIndex] = useState(null);

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

  function handleSaveProject() {
    if (editProjectIndex !== null) {
      const updatedProjects = [...projects];
      updatedProjects[editProjectIndex] = {
        name: projectName,
        description: projectDescription,
        image: projectImage,
        url: projectUrl,
      };
      setProjects(updatedProjects);
      setEditProjectIndex(null);
      setProjectName("");
      setProjectDescription("");
      setProjectImage("");
      setProjectUrl("");
    }
  }

  function handleEditProject(index) {
    setEditProjectIndex(index);
    const project = projects[index];
    setProjectName(project.name);
    setProjectDescription(project.description);
    setProjectImage(project.image);
    setProjectUrl(project.url);
  }

  function handleDeleteProject(index) {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  }

  function handleDeleteTechSkill(index) {
    const updatedSkills = techSkills.filter((_, i) => i !== index);
    setTechSkills(updatedSkills);
  }

  function addTechSkill() {
    if (newTechSkillImage && newTechSkillImage.startsWith("http")) {
      setTechSkills((prevSkills) => [...prevSkills, newTechSkillImage]);
      setNewTechSkillImage("");
    } else {
      alert("Please enter a valid image URL.");
    }
  }

  if (!loggedIn) {
    return (
      <div className="flex justify-center items-center gap-4 p-6 bg-blue-200">
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
    <div className="p-6 bg-blue-200">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      {/* Skills */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Tech Skills</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            value={newTechSkillImage}
            onChange={(e) => setNewTechSkillImage(e.target.value)}
            placeholder="Add Image URL for Tech Skill"
            className="border border-gray-400 p-2 rounded-md flex-grow"
          />
          <button
            onClick={addTechSkill}
            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
          >
            Add Skill Image
          </button>
        </div>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techSkills.map((skillImage, index) => (
            <div
              key={index}
              className="bg-gray-100 px-4 py-2 rounded-lg shadow-md text-center"
            >
              <img
                src={skillImage}
                alt="Tech Skill"
                className="w-16 h-16 object-contain mx-auto"
              />
              <button
                onClick={() => handleDeleteTechSkill(index)}
                className="text-red-500 mt-2 text-xl font-bold"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editProjectIndex === null ? "Create New Project" : "Edit Project"}
        </h2>
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
          onClick={
            editProjectIndex === null ? handleCreateProject : handleSaveProject
          }
          className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600"
        >
          {editProjectIndex === null ? "Create Project" : "Save Project"}
        </button>
      </div>

      {/* projects */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Existing Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 border rounded-md"
            >
              <div>
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditProject(index)}
                  className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProject(index)}
                  className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
