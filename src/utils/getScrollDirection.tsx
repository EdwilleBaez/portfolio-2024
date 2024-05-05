import { useEffect, useState } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - prevScrollY;
      
      // Establecer un umbral mínimo de cambio en el desplazamiento
      const scrollThreshold = 50;
      
      // Verificar si el cambio en el desplazamiento supera el umbral
      if (Math.abs(deltaY) > scrollThreshold) {
        const direction = deltaY > 0 ? 'down' : 'up';
        setScrollDirection(direction);
        setPrevScrollY(currentScrollY);
      }
    };

    console.log("y",prevScrollY)

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return scrollDirection;
};

export default useScrollDirection;
