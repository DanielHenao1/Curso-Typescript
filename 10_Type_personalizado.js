/* // Types para unas de las tantas cosas que sirve es para typar objetos

// Este es el tipo de typado que vamos a manejar en los objetos que creemos
type Programador = {
    nombre: string;
    tecnologias: string[];
    experiencia: number;
  };
  
  // Creamos un objeto y como podemos ver tiene las condicines del tipado creado anteriormente
  let programador1: Programador = {
    nombre: "Daniel",
    tecnologias: ["HTML", "CSS", "JavaScript", "TypeScript"],
    experiencia: 5,
  };
  
  // Creamos otro objeto y si vemos al omitir el tipo de dato de experiencia nos arroja un error
  // Para solucionar ese error podriamos poner el signo( ?) en nuestro tipado inicial para ignore esa condicion en este caso experiencia?:
  // En caso de que el valor enviado sea diferente al tipado podemos (experiencia: number | null | string)
  let programador2: Programador = {
    nombre: "Daniel",
    tecnologias: ["HTML", "CSS", "JavaScript", "TypeScript"],
    experiencia: 5,
  };
  
 */