import useScrollDirection from '../utils/getScrollDirection';
const HeroSection = () => {

  const scrollDirection = useScrollDirection();
    return (
      <section className={`align-items-stretch h-screen transform duration-500 ease-in-out ${scrollDirection === "up" ? "mt-36" : "mt-16"}`}>
        <div className='w-full h-full flex justify-center items-center border-primary border-[80px]'>
          <div>
            <h1>Hola, soy Edwille Báez</h1>
            <h2>Desarrollo óptimos sitios web</h2>
          </div>
        </div>
      </section>
    );
  }
  
  export default HeroSection;
  