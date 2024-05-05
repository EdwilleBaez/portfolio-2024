import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import useScrollDirection from "../utils/getScrollDirection";

const menuItems = [
  { label: "Inicio", href: "#introduction" },
  { label: "Sobre mi", href: "#about-me" },
  { label: "Proyectos", href: "#projects" },
  { label: "Nosotros", href: "#" },
  { label: "Habilidades", href: "#" },
  { label: "Educación", href: "#" },
];

const Navbar = () => {
  const scrollDirection = useScrollDirection();

  console.log(scrollDirection)
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    if (currentTarget) { // Verificar si currentTarget no es null ni undefined
        const targetId = currentTarget.getAttribute('href')?.substring(1); // Eliminar el '#' del href
        if (targetId) { // Verificar si targetId no es null ni undefined
            const targetElement = document.getElementById(targetId);
            if (targetElement) { // Verificar si targetElement no es null ni undefined
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
};

  

  return (
    <nav className={`fixed top-0 w-full z-10 bg-white font-raleway font-medium content-center transform duration-500 ease-in-out ${scrollDirection === "up" ? 'h-36' : 'h-16'}`}>
      <div className="w-4/6 mx-auto">
        {scrollDirection === "up"  && <div className="flex items-center">
          <p className="text-black p-2 text-lg">Edwille Báez</p>
          <HiBriefcase />
        </div>
        }
        <div className={`max-w-7xl mx-auto transition duration-500 ease-in-out ${scrollDirection === "up" ? 'border-t-[1px] border-black' : ''}`}>
          <div className="flex justify-between h-16">
            <div className="w-full flex justify-between items-center">
              <div className="sm:flex gap-3">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={handleClick}
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-[12px] tracking-[1px] text-black hover:border-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
