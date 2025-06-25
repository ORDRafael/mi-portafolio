'use client';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos/Proyectos';
import AboutMe from './components/AboutMe/AboutMe';
import Experiencia from './components/Experiencia/Experiencia';
import Contact from './components/Contact/Contact';

export default  function Home() {
  return(
    <div>
      <div className="flex justify-center sticky top-0 z-50">
        <Header/>
      </div>
      <section id='inicio' className='mt-15'><Inicio/></section>
      <section id='proyectos' className='mt-20'><Proyectos/></section>
      <section id='experiencia' className='mt-15'><Experiencia/></section>
      <section id='sobre-mi' className='mt-15 mb-50'><AboutMe/></section>
      <section id='contacto' className='mt-15 mb-50'><Contact/></section>
    </div>
  );
} 