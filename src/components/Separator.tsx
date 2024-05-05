interface SeparatorSectionProps {
    title: string;
    paragraph: string;
  }
  
  const SeparatorSection: React.FC<SeparatorSectionProps> = ({ title, paragraph }) => {
    return (
      <section className="separator-section content-center h-[400px]">
        <div className="max-w-screen-lg mx-auto px-4">
          <h2 className="text-[40px] font-medium font-raleway text-center">{title}</h2>
          <p className="text-lg text-center  mt-4">{paragraph}</p>
        </div>
      </section>
    );
  };
  
  export default SeparatorSection;
  