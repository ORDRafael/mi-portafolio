import ProyectoItems from './ProyectosItems';

export default function Proyectos() {
    const proyectos = [
      {
        imageUrl: "/ruta/imagen1.jpg",
        title: "Aglaya SPA",
        description: "Sistema administrativo para la empresa Aglaya, que permite gestionar los clientes, citas y servicios. Desarrollado con React, TypeScript, usando Tailwind para el diseño, usando Postgres como base de datos y Go para el backend. Implementado con Next.js.",
        tags: ["React", "TypeScript", "Tailwind"]
      },
      {
        imageUrl: "/ruta/imagen2.jpg",
        title: "AppRestro",
        description: "Aplicación para la empresa AppRestro, que permite ver y reservar restaurantes, al igual que ver los menus y los platos, con la posibilidad de ordenar por delivery. Desarrollado con Flutter.",
        tags: ["Flutter", "Dart"]
      },
      {
        imageUrl: "/ruta/imagen2.jpg",
        title: "AppRestro",
        description: "Aplicación para la empresa AppRestro, que permite ver y reservar restaurantes, al igual que ver los menus y los platos, con la posibilidad de ordenar por delivery. Desarrollado con Flutter.",
        tags: ["Flutter", "Dart"]
      },
      {
        imageUrl: "/ruta/imagen2.jpg",
        title: "AppRestro",
        description: "Aplicación para la empresa AppRestro, que permite ver y reservar restaurantes, al igual que ver los menus y los platos, con la posibilidad de ordenar por delivery. Desarrollado con Flutter.",
        tags: ["Flutter", "Dart"]
      },
      {
        imageUrl: "/ruta/imagen2.jpg",
        title: "AppRestro",
        description: "Aplicación para la empresa AppRestro, que permite ver y reservar restaurantes, al igual que ver los menus y los platos, con la posibilidad de ordenar por delivery. Desarrollado con Flutter.",
        tags: ["Flutter", "Dart"]
      },
    ];
  
    return (
      <div className=' px-5 py-20'>
        <div className="flex justify-center mb-10">
          <h2 className='text-white text-5xl font-medium'>Proyectos</h2>
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
              />
          </li>
        ))}

        </ul>
      </div>
    );
  }