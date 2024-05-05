import { useEffect, useState } from "react";
import phrases from "../data/phrases.json";
const Phrase = () => {
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(0);

  console.log(img);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * phrases.length));
    setImg(Math.floor(Math.random() * 6));
  }, []);

  const nextPhrase = () => {
    setIndex(Math.floor(Math.random() * phrases.length));
    setImg(Math.floor(Math.random() * 6));
  };

  return (
    <div>
      <section className="flex justify-center items-center h-screen bg-primary">
        <div className="w-1/3 flex flex-col justify-center mr-20">
          <p className="text-lg text-center mb-6">{`"${phrases[index].phrase}"`}</p>
          <h3 className="text-xl text-center mb-4">{phrases[index].author}</h3>
          <button className="underline" onClick={nextPhrase}>
            Obtén una nueva frase
          </button>
        </div>
        <img
          className="w-[460px] h-[320px] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.75)]"
          src={`/src/assets/img-${img}.jpg`}
          alt="Imagen"
        />
      </section>
    </div>
  );
};

export default Phrase;
