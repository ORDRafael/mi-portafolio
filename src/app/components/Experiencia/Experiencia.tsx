import React from 'react';
import ExperienciaItems from './ExperienciaItems';

export default function Experiencia(){

    const experiencia = [
        {
            timeline: "May 2024 - Feb 2025",
            title: "Besser Solutions",
            subtitle: "Programador junior",
            description: "Como parte del equipo, fui responsable del desarrollo de scripts avanzados en Python y Bash para la optimización de flujos de trabajo. Lideré la creación de una aplicación móvil con Flutter, abarcando desde la fase de diseño UI/UX en Figma hasta su implementación. Mis responsabilidades también incluyeron la adaptación y optimización de código fuente de sistemas existentes, el mantenimiento y depuración de aplicaciones internas críticas, y la gestión de configuraciones de usuario en diversos sistemas operativos (Linux, Windows, macOS), asegurando la operatividad y eficiencia."
        },
        {
            timeline: "Sep 2023 - Jan 2024",
            title: "Hospital Calle Sierra",
            subtitle: "Desarrollador",
            description: "Lideré el desarrollo de un sistema de gestión de usuarios, doctores y citas con recordatorios para un hospital. Durante 6 meses, trabajé directamente en las instalaciones para comprender a fondo los requerimientos y las necesidades operativas del equipo de ingeniería de turno. Este proyecto mejoró la eficiencia en la administración de pacientes y la comunicación interna."
        },
    ];

    return(
        <div className=' px-5 pt-20'>
                <div className="flex justify-start mb-10">
                  <h2 data-aos="fade-right" className='text-white text-5xl font-medium'>Experiencia</h2>
                </div>
                
                <ul>
                {experiencia.map((experiencia, index) => (
                  <li key={index}>
                      <ExperienciaItems 
                        key={index}
                        timeline={experiencia.timeline}
                        title={experiencia.title}
                        description={experiencia.description}
                      />
                  </li>
                ))}
        
                </ul>
              </div>
    );
}

