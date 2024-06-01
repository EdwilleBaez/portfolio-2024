import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { MdMailOutline } from 'react-icons/md'

const Footer = () => {
	return (
		<footer className="bg-black text-white text-[24px]">
			<div className="container mx-auto py-4">
				<p className="text-center text-base md:text-lg"> Mi corazón late al ritmo de las películas.</p>
				<p className="text-center text-base mb-4 md:text-lg"> ¡Creemos algo increíble!</p>
				<div className="flex justify-center items-center gap-4 ">
					<a
						href="https://www.facebook.com/nathalicielo"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-icon before:content-['Facebook'] relative"
					>
						<FaFacebookF />
					</a>
					<a
						href="https://www.instagram.com/natalicielo/"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-icon before:content-['Instagram'] relative"
					>
						<FiInstagram />
					</a>
					<a
						href="mailto:ncielo@hotmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-icon before:content-['Email'] relative"
					>
						<MdMailOutline size={28} />
					</a>
					<a
						href="https://api.whatsapp.com/send/?phone=18099661289"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-icon before:content-['WhatsApp'] relative"
					>
						<FaWhatsapp size={27} />
					</a>
				</div>
					<p className="text-center text-sm mt-6 md:text-base">Creado por Edwille Báez 2024 &#169;</p>
			</div>
		</footer>
	)
}

export default Footer
