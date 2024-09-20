interface SeparatorSectionProps {
	title?: string
	paragraph?: string
	backgroundImage?: string
	className?: string
	height?: string
}

const SeparatorSection: React.FC<SeparatorSectionProps> = ({ title, paragraph, backgroundImage, className, height = "h-[400px]" }) => {
	const sectionStyle: React.CSSProperties = {
		backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat'
	}

	return (
		<section className={`flex justify-center items-center ${height} ${className}`} style={sectionStyle}>
			<div className="max-w-screen-lg px-4">
				<h2 className="text-4xl sm:text-[40px] font-medium font-raleway text-center">{title}</h2>
				<p className="text-xl sm:text-lg text-center py-4">{paragraph}</p>
			</div>
		</section>
	)
}

export default SeparatorSection
