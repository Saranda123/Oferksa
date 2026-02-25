import { useEffect } from 'react';

function MiComponente() {
  useEffect(() => {
    // 1. Definir el observer dentro del efecto
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Element is in view:', entry.target);
          // Aquí puedes añadir clases de animación, ej: entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 }); // Opcional: se activa cuando el 10% es visible

    // 2. Seleccionar los elementos (asegúrate de que las clases existan en tu JSX)
    const servicios = document.querySelectorAll('.servicios .servicio');
    const questionario = document.querySelector('.questionario .questionario-info');

    // 3. Empezar a observar
    servicios.forEach(el => observer.observe(el));
    if (questionario) observer.observe(questionario);

    // 4. LIMPIEZA: Muy importante en React para evitar fugas de memoria
    return () => {
      observer.disconnect();
    };
  }, []); // [] asegura que esto solo se ejecute una vez al montar el componente

  return ( questionario.jsx );
}
