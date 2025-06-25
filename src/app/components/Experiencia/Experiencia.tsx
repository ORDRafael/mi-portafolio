import React from 'react';
import ExperienciaItems from './ExperienciaItems';

export default function Experiencia(){

    const experiencia = [
        {
            timeline: "May 2024 - Feb 2025",
            title: "Besser Solutions",
            subtitle: "Programador junior",
            description: "Desarrollé scripts, apps moviles y mantenimiento de las mismas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Desarrollé scripts, apps moviles y mantenimiento de las mismas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Desarrollé scripts, apps moviles y mantenimiento de las mismas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
        {
            timeline: "Sep 2023 - Jan 2024",
            title: "Hospital Calle Sierra",
            subtitle: "Desarrollador",
            description: "Desarrollo de sistema administrativo scripts, apps moviles y mantenimiento de las mismas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Desarrollé scripts, apps moviles y mantenimiento de las mismas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Desarrollé scripts, apps moviles y mantenimiento de las mismas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        },
    ];

    return(
        <div className=' px-5 py-20'>
                <div className="flex justify-center mb-10">
                  <h2 className='text-white text-5xl font-medium'>Experiencia</h2>
                </div>
                
                <ul>
                {experiencia.map((experiencia, index) => (
                  <li key={index}>
                      <ExperienciaItems 
                        key={index}
                        timeline={experiencia.timeline}
                        title={experiencia.title}
                        subtitle={experiencia.subtitle}
                        description={experiencia.description}
                      />
                  </li>
                ))}
        
                </ul>
              </div>
    );
}

