import useScrollDirection from '../utils/getScrollDirection'
const HeroSection = () => {
	const scrollDirection = useScrollDirection()
	return (
		<section
			className={`align-items-stretch h-[calc(100vh-75px)] sm:h-[calc(100vh-140px)] transform duration-500 ease-in-out ${
				scrollDirection === 'up' ? 'mt-20 sm:mt-36' : 'mt-10 sm:mt-16'
			}`}
		>
			<div className="w-full h-[calc(100vh-75px)] sm:h-[calc(100vh-140px)] flex justify-center text-center border-primary border-[30px] sm:border-[50px]">
				<div className="h-1/3 lg:h-1/2 flex items-end">
					<div className="flex flex-col">
						<div>
							<h1 className="font-shettricka text-[50px] sm:text-[60px] lg:text-[85px] xl:text-[100px]">
								Nathaly Trinidad
							</h1>
						</div>
						<h2 className="text-xl px-3 sm:text-xl lg:text-2xl xl:text-3xl font-light">
							Dedicada del cine con experiencia en asistencia de producción y maquillaje.
						</h2>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
