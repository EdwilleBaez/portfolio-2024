import { useEffect, useState } from "react";
import phrases from "../data/phrases.json";
const Phrase = () => {
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(1);

  console.log(img);

  useEffect(() => {
    setIndex(Math.floor(Math.random() * phrases.length));
    setImg(Math.floor(Math.random() * 8) + 1);
  }, []);

console.log("img",img)
  const nextPhrase = () => {
    setIndex(Math.floor(Math.random() * phrases.length));
    setImg(Math.floor(Math.random() * 6));
  };

  return (
    <div>
      <section className="flex justify-center items-center content-center h-screen bg-primary">
        <div className="p-8 md:w-1/3 flex flex-col justify-center md:mr-20">
          <p className="text|-2xl sm:text-lg text-center mb-6">{`"${phrases[index].phrase}"`}</p>
          <h3 className="text-xl text-center mb-4">{phrases[index].author}</h3>
          <button className="underline text-xl sm:text-base" onClick={nextPhrase}>
            Obtén una nueva frase
          </button>
        </div>
        <img
          className="hidden sm:block w-[460px] h-[320px] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.75)]"
          src={`/assets/img-${img}.jpg`}
          onError={() => setImg(0)}
          alt="Imagen"
        />
      </section>
    </div>
  );
};

export default Phrase;
