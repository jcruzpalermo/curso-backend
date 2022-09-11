class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.pets.length;
    }

    addBook(nombre, autor) {
        this.libros.push({ nombre, autor: autor })
    }

    getBookNames() {
        return this.libros.map((libro) => libro.nombre);
    }
}

const usuario1 = new Usuario(
    "Juan Cruz",
    "Palermo",
    [{ nombre: "Asi ganamos", autor: "Carlos Salvador Bilardo"}],
    ["canario", "conejo"]
);

console.log(usuario1.getFullName());

console.log({ cantidad: usuario1.countMascotas() });
usuario1.addMascota("perro");

console.log({ cantidad: usuario1.countMascotas() });

usuario1.addBook("doctor y campeon", "Bilardo");

const booksName = usuario1.getBookNames();
console.log(booksName);

