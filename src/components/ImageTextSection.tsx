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
		title: 'Experiencia en Maquillaje y Vestuario',
		paragraph:
			'He desempeñado roles cruciales como maquillista y vestuarista, transformando personajes y creando atmósferas únicas. Con un ojo agudo para el detalle y una profunda comprensión de la narrativa visual, he trabajado en una amplia gama de proyectos, desde comerciales hasta cortometrajes'
	},
	{
		title: 'Dirección de Cortometrajes',
		paragraph:
		'He dirigido cortometrajes, donde he podido dar vida a mi visión creativa. Mis trabajos como directora no solo cuentan historias, sino que también exploran temas profundos y conectan emocionalmente con la audiencia'
	},
	{
		title: 'Interpretación y Actuación',
		paragraph:
			'Como actriz, he interpretado diversos personajes, sumergiéndome en historias emocionantes y desafiantes. Mi habilidad para adaptarme a diferentes roles me ha permitido participar en producciones variadas, enriqueciendo cada proyecto con mi versatilidad'
	},
	{
		title: 'Filosofía y Pasión',
		paragraph:
			'Estoy profundamente apasionada por el arte de contar historias. Cada proyecto es una oportunidad para inspirar y conectar con el público de manera significativa. Mi objetivo es seguir explorando nuevas narrativas y colaboraciones creativas que dejen una huella duradera.'
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
