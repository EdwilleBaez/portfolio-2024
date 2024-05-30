import useScrollDirection from "../utils/getScrollDirection";
const HeroSection = () => {
  const scrollDirection = useScrollDirection();
  return (
    <section
      className={`align-items-stretch h-[calc(100vh-75px)] sm:h-[calc(100vh-140px)] w-full transform duration-500 ease-in-out ${
        scrollDirection === "up" ? "mt-16 sm:mt-32" : "mt-8 sm:mt-14"
      }`}
    >
      <div className="w-full h-[calc(100vh-75px)] sm:h-[calc(100vh-140px)]  flex justify-center items-center text-center border-primary border-[30px] sm:border-[50px]">
        <div className="p-3 flex md:justify-end">

          <div className="md:w-1/2">
          <h4 className="text-xl sm:text-base font-light">Hola, soy</h4>
          <h1 className="text-detail-color font-shettricka text-[50px]">
            Nathaly Trinidad 
          </h1>
          <h2 className="text-base font-light">Dedicada del cine con experiencia en asistencia de producción y maquillaje.</h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
