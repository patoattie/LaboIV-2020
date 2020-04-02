export class Mascota {
    nombre: string;
    tipo: string;
    imagen: string;

    constructor(nombre: string, imagen: string, tipo: string) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.tipo = tipo;
    }
}
