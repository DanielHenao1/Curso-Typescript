// En TypeScript (TS), tanto type como interface se utilizan para definir tipos de datos personalizados, pero tienen algunas diferencias clave en cuanto a su funcionalidad y uso. Aquí te presento algunas de las diferencias más importantes entre type e interface:

// 1. Capacidad de extensión:

// interface: Las interfaces en TypeScript son abiertas para la extensión. Esto significa que puedes declarar una interfaz y luego extenderla en otros lugares del código sin tener que modificar la declaración original.

// type: Los tipos definidos con type son cerrados, lo que significa que no puedes extender un tipo definido con type una vez que ha sido creado. Cualquier intento de hacerlo generará un error.

// interface Persona {
//     nombre: string;
//     edad: number;
//   }

//   interface Empleado extends Persona {
//     puesto: string;
//   }

//   type Coche = {
//     marca: string;
//     modelo: string;
//   };

//   // Esto es válido
//   interface Estudiante extends Persona {
//     matricula: string;
//   }

//   // Esto generará un error
//   type Moto = Coche & { cilindrada: number };

// 2. Compatibilidad estructural:

// interface: Las interfaces en TypeScript utilizan la compatibilidad estructural, lo que significa que dos objetos son considerados compatibles si tienen la misma estructura, independientemente de si se han definido utilizando la misma interfaz o no.

// type: Los tipos definidos con type no se someten a la compatibilidad estructural. Para que dos tipos definidos con type sean compatibles, deben ser exactamente iguales en su estructura.

// interface Persona {
//     nombre: string;
//   }

//   type PersonaType = {
//     nombre: string;
//   };

//   const personaInterface: Persona = { nombre: 'Juan' };
//   const personaType: PersonaType = { nombre: 'Pedro' };

//   // Esto es válido debido a la compatibilidad estructural
//   personaInterface = personaType;

// 3. Propiedades opcionales:

// Tanto interface como type permiten definir propiedades opcionales añadiendo un ? después del nombre de la propiedad.

// interface Producto {
//     nombre: string;
//     precio?: number; // Propiedad opcional
//   }

//   type Cliente = {
//     nombre: string;
//     edad?: number; // Propiedad opcional
//   };

// 4. Declaración de uniones de tipos:

// type permite declarar uniones de tipos utilizando el operador |, lo que puede ser útil para combinar varios tipos en uno.

// type Resultado = string | number;

// 5. Composición de tipos:

// type permite crear tipos mediante la composición de otros tipos, lo que es útil para crear tipos más complejos.

// type Coordenada = { x: number; y: number };
// type Vector = Coordenada & { longitud: number };

// En general, interface es más adecuado para definir la forma de objetos y estructuras de datos, especialmente cuando se trata de definir contratos que deben ser implementados por clases o tipos concretos. Por otro lado, type es más versátil y puede utilizarse para una variedad de propósitos, incluida la creación de tipos de datos complejos y la manipulación de tipos existentes mediante uniones, intersecciones y otros operadores de tipo. La elección entre interface y type depende de las necesidades específicas de tu proyecto y de tu estilo de programación.
