import ProyectoItems from './ProyectosItems';

export default function Proyectos() {
    const proyectos = [
      {
        imageUrl: "/assets/n8n.png",
        title: "N8N",
        description: "Desarollo de flujos de automatización con N8N y su integración con distintas herramientas para mejorar la eficiencia en diferentes procesos. ",
        tags: ["N8N"]
      },
      {
        imageUrl: "/assets/aglaya.png",
        title: "Aglaya SPA",
        description: "Sistema administrativo para la empresa Aglaya, que permite gestionar los clientes, citas y servicios. Desarrollado con React, TypeScript, usando Tailwind para el diseño, usando Postgres como base de datos y Go para el backend. Implementado con Next.js.",
        tags: ["React", "TypeScript", "Tailwind"],
        gitHubUrl: "https://github.com/Fabriziomgh/aglaya"
      },
      {
        imageUrl: "/assets/arestro.png",
        title: "AppRestro",
        description: "Aplicación movil, que permite ver y reservar restaurantes, al igual que ver los menus y los platos, con la posibilidad de ordenar por delivery. Desarrollado con Flutter.",
        tags: ["Flutter", "Dart"],
        gitHubUrl: "https://github.com/ORDRafael/ARestro"
      },
      {
        imageUrl: "/assets/besser.png",
        title: "Besser Solutions",
        description: "Aplicación movil para la empresa Besser solutions para gestionar el saldo del cliente, verificar el estado del servicio asi como historial de pagos, transferencias y facturas.",
        tags: ["Flutter", "Dart"]
      },
      {
        imageUrl: "/assets/zabbix.png",
        title: "Zabbix",
        description: "Elaboracion de plantillas para Zabbix, que permiten monitorear los servidores y los servicios de la empresa. Modificacion del codigo fuente para mejorar la funcionalidad.",
        tags: ["Zabbix", "PHP"]
      },
      {
        imageUrl: "/assets/callessierra.png",
        title: "Hospital Calle Sierra",
        description: "Aplicación web que permite gestionar usuarios, doctores, citas y servicios, asi como envio de recordatorio de citas por correo electronico.",
        tags: ["HTML", "CSS", "PHP", "MySQL", "SMTP"],
        gitHubUrl: "https://github.com/ORDRafael/calles-sierra"
      },
    ];
  
    return (
      <div className=' px-5 py-20'>
        <div className="flex justify-start mb-10">
          <h2 data-aos="fade-right" className='text-white text-3xl md:text-5xl font-medium'>Proyectos</h2>
        </div>
        
        <ul>
        {proyectos.map((proyecto, index) => (
          <li key={index}>
              <ProyectoItems 
                key={index}
                imagenUrl={proyecto.imageUrl}
                title={proyecto.title}
                description={proyecto.description}
                tags={proyecto.tags}
                gitHubUrl={proyecto.gitHubUrl}
              />
          </li>
        ))}

        </ul>
      </div>
    );
  }