import React from 'react'
import Carousel from './Carrousel'

interface ImageTextSectionProps {
	id?: string
	imageUrl: string | string[] // Puede ser un string (una imagen) o un array (carrusel)
	title: string
	subtitle: string
	paragraphIndex: number
	bgColor: string
	imagePosition: 'left' | 'right'
}

const paragraphs = [
	{
		title: 'Experiencia en Maquillaje y Vestuario',
		paragraph:
			'He desempeñado roles cruciales como maquillista y vestuarista, transformando personajes y creando atmósferas únicas. Con un ojo agudo para el detalle y una profunda comprensión de la narrativa visual, he trabajado en una amplia gama de proyectos, desde comerciales hasta cortometrajes.'
	},
	{
		title: 'Dirección de Cortometrajes',
		paragraph:
			'He dirigido cortometrajes, donde he podido dar vida a mi visión creativa. Mis trabajos como directora no solo cuentan historias, sino que también exploran temas profundos y conectan emocionalmente con la audiencia.'
	},
	{
		title: 'Interpretación y Actuación',
		paragraph:
			'Como actriz, he interpretado diversos personajes, sumergiéndome en historias emocionantes y desafiantes. Mi habilidad para adaptarme a diferentes roles me ha permitido participar en producciones variadas, enriqueciendo cada proyecto con mi versatilidad.'
	},
	{
		title: 'Filosofía y Pasión',
		paragraph:
			'Estoy profundamente apasionada por el arte de contar historias. Cada proyecto es una oportunidad para inspirar y conectar con el público de manera significativa. Mi objetivo es seguir explorando nuevas narrativas y colaboraciones creativas que dejen una huella duradera.'
	},
	{
		title: 'Dembow',
		paragraph:
			'En este maravilloso proyecto, tuve la oportunidad de trabajar en producción. Trabajar en producciones para conciertos es una experiencia un tanto diferente a trabajar en un metraje, pero desempeñar una función sigue siendo igual de retador, exigente y maravilloso a la vez.'
	},
	{
		title: 'El fin de la historia',
		paragraph:
			'En este maravilloso proyecto, tuve la oportunidad de trabajar con grandes talentos como los aquí mencionados. Trabajar en un proyecto con grandes talentos demandó mucho esfuerzo, logrando grandes resultados. La película se encuentra en postproducción.'
	},
	{	
		title: 'El olor de las nubes',
		paragraph:
			'En esta oportunidad, trabajé como coordinadora de casting, donde tuve más responsabilidades y retos de los cuales aprendí y pude aplicar parte del conocimiento adquirido en las producciones pasadas. *El olor de las nubes* es una película en blanco y negro con una historia llena de arte, amor y obstáculos que desarrollan la trama.'
	},
	{
		title: 'Entre la arena y la santísima cruz',
		paragraph:
		'Es un documental que muestra las corridas de toros realizadas en República Dominicana. Mi trabajo en este metraje como asistente de producción, en un proyecto de crew mínimo, me llevó a crecer y conocer otros departamentos, experiencias que me acompañarán para aplicarlas en futuros proyectos. Este proyecto se encuentra en postproducción.'
	}
]

// Función para renderizar la imagen o el carrusel
const renderImageOrCarousel = (imageUrl: string | string[]) => {
	if (typeof imageUrl === 'string') {
		return <img className="h-full w-screen sm:h-screen sm:w-1/2 object-cover" src={imageUrl} alt="Imagen" />
	} else {
		return (
			<div className="h-full w-screen sm:h-screen sm:w-1/2 object-cover">
				<Carousel images={imageUrl} initialIndex={0} />
			</div>
		)
	}
}

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
		<section id={id} className={`flex flex-col-reverse items-center justify-center md:flex-row h-full lg:h-screen ${bgColor}`}>
			{imagePosition === 'left' && renderImageOrCarousel(imageUrl)}
			
			<div className="h-full w-full md:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left p-10">
				<h2 className="text-5xl xl:text-5xl font-medium font-raleway">{title}</h2>
				<h3 className="text-2xl">{subtitle}</h3>
				<p className="text-xl">{paragraphs[paragraphIndex].paragraph}</p>
			</div>

			{imagePosition === 'right' && renderImageOrCarousel(imageUrl)}
		</section>
	)
}

export default ImageTextSection
