import React from 'react';

interface ImageTextSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  paragraph: string;
  bgColor: string;  
  imagePosition: 'left' | 'right';
}

const ImageTextSection: React.FC<ImageTextSectionProps> = ({ imageUrl, title, subtitle, paragraph, bgColor, imagePosition }) => {

  return (
    <section id="about-me" className={`flex h-screen ${bgColor}`}>
      {imagePosition === 'left' && (
        <img className="h-screen w-1/2 object-cover" src={imageUrl} alt="Imagen" />
      )}
      <div className="w-1/2 flex flex-col justify-center pl-20">
        <h2 className="text-3xl font-medium mb-4 font-raleway">{title}</h2>
        <h3 className="text-xl mb-4">{subtitle}</h3>
        <p className="text-lg">{paragraph}</p>
      </div>
      {imagePosition === 'right' && (
        <img className="h-screen w-1/2 object-cover" src={imageUrl} alt="Imagen" />
      )}
    </section>
  );
};

export default ImageTextSection;
