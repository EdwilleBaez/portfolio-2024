import { useState, useEffect, useRef } from 'react'
import { GrMenu } from 'react-icons/gr'

type MenuItem = {
	label: string
	href: string
}

type DropdownMenuProps = {
	options: MenuItem[]
}

const DropdownMenu = ({ options }: DropdownMenuProps) => {

	const onScroll = window.scrollY;


	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setIsOpen(false)
	}, [onScroll])

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		window.addEventListener('resize', handleResize)

		return () => {
			document.removeEventListener('click', handleClickOutside)
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const handleResize = () => {
		setIsOpen(false)
	}

	return (
		<div className="relative" ref={dropdownRef}>
			<button onClick={toggleMenu}  className="text-xl text-gray-600 focus:outline-none">
				<GrMenu />{' '}
			</button>
				<div onClick={() => setIsOpen(false)} className={`absolute right-0 mt-2 py-4 w-44 bg-white border border-gray-300 text-center rounded shadow-lg overflow-hidden duration-200 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-10px] opacity-0'}`}>
					{options.map((option, index) => (
						<a key={index} href={option.href} className="block px-4 py-2 text-base tracking-[1px] text-black hover:bg-gray-100">
							{option.label}
						</a>
					))}
				</div>
		</div>
	)
}

export default DropdownMenu
