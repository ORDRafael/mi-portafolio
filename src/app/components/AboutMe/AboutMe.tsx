'use client';
import AboutMeItems from "./AboutMeItems";

const aboutMe = [
    {
    imagenUrl: "ajfniejgene;wr",
    title: "Hola, soy Rafael",
    description: "Soy Rafael, un programador con experiencia en desarrollo de software. Me especializo en el desarrollo de aplicaciones web y móviles, y tengo un fuerte compromiso con la calidad y el rendimiento de mis proyectos. Manejo tecnologías como React, PHP, Flutter, n8n y más. Estoy disponible para ayudarte en tus proyectos. Desarrollo scripts, apps moviles y mantenimiento de las mismas. Me centro en la creacion de soluciones eficientes y escalables para las necesidades del cliente."
},
]

function AboutMe() {
    return (
        <div>
            <AboutMeItems 
            imageUrl={aboutMe[0].imagenUrl} 
            title={aboutMe[0].title}
            description={aboutMe[0].description} />
        </div>
    );
}

export default AboutMe;