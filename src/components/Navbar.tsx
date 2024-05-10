import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiBriefcase } from 'react-icons/hi'
import useScrollDirection from '../utils/getScrollDirection'
import DropdownMenu from './DropdownMenu'

const menuItems = [
	{ label: 'Inicio', href: '#introduction' },
	{ label: 'Sobre mi', href: '#about-me' },
	{ label: 'Proyectos', href: '#projects' },
	{ label: 'Más sobre mi', href: '#more-about-me' },
	{ label: 'Habilidades', href: '#goals' }
]

const Navbar = () => {
	const scrollDirection = useScrollDirection()
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		const currentTarget = e.currentTarget
		if (currentTarget) {
			const targetId = currentTarget.getAttribute('href')?.substring(1)
			if (targetId) {
				const targetElement = document.getElementById(targetId)
				if (targetElement) {
					const margin = scrollDirection === 'up' ? 144 : 64
					const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - margin
					window.scrollTo({ top: targetPosition, behavior: 'smooth' })
				}
			}
		}
	}

	return (
		<nav
			className={`flex justify-center items-center fixed top-0 w-screen z-10 bg-white font-raleway font-medium content-center transform sm:duration-500 ease-in-out ${
				scrollDirection === 'up' ? 'h-20 sm:h-36' : 'h-10 sm:h-16'
			}`}
		>
			<div className="w-4/6">
				{scrollDirection === 'up' && (
					<div className="flex items-center">
						<p className="text-black p-2 text-lg">Edwille Báez</p>
						<HiBriefcase />
					</div>
				)}
				<div
					className={`max-w-7xl mx-auto transition sm:duration-500 ease-in-out ${
						scrollDirection === 'up' ? 'border-t-[1px] border-black' : ''
					}`}
				>
					<div className="w-full h-10 sm:h-16  flex justify-between items-center text-lg">
						<div className="gap-3 hidden md:block">
							{menuItems.map((item, index) => (
								<a
									key={index}
									href={item.href}
									onClick={handleClick}
									className="inline-flex items-center px-2 pt-1 border-b-2 border-transparent text-[12px] tracking-[1px] text-black hover:border-white min-w-max"
								>
									{item.label}
								</a>
							))}
						</div>
						<div className="flex gap-3 ml-5">
							<a
								href="https://github.com/EdwilleBaez"
								target="_blank"
								rel="noopener noreferrer"
								className="navbar-icon before:content-['Github'] relative"
							>
								<FaGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/edwillebaez/"
								target="_blank"
								rel="noopener noreferrer"
								className="navbar-icon before:content-['Linkedin'] relative"
							>
								<FaLinkedinIn />
							</a>
						</div>
						<div className="md:hidden">
							<DropdownMenu options={menuItems} />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
