import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-[24px]">
      <div className="container mx-auto flex justify-center items-center gap-4">
        <a
          href="https://github.com/EdwilleBaez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/edwillebaez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:baezedwille@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMailOutline />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
