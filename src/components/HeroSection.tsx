import useScrollDirection from "../utils/getScrollDirection";
const HeroSection = () => {
  const scrollDirection = useScrollDirection();
  return (
    <section
      className={`align-items-stretch h-screen transform duration-500 ease-in-out ${
        scrollDirection === "up" ? "mt-20 sm:mt-36" : "mt-10 sm:mt-16"
      }`}
    >
      <div className="w-full h-full flex justify-center items-center text-center border-primary border-[40px] sm:border-[80px]">
        <div className="p-3">
          <h2 className="text-[12px] md:text-[16px]">Hola, soy</h2>

          <h1 className="text-tertiary font-shettricka text-[40px] md:text-[85px]">
            Edwille Báez
          </h1>
          <h2 className="text-[12px] md:text-[16px]">y desarrollo óptimos sitios web</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
