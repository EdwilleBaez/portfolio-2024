import useScrollDirection from "../utils/getScrollDirection";
const HeroSection = () => {
  const scrollDirection = useScrollDirection();
  return (
    <section
      className={`align-items-stretch h-[calc(100vh-75px)] sm:h-[calc(100vh-20px)] transform duration-500 ease-in-out ${
        scrollDirection === "up" ? "mt-20 sm:mt-36" : "mt-10 sm:mt-16"
      }`}
    >
      <div className="w-full h-[calc(100vh-75px)] sm:h-[calc(100vh-20px)]  flex justify-center items-center text-center border-primary border-[30px] sm:border-[60px]">
        <div className="p-3">
          <h4 className="text-2xl md:4xl font-light">Hola, soy</h4>

          <h1 className="text-tertiary font-shettricka text-[80px] md:text-[85px]">
            Edwille Báez
          </h1>
          <h2 className="text-2xl md:4xl font-light">y desarrollo óptimos sitios web</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
