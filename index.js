class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    // class Usuario { posible tambien 
    //     constructor(nombre, apellido) {
    //         this.nombre = nombre;
    //         this.apellido = apellido;
    //         this.libros = [];
    //         this.mascotas = [];
    //     }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor });
    }

    getBookNames() {
        return this.libros.map((libro) => libro.nombre);
    }
}

const usuario1 = new Usuario(
    "Juan Cruz",
    "Palermo",
);

console.log(usuario1.getFullName());

console.log({ cantidad: usuario1.countMascotas() });
usuario1.addMascota("perro");

console.log({ cantidad: usuario1.countMascotas() });

usuario1.addBook("doctor y campeon", "Bilardo");

const booksName = usuario1.getBookNames();
console.log(booksName);

