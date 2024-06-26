import { BsLightningFill } from "react-icons/bs";
import { FaCalendarCheck, FaGithub, FaQuestion, FaRocket, FaTasks } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const Projects = () => {
  const myProjects = [
    {
      id: "poitin",
      title: "Poitin",
      subtitle: "Subtítulo del Proyecto 1",
      description: "Proyecto en desarrollo",
      deployLink: "https://pointin-app.netlify.app",
      icon: <BsLightningFill />,
      badges: ["React", "Tailwind", "TypeScript", "Redux", "React Query"]
    },
    {
      id: "guess-the-number",
      title: "Adivina el Número",
      subtitle: "Subtítulo del Proyecto 1",
      description: "Juego interactivo",
      githubLink: "https://github.com/EdwilleBaez/guess-the-number",
      deployLink: "https://guess-the-4-numbers.netlify.app",
      icon: <FaQuestion />,
      badges: ["React", "Tailwind", "TypeScript"]
    },
    {
      id: "to-do-list",
      title: "Editor de tareas",
      subtitle: "CRUD completo en inglés y español",
      description: "CRUD completo en inglés y español",
      deployLink: "https://editor-de-tareas.netlify.app",
      icon:  <FaTasks />,
      badges: ["HTML","CSS", "JavaScript"]
    },
    {
      id: "appointment-manager",
      title: "Gestor de citas",
      subtitle: "Aquí aprendí sobre React Router y Context",
      description: "Aquí aprendí sobre React Router y Context",
      githubLink: "https://github.com/EdwilleBaez/GestorDeCitas",
      deployLink: "https://beaty-appointment-manager.netlify.app",
      icon: <FaCalendarCheck />,
      badges: ["React", "Boostrap"]
    },
    {
      id: "emerald",
      title: "Emerald",
      subtitle: "Mis inicios en la maquetación web",
      description: "Mis inicios en la maquetación web",
      githubLink: "https://github.com/EdwilleBaez/Emerald",
      deployLink: "https://emerald-project.netlify.app",
      icon: <IoLogoFigma />,
      badges: ["HTML", "SASS"]
    },
    {
      id: "dashboard",
      title: "Dashboard",
      subtitle: "Subtítulo del Proyecto 1",
      description: "Mis inicios en la maquetación web",
      githubLink: "https://github.com/EdwilleBaez/dark-mode-dashboard",
      deployLink: "https://figma-desing.netlify.app",
      icon: <IoLogoFigma />,
      badges: ["HTML","SASS"]
    },
  ];

  return (
    <section id="projects" className="w-full mx-auto p-12 bg-gray-100">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div
            key={`project-${project.id}`}
            className="badge-container bg-white rounded-lg shadow-md p-8 flex flex-col justify-between"
          >
            <div className="text-3xl flex text-gray-600 justify-center  mb-4">
              {project.icon}
            </div>
            <div className="relative">
              <h2 className="text-xl text-center font-semibold mb-2">
                {project.title}
              </h2>
            </div>
            <p className="text-base text-gray-600 text-center">{project.description}</p>
            <div className="mt-4 flex flex-wrap justify-center text-base">
              {project.githubLink && (
                <a
                href={project.githubLink}
                className="text-tertiary hover:text-tertiary-dark font-medium mr-4 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block mr-1" />
                Ver en GitHub
              </a>
              )}
              <a
                href={project.deployLink}
                className="text-tertiary hover:text-tertiary-dark font-medium flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRocket className="inline-block mr-1" />
                Ver deploy
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-center mt-5 text-[12px]">
                {project.badges.map((badge, index) => (
                  <span
                    key={`badge-${index}`}
                    className="border border-secondary text-secondary px-3 py-1 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
