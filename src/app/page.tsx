'use client';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Experiencia from './components/Experiencia';


export default  function Home() {
  return(
    <div>
      <div className="flex justify-center sticky top-0 z-50">
        <Header/>
      </div>
      <section id='inicio' className='mt-15'><Inicio/></section>
      <section id='proyectos' className='mt-20'><Proyectos/></section>
      <section id='experiencia' className='mt-15'><Experiencia/></section>
      <section id='contacto' className='mt-200'><Contacto/></section>
    </div>
  );
} 