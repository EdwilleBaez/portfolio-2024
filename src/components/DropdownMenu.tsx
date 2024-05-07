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
	const [isOpen, setIsOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [])

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="relative" ref={dropdownRef}>
			<button onClick={toggleMenu} className="text-xl text-gray-600 focus:outline-none">
				<GrMenu />{' '}
			</button>
			{isOpen && (
				<div onClick={() => setIsOpen(false)} className="absolute right-1/2 translate-x-1/2 mt-2 w-36 bg-white border border-gray-300 text-center rounded shadow-lg overflow-hidden duration-200">
					{options.map((option, index) => (
						<a key={index} href={option.href} className="block px-4 py-2 text-[12px] tracking-[1px] text-black hover:bg-gray-100">
							{option.label}
						</a>
					))}
				</div>
			)}
		</div>
	)
}

export default DropdownMenu
