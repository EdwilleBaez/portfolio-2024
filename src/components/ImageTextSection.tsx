import React from 'react';

interface ImageTextSectionProps {
  id?: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  paragraphIndex: number;
  bgColor: string;  
  imagePosition: 'left' | 'right';
}

const paragraphs = [
  {
    title: 'Objetivos profesionales',
    paragraph: "Como objetivo, puesto en palabras lindas y filosoficas, quiero encontrar un equilibrio entre mi crecimiento personal, ayudar a los demás y cuidar del medio ambiente. Pero en palabras llanas, solo quiero vivir."
  },
  {
    title: 'Objetivos personales',
    paragraph: "Creo en trabajar en equipo y en la importancia de aprender de los demás Valoramos la creatividad y la efectividad en igual medida aquí. Me enorgullece contribuir con ideas frescas y métodos eficientes para llevar nuestros proyectos al siguiente nivel. Estoy aquí para colaborar contigo y hacer que nuestros proyectos sean un éxito rotundo. ¡Creemos algo increíble!"
  },
  {
    title: 'Filosofia profesional',
    paragraph: "Como objetivo, puesto en palabras lindas y filosoficas, quiero encontrar un equilibrio entre mi crecimiento personal, ayudar a los demás y cuidar del medio ambiente. Pero en palabras llanas, solo quiero vivir."
  },
  {
    title: 'Filosofia personal',
    paragraph: "Creo en trabajar en equipo y en la importancia de aprender de los demás Valoramos la creatividad y la efectividad en igual medida aquí. Me enorgullece contribuir con ideas frescas y métodos eficientes para llevar nuestros proyectos al siguiente nivel. Estoy aquí para colaborar contigo y hacer que nuestros proyectos sean un éxito rotundo. ¡Creemos algo increíble!"
  },
]

const ImageTextSection: React.FC<ImageTextSectionProps> = ({id, imageUrl, title, subtitle, paragraphIndex, bgColor, imagePosition }) => {

  return (
    <section id={id} className={`flex flex-col-reverse items-center justify-center sm:flex-row h-screen  ${bgColor}`}>
      {imagePosition === 'left' && (
        <img className="hidden h-full w-full sm:block sm:h-screen sm:w-1/2 object-cover" src={imageUrl} alt="Imagen" />
      )}
      <div className="lg:w-1/2 flex flex-col justify-center gap-6 text-center md:text-left p-8 lg:p-20">
        <h2 className="text-5xl lg:text-4xl xl:text-5xl font-medium font-raleway">{title}</h2>
        <h3 className="text-3xl lg:text-xl">{subtitle}</h3>
        <p className="text-xl lg:text-l">{paragraphs[paragraphIndex].paragraph}</p>
      </div>
      {imagePosition === 'right' && (
          <img className="hidden h-full w-full sm:block sm:h-screen sm:w-1/2 object-cover" src={imageUrl} alt="Imagen" />
      )}
    </section>
  );
};

export default ImageTextSection;
