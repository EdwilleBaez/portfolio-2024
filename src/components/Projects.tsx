import { useState } from 'react'
import { RiExternalLinkFill } from 'react-icons/ri'

const Projects = () => {
	const myProjects = [
		{
			id: 'las-de-juan-luis-guerra',
			title: 'Las de Juan Luis Guerra',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Proyecto en desarrollo',
			videoLink: 'https://www.youtube.com/watch?v=Emm6tJa-yUs&ab_channel=LuisSegura',
			image: '../../public/assets/proyecto1.png',
			badges: ['Astistencia de vestuario']
		},
		{
			id: 'buenos-negocios',
			title: 'Buenos negocios',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Juego interactivo',
			videoLink: 'https://youtu.be/VBp1Qj299JM?si=7WkKaVMSXnMXoI8G',
			image: '../../public/assets/proyecto2.png',
			badges: ['Dirección']
		},
		{
			id: 'psicosis',
			title: 'PSICOSIS',
			subtitle: 'CRUD completo en inglés y español',
			description: 'CRUD completo en inglés y español',
			videoLink: 'https://www.youtube.com/watch?v=LqmXYSzMt6g&ab_channel=TobyCastillo',
			image: '../../public/assets/proyecto3.png',
			badges: ['Dirección']
		},
		{
			id: 'spot-publicitario',
			title: 'Spot publicitario',
			subtitle: 'Aquí aprendí sobre React Router y Context',
			description: 'Aquí aprendí sobre React Router y Context',
			githubLink: 'https://www.youtube.com/watch?v=5yQBTLSWha8&ab_channel=Josu%C3%A9ReyesPresenta',
			videoLink: 'https://beaty-appointment-manager.netlify.app',
			image: '../../public/assets/proyecto4.png',
			badges: ['Vestuario', 'Maquillaje']
		},
		{
			id: 'realidad-virtual',
			title: 'Realidad virtual',
			subtitle: 'Mis inicios en la maquetación web',
			description: 'Mis inicios en la maquetación web',
			videoLink: 'https://www.youtube.com/watch?v=E-F2IHAMX_k&ab_channel=TobyCastillo',
			image: '../../public/assets/proyecto5.png',
			badges: ['Dirección', 'Actuación']
		},
		{
			id: 'dashboard',
			title: 'Dashboard',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Mis inicios en la maquetación web',
			githubLink: 'https://github.com/EdwilleBaez/dark-mode-dashboard',
			videoLink: 'https://figma-desing.netlify.app',
			badges: ['HTML', 'SASS']
		}
	]

	const [showAllProjects, setShowAllProjects] = useState(false)

	const toggleShowProjects = () => {
		setShowAllProjects(!showAllProjects)
		const projectsSection = document.getElementById('projects')
		if (projectsSection) {
			const offset = -100
			const sectionPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset
			window.scrollTo({ top: sectionPosition, behavior: 'smooth' })
		}
	}

	// Determina la cantidad de proyectos a mostrar
	const visibleProjects = showAllProjects ? myProjects : myProjects.slice(0, 3)

	return (
		<section id="projects" className="w-full mx-auto p-12 bg-gray-100">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{visibleProjects.map((project) => (
					<div
						key={`project-${project.id}`}
						className={`badge-container relative overflow-hidden project-card bg-white rounded-lg shadow-md flex flex-col ${project.id}`}
					>
						<img src={project.image} alt={project.title} className="" />
						<div className="project-content p-8 pt-4">
							<div className="">
								<h2 className="text-xl text-center font-semibold mb-2">{project.title}</h2>
							</div>
							<p className="text-base text-gray-600 text-center">{project.description}</p>
							<div className="mt-4 flex flex-wrap justify-center text-base">
								<a
									href={project.videoLink}
									className="text-tertiary hover:text-tertiary-dark font-medium flex items-center"
									target="_blank"
									rel="noopener noreferrer"
								>
									<RiExternalLinkFill size={20} className="mr-1" />
									Ver proyecto
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
					</div>
				))}
			</div>
			<div className="flex justify-center mt-8">
				<button
					onClick={toggleShowProjects}
					className="text-white px-8 py-2 rounded-md border bg-tertiary-dark border-tertiary-dark hover:text-tertiary-dark hover:bg-transparent hover:border-tertiary-dark font-medium"
				>
					{showAllProjects ? 'Ver menos' : 'Ver más proyectos'}
				</button>
			</div>
		</section>
	)
}

export default Projects
