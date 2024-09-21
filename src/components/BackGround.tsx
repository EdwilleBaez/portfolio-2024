import Welcome from '/assets/welcome.jpg';

const BackGround = () => {
	return (
		<div className="fixed z-[-1] left-0 right-0 h-screen overflow-hidden">
			<img
				className="absolute inset-0 w-full h-full object-cover object-[50%_50%] lg:object-[50%_40%] xl:object-[50%_36%]"
				src={Welcome}
				alt="Fondo"
			/>
		</div>
	);
}

export default BackGround;
