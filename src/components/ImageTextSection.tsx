import React from 'react'

interface ImageTextSectionProps {
	id?: string
	imageUrl: string
	title: string
	subtitle: string
	paragraphIndex: number
	bgColor: string
	imagePosition: 'left' | 'right'
}

const paragraphs = [
	{
		title: 'Objetivos personales',
		paragraph:
			'Puesto en palabras lindas y filosóficas, quiero  encontrar la armonía entre mi crecimiento personal, el servicio a los demás y la preservación del planeta. Sin embargo, cuando despojamos de toda floritura y nos adentramos en la esencia de lo que es, mi deseo más sincero es tan simple como universal: vivir plenamente, como cualquiera." Puesto en palabras llanas, a lo que me refiero es a vivir plenamente, como cualquiera.'
	},
	{
		title: 'Objetivos profesionales',
		paragraph:
			'Busco convertirme en un desarrollador web altamente competente, dominando habilidades técnicas de alto impacto, sin dejar nunca de enriquecer mis habilidades. Mi objetivo es formar parte de un equipo dinámico y talentoso donde enfrentemos desafíos significativos para contribuir al desarrollo de proyectos ambiciosos, e inspirar a otros en el camino.'
	},
	{
		title: 'Filosofía personal',
		paragraph:
			'Creo en vivir cada día con gratitud, apertura y propósito. Me esfuerzo por cultivar relaciones profundas y significativas, valorando la conexión humana por encima de todo. Busco aprender de cada experiencia, tanto de los momentos de alegría como de los desafíos, sabiendo que cada uno de ellos tiene algo importante que enseñarme y me comprometo a vivir en congruencia con mis valores en todo lo que hago.'
	},
	{
		title: 'Filosofía profesional',
		paragraph:
			'Creo firmemente en el poder del trabajo en equipo y en la valiosa oportunidad de aprender unos de otros. Creo en la creatividad y la diversidad de pensamiento como un método efectivo ante la resolución de problemas. Creo en la transparencia, la comunicación abierta y el respeto mutuo como pilares fundamentales de una colaboración exitosa. Creo que los errores son grandes lecciones y creo en ofrecer un trabajo de alta calidad.'
	}
]

const ImageTextSection: React.FC<ImageTextSectionProps> = ({
	id,
	imageUrl,
	title,
	subtitle,
	paragraphIndex,
	bgColor,
	imagePosition
}) => {
	return (
		<section id={id} className={`flex flex-col-reverse items-center justify-center sm:flex-row h-screen  ${bgColor}`}>
			{imagePosition === 'left' && (
				<img className="hidden h-full w-full sm:block sm:h-screen sm:w-1/2 object-cover" src={imageUrl} alt="Imagen" />
			)}
			<div className="lg:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left px-8 lg:p-20">
				<h2 className="text-5xl lg:text-4xl xl:text-5xl font-medium font-raleway">{title}</h2>
				<h3 className="text-2xl lg:text-xl">{subtitle}</h3>
				<p className="text-xl sm:text-[16px]">{paragraphs[paragraphIndex].paragraph}</p>
			</div>
			{imagePosition === 'right' && (
				<img className="hidden h-full w-full sm:block sm:h-screen sm:w-1/2 object-cover" src={imageUrl} alt="Imagen" />
			)}
		</section>
	)
}

export default ImageTextSection
