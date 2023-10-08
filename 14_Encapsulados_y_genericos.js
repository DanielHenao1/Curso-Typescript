// class Sorteo<T> {
//     private ticket?: T;

//     constructor(private nombre: string) {}

//     // Ejemplo de setter
//     setTicket(num: T) {
//       this.ticket = num;
//     }

//     // Ejemplo de getter
//     getTicket() {
//       return this.ticket;
//     }

//     // Creamos un metodo
//     public sortear(): string {
//       return `Para ${this.nombre} el ticket es ${this.ticket}`;
//     }
//   }

//   // Creamos una instancia de Sorteo al generico T le asignamos un tipo number - utilizamos el setter para asignar un ticket
//   let sorteo = new Sorteo<number>("Daniel Henao");
//   sorteo.setTicket(7);
//   console.log(sorteo.sortear());

//   // Para obtener el valor del ticket almacenado en la instancia de la clase Sorteo hacemos lo siguiente:
//   const ticket = sorteo.getTicket();
//   console.log(ticket);
