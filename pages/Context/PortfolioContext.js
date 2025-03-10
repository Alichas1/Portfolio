import { createContext, useContext, useState, useEffect } from "react";

// Create the Portfolio Context
const PortfolioContext = createContext();

// PortfolioProvider component to wrap your app with context
export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [techSkills, setTechSkills] = useState([]);

  // Load data from local storage
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    const savedTechSkills = localStorage.getItem("techSkills");

    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    if (savedTechSkills) {
      setTechSkills(JSON.parse(savedTechSkills));
    }
  }, []);

  // Save data to local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("techSkills", JSON.stringify(techSkills));
  }, [projects, techSkills]);

  return (
    <PortfolioContext.Provider
      value={{ projects, setProjects, techSkills, setTechSkills }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook to use the PortfolioContext in components
export const usePortfolio = () => useContext(PortfolioContext);
