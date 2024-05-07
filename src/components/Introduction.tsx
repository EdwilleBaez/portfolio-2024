const Introduction = () => {
  return (
    <section
      id="introduction"
      className="about-me-section flex justify-center items-center h-screen bg-primary"
    >
      <div className="max-w-3xl text-center">
        <h2 className="text-[30px] p-2 sm:text-[60px] md:text-[70px] font-raleway font-medium mb-5">
          Sea bienvenido a mi Portafolio
        </h2>
        <h2 className="text-[16px] sm:text-xl mb-7">!Es genial tenerte aquí!</h2>
        <p className="text-sm sm:text-lg px-2 ">
          Estoy emocionada de compartir ideas y
          conocimientos contigo. Soy una desarrolladora web con experiencia, que
          siempre trata de mejorar y aprender. Disfruto mucho programando, tanto
          que lo hago los fines de semana como hobbie, de vez en cuando 😄.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
