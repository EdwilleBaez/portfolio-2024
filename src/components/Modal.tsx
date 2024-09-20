import React, { useEffect, useRef } from 'react'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const scrollY = useRef<number>(0)

	useEffect(() => {
		if (isOpen) {
			// Guarda la posición del scroll actual
			scrollY.current = window.scrollY

			// Bloquea el scroll del cuerpo
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY.current}px`
			document.body.style.width = '100%'
			document.body.style.overflowY = 'scroll'
		} else {
			// Restaura el scroll del cuerpo y su posición
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.width = ''
			document.body.style.overflowY = ''
			window.scrollTo(0, scrollY.current)
		}

		// Limpieza al desmontar el componente o si isOpen cambia
		return () => {
			if (isOpen) {
				document.body.style.position = ''
				document.body.style.top = ''
				document.body.style.width = ''
				document.body.style.overflowY = ''
				window.scrollTo(0, scrollY.current)
			}
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30" onClick={onClose}>
			<div className="p-4 rounded h-5/6 relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
				{onClose && (
					<button
						onClick={onClose}
						className="absolute top-6 right-7 px-2.5 py-1 z-50 bg-black/50 rounded-full text-white/80 hover:text-white text-xl"
					>
						&#10006;
					</button>
				)}
				{children}
			</div>
		</div>
	)
}

export default Modal
