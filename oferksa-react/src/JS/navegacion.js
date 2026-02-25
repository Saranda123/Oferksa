import { useEffect } from 'react';

function useFixedNavigation() {
  useEffect(() => {
    const navegacion = document.querySelector('.navegacion') || document.querySelector('.nav-bg');
    const referencia = document.querySelector('.questionario') || document.querySelector('main');

    if (!navegacion || !referencia) {
      return undefined;
    }

    navegacion.classList.add('navegacion');

    const handleScroll = () => {
      if (referencia.getBoundingClientRect().bottom < 1) {
        navegacion.classList.add('fijo');
      } else {
        navegacion.classList.remove('fijo');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}

export default useFixedNavigation;
