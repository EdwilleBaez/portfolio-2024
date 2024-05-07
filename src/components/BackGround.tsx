import Welcome from "/assets/welcome.jpg";
const BackGround = () => {
  return (
    <div className="hero">
        <div className="hero-background">
      <img
        className="hero-background-image"
        src={Welcome}
        alt="Fondo del héroe"
      />
    </div>
    </div>
  );
};

export default BackGround;
