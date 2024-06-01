import useScrollDirection from "../utils/getScrollDirection";
const HeroSection = () => {
  const scrollDirection = useScrollDirection();
  return (
    <section
      className={`align-items-stretch h-[calc(100vh-75px)] sm:h-[calc(100vh-140px)] transform duration-500 ease-in-out ${
        scrollDirection === "up" ? "mt-20 sm:mt-36" : "mt-10 sm:mt-16"
      }`}
    >
      <div className="w-full h-[calc(100vh-75px)] sm:h-[calc(100vh-140px)]  flex justify-center text-center border-primary border-[30px] sm:border-[50px]">
        <div className="p-3 mt-4 min-[450px]:mt-10 sm:mt-8 md:mt-20 lg:mt-10">
          <h4 className="text-xl md:hidden sm:text-xl lg:text-2xl font-light">Hola, soy</h4>
          <h1 className="font-shettricka text-[50px] sm:text-[60px] lg:text-[85px]">
            Nathaly Trinidad
          </h1>
          <h2 className="text-xl mt-52 min-[450px]:mt-0 sm:text-xl lg:text-2xl font-light">Dedicada del cine con experiencia en asistencia de producción y maquillaje.</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

