import { useEffect, useState, useRef } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const prevScrollYRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollYRef.current;
      
      // Verificar si el cambio en el desplazamiento supera un umbral mínimo
      const scrollThreshold = 100;
      
      if (Math.abs(deltaY) > scrollThreshold) {
        const direction = deltaY > 0 ? 'down' : 'up';
        setScrollDirection(direction);
        prevScrollYRef.current = currentScrollY; // Actualizar el valor del ref
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Sin dependencias para que solo se monte una vez

  return scrollDirection;
};

export default useScrollDirection;