import { FaGithub, FaRocket } from "react-icons/fa";

const Projects = () => {
  const myProjects = [
    {
      id: "poitin",
      titulo: "Poitin",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      deployLink: "https://pointin-app.netlify.app",
      imagen: "/poitin.png",
      badges: ["React", "Tailwind", "TypeScript"]
    },
    {
      id: "guess-the-number",
      titulo: "Adivina el Número",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/guess-the-number",
      deployLink: "https://guess-the-4-numbers.netlify.app",
      imagen: "/guess.png",
      badges: ["React", "Tailwind", "TypeScript"]
    },
    {
      id: "to-do-list",
      titulo: "Editor de tareas",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      deployLink: "https://editor-de-tareas.netlify.app",
      imagen: "/task.png",
      badges: ["HTML","CSS", "JavaScript"]
    },
    {
      id: "appointment-manager",
      titulo: "Gestor de citas",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/GestorDeCitas",
      deployLink: "https://beaty-appointment-manager.netlify.app",
      imagen: "/welcome.png",
      badges: ["React", "Boostrap"]
    },
    {
      id: "emerald",
      titulo: "Emerald",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/Emerald",
      deployLink: "https://emerald-project.netlify.app",
      imagen: "/figma.png",
      badges: ["HTML", "SASS"]
    },
    {
      id: "dashboard",
      titulo: "Dashboard",
      subtitulo: "Subtítulo del Proyecto 1",
      descripcion: "Descripción breve del Proyecto 1",
      githubLink: "https://github.com/EdwilleBaez/dark-mode-dashboard",
      deployLink: "https://figma-desing.netlify.app",
      imagen: "/figma.png",
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
            <img
              src={project.imagen}
              alt={project.titulo}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <div className="relative">
              <h2 className="text-xl text-center font-semibold mb-2">
                {project.titulo}
              </h2>
              <div className="badge absolute top-0 left-0 right-0 mb-3 bg-white">
                {project.badges.map((badge, index) => (
                  <span
                    key={`badge-${index}`}
                    className="badge bg-secondary text-white px-3 py-1 rounded mr-2"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-center">{project.descripcion}</p>
            <div className="mt-4 flex justify-center">
              {project.githubLink && (
                <a
                href={project.githubLink}
                className="text-primary hover:text-secondary font-medium mr-4 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="inline-block mr-1" />
                Ver en GitHub
              </a>
              )}
              <a
                href={project.deployLink}
                className="text-primary hover:text-secondary font-medium flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaRocket className="inline-block mr-1" />
                Ver deploy
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
