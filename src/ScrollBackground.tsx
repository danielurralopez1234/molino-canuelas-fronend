import { useEffect } from 'react';

function ScrollBackground() {
  useEffect(() => {
    const rootElement = document.getElementById('root') as any;
    const svgElement = document.querySelector('#root svg') as any;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const backgroundColor = `hsl(60, 100%, ${100 - scrollPercentage}%)`; // Cambiar el color de fondo según el porcentaje de desplazamiento

      rootElement.style.backgroundColor = backgroundColor;
      svgElement.style.backgroundColor = backgroundColor;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}

export default ScrollBackground;
