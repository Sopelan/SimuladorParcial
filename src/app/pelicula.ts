export class Pelicula {
    public id:number
    public nombre:string
    public tipo:string
    public fechaEstreno:string
    public cantidadPublico:number
    public fotoPelicula:string
    constructor(id:number,nombre:string,tipo:string,fechaEstreno:string,cantidadPublico:number,fotoPelicula:string)
    {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaEstreno = fechaEstreno;
        this.cantidadPublico = cantidadPublico;
        this.fotoPelicula = fotoPelicula;
    }
    
}
