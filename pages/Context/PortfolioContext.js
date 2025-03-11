import { createContext, useContext, useState, useEffect } from "react";

// Create the Portfolio Context
const PortfolioContext = createContext();

// PortfolioProvider component to wrap your app with context
export default function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([
    {
      name: "Todolist",
      description: "skapade en Todolista",
      image:
        "https://media.istockphoto.com/id/1384700413/vector/to-do-list-with-clipboard.jpg?s=612x612&w=0&k=20&c=naH67PLQVD5JuC9Z96DFTw8gZT3waRNOgOL23UyHRFw=",
      url: "https://github.com/Alichas1/Todo-List",
    },
    {
      name: "Redesigned Zoom",
      description: "I redesigned zoom to look more simper for the user",
      image:
        "https://cdn.mos.cms.futurecdn.net/25UeWUrVGmuXUjnG6Yt7rj-970-80.jpg",
      url: "https://github.com/Alichas1/Redesign-Zoom",
    },
    {
      name: "Radioplayer",
      description:
        "skapade en radiospelare som jag har fetchat med async function",
      image:
        "https://media.istockphoto.com/id/506176142/sv/foto/vintage-radio.jpg?s=612x612&w=0&k=20&c=3ujqs3-qRrEaaStoKWFwf9IwWlnsS8cmsE0puqb4Pb0=",
      url: "https://github.com/Alichas1/Radioplayer",
    },
    {
      name: "WAI-ARIA",
      description:
        "Workshopbeskrivning: Under workshopen fokuserade vi på att implementera och förstå hur WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) kan förbättra tillgängligheten för användare, särskilt för de som använder hjälpmedel som skärmläsare. ",
      image:
        "https://miro.medium.com/v2/resize:fit:1134/1*vWTlh8KR_FwH4JhOFYk6Jw.png",
      url: "https://github.com/Alichas1/WAI-ARIA/blob/main/index.js",
    },
    {
      name: "Pokemon Cards",
      description:
        "Me and my group created a Pokemon collection where you can collect the cards as your favorite. The task will give us a practice in managing global state with Redux or Context API, to experience in fetching and displaying data from an external API, and implementing functionality to bookmark articles.",
      image: "https://m.media-amazon.com/images/I/81U+9QM-aqL._AC_SL1500_.jpg",
      url: "https://pokemon-one-bay.vercel.app/",
    },
    {
      name: "PizzaBot",
      description: "Created a Pizzabot",
      image:
        "https://camo.githubusercontent.com/d8165e544d74e65d2291404eda5fe44ebb1f2dd473f78b60ec53015651f23e87/68747470733a2f2f69312e736e6463646e2e636f6d2f617274776f726b732d3030303530313639333839342d776e71386a6f2d74353030783530302e6a7067",
      url: "https://github.com/Alichas1/Pizzabot",
    },
  ]);
  const [techSkills, setTechSkills] = useState([
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png",
    "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256",
    "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZnJz2QlBwHI21QOPsP9V-DHLbHBtqEE0WCEvHQGf9KZl7hJ102P0Ttg&s",
  ]);

  // Load data from local storage
  // useEffect(() => {
  //   const savedProjects = localStorage.getItem("projects");
  //   const savedTechSkills = localStorage.getItem("techSkills");

  //   if (savedProjects) {
  //     setProjects(JSON.parse(savedProjects));
  //   }
  //   if (savedTechSkills) {
  //     setTechSkills(JSON.parse(savedTechSkills));
  //   }
  // }, []);

  // Save data to local storage whenever the state changes
  // useEffect(() => {
  //   localStorage.setItem("projects", JSON.stringify(projects));
  //   localStorage.setItem("techSkills", JSON.stringify(techSkills));
  // }, [projects, techSkills]);

  return (
    <PortfolioContext.Provider
      value={{ projects, setProjects, techSkills, setTechSkills }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

// Custom hook to use the PortfolioContext in components
export const usePortfolio = () => useContext(PortfolioContext);
