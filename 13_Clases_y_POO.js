// class Pelicula {
//     // Propiedades de la clase
//     nombre: string;
//     protagonistas: string[];
//     actores: string[];

//     // Constructor
//     constructor(nombre: string, protagonistas: string[], actores: string[]) {
//       this.nombre = nombre;
//       this.protagonistas = protagonistas;
//       this.actores = actores;
//     }

//     // Método de la clase
//     proyectarEnCine() {
//       console.log(
//         `Pelicula ${this.nombre}, Actriz ${this.protagonistas[1]}, Protagonistas ${this.actores[1]}  `
//       );
//     }
//   }

//   // Crear una instancia de la clase Persona

//   // const act = ["Juan", "Antonella"];
//   // const prot = ["Samuel", "Isabella"];
//   const pelicula = new Pelicula(
//     " Bold",
//     ["Juan", "Antonella"],
//     ["Samuel", "Isabella"]
//   );

//   // Llamar al método saludar
//   pelicula.proyectarEnCine();

//   /* **************************** Otra forma de instanciar ********************************* */

//   // Si creo la clase como strings nomales las puedo instanciar asi

//   class Pelicula2 {
//     nombre: string;
//     protagonistas: string;
//     actores: string;

//     constructor(nombre: string, protagonistas: string, actores: string) {
//       this.nombre = nombre;
//       this.protagonistas = protagonistas;
//       this.actores = actores;
//     }

//     proyectarEnCine2() {
//       console.log(
//         `Pelicula ${this.nombre}, Actores ${this.protagonistas}, Protagonista ${this.actores} `
//       );
//     }
//   }

//   const pelicula2 = new Pelicula2(" Bold", "Daniel Heano", "Samuel Henao");

//   pelicula2.proyectarEnCine2();
