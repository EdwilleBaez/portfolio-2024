import { BsLightningFill } from "react-icons/bs";
import { FaCalendarCheck, FaGithub, FaQuestion, FaRocket, FaTasks } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const Projects = () => {
  const myProjects = [
    {
      id: "poitin",
      titulo: "Poitin",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      deployLink: "https://pointin-app.netlify.app",
      icon: <BsLightningFill />,
      badges: ["React", "Tailwind", "TypeScript"]
    },
    {
      id: "guess-the-number",
      titulo: "Adivina el Número",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/guess-the-number",
      deployLink: "https://guess-the-4-numbers.netlify.app",
      icon: <FaQuestion />,
      badges: ["React", "Tailwind", "TypeScript"]
    },
    {
      id: "to-do-list",
      titulo: "Editor de tareas",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      deployLink: "https://editor-de-tareas.netlify.app",
      icon:  <FaTasks />,
      badges: ["HTML","CSS", "JavaScript"]
    },
    {
      id: "appointment-manager",
      titulo: "Gestor de citas",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/GestorDeCitas",
      deployLink: "https://beaty-appointment-manager.netlify.app",
      icon: <FaCalendarCheck />,
      badges: ["React", "Boostrap"]
    },
    {
      id: "emerald",
      titulo: "Emerald",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/Emerald",
      deployLink: "https://emerald-project.netlify.app",
      icon: <IoLogoFigma />,
      badges: ["HTML", "SASS"]
    },
    {
      id: "dashboard",
      titulo: "Dashboard",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/dark-mode-dashboard",
      deployLink: "https://figma-desing.netlify.app",
      icon: <IoLogoFigma />,
      badges: ["HTML","SASS"]
    },
  ];

  return (
    <section id="projects" className="w-full mx-auto p-12 bg-gray-100">
      <div className="grid grid-cols-3 gap-8">
        {myProjects.map((project) => (
          <div
            key={`project-${project.id}`}
            className="badge-container bg-white rounded-lg shadow-md p-8"
          >
            <div className="text-3xl flex text-gray-600 justify-center  mb-4">
              {project.icon}
            </div>
            <div className="relative">
              <h2 className="text-xl text-center font-semibold mb-2">
                {project.titulo}
              </h2>
            </div>
            <p className="text-gray-600 text-center">{project.descripcion}</p>
            <div className="mt-4 flex justify-center">
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
