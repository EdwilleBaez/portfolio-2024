import { useState, useEffect } from 'react'
import { RiExternalLinkFill } from 'react-icons/ri'

const Projects = () => {
	const myProjects = [
		{
			id: 'entre-arena-y-la-santisima-cruz',
			title: 'Entre arena y la santísima cruz',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Documental',
			videoLink: 'https://www.youtube.com/watch?v=gGdhnIGIEic&ab_channel=Magu%C3%A1Cinema',
			image: '/assets/p4/img5.jpeg',
			badges: ['Astistencia de producción']
		},
		{
			id: 'las-de-juan-luis-guerra',
			title: 'Las de Juan Luis Guerra',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Video Musical',
			videoLink: 'https://www.youtube.com/watch?v=Emm6tJa-yUs&ab_channel=LuisSegura',
			image: '/assets/proyecto1.png',
			badges: ['Astistencia de vestuario']
		},
		{
			id: 'la-ultima-vez',
			title: 'La última vez',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Video Musical',
			videoLink: 'https://www.youtube.com/watch?v=l5N64TKCsyw&ab_channel=AljadaquiOficial',
			image: '/assets/musicales/img2-m2.jpeg',
			badges: ['Astistencia de casting']
		},
		{
			id: 'buenos-negocios',
			title: 'Buenos negocios',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Cortometraje',
			videoLink: 'https://youtu.be/VBp1Qj299JM?si=7WkKaVMSXnMXoI8G',
			image: '/assets/proyecto2.png',
			badges: ['Dirección']
		},
		{
			id: 'psicosis',
			title: 'PSICOSIS',
			subtitle: 'CRUD completo en inglés y español',
			description: 'Cortometraje',
			videoLink: 'https://www.youtube.com/watch?v=LqmXYSzMt6g&ab_channel=TobyCastillo',
			image: '/assets/proyecto3.png',
			badges: ['Dirección']
		},
		{
			id: 'spot-publicitario',
			title: 'Spot publicitario',
			subtitle: 'Aquí aprendí sobre React Router y Context',
			description: 'Comercial',
			githubLink: 'https://www.youtube.com/watch?v=5yQBTLSWha8&ab_channel=Josu%C3%A9ReyesPresenta',
			videoLink: 'https://beaty-appointment-manager.netlify.app',
			image: '/assets/proyecto4.png',
			badges: ['Vestuario', 'Maquillaje']
		},
		{
			id: 'realidad-virtual',
			title: 'Realidad virtual',
			subtitle: 'Mis inicios en la maquetación web',
			description: 'Cortometraje',
			videoLink: 'https://www.youtube.com/watch?v=E-F2IHAMX_k&ab_channel=TobyCastillo',
			image: '/assets/proyecto5.png',
			badges: ['Dirección', 'Actuación']
		},
		{
			id: 'caza-mitos',
			title: 'Caza mitos',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Cortometraje',
			videoLink: 'https://www.youtube.com/watch?v=kQrbaohcc4k&ab_channel=ChristopherRodriguezBueno',
			image: '/assets/caza-mitos.png',
			badges: ['Actuación']
		},
		{
			id: 'navidad',
			title: 'Navidad',
			subtitle: 'Subtítulo del Proyecto 1',
			description: 'Cortometraje',
			videoLink: 'https://www.youtube.com/watch?v=yppFjHuiST8&ab_channel=MayelinOta%C3%B1ezGuzman',
			image: '/assets/navidad.png',
			badges: ['Actuación']
		}
	]

	const [showAllProjects, setShowAllProjects] = useState(false)
	const [projectsToShow, setProjectsToShow] = useState(3)

	// Ajusta el número de proyectos a mostrar según el tamaño de la ventana
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 640 && window.innerWidth < 1024) {
				// Para pantallas sm (640px a 1024px), mostrar 4 proyectos
				setProjectsToShow(4)
			} else if (window.innerWidth >= 1024) {
				// Para pantallas lg o más grandes, mostrar 3 proyectos por defecto
				setProjectsToShow(3)
			} else {
				// Para pantallas más pequeñas que sm, mostrar solo 3 proyectos
				setProjectsToShow(3)
			}
		}

		// Inicializar el número correcto de proyectos al montar el componente
		handleResize()

		// Agregar event listener para redimensionar
		window.addEventListener('resize', handleResize)

		// Limpiar event listener al desmontar el componente
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const toggleShowProjects = () => {
		const projectsSection = document.getElementById('projects')
	
		// Si se colapsan los proyectos (cuando se muestra menos)
		if (showAllProjects && projectsSection) {
			const offset = -140
			const sectionPosition = projectsSection.getBoundingClientRect().top + window.scrollY + offset
			window.scrollTo({ top: sectionPosition })
		}
	
		// Alternar visibilidad de los proyectos
		setShowAllProjects(!showAllProjects)
	}
	

	// Determina la cantidad de proyectos a mostrar según el estado y tamaño de pantalla
	const visibleProjects = showAllProjects ? myProjects : myProjects.slice(0, projectsToShow)

	return (
		<section id="projects" className="w-full mx-auto p-12 bg-gray-100">
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{visibleProjects.map((project) => (
					<div
						key={`project-${project.id}`}
						className={`badge-container relative overflow-hidden project-card bg-white rounded-lg shadow-md flex flex-col ${project.id}`}
					>
						<img src={project.image} alt={project.title} className="w-auto h-[226px] object-cover" />
						<div className="project-content p-8 pt-4">
							<h2 className="text-xl text-center font-semibold mb-2">{project.title}</h2>
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
