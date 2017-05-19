export class ListaItem {

  private nombre:string;
  private completado:boolean;

  getNombre(){
    return this.nombre;
  }

  setNombre( nombre:string ) {
    this.nombre = nombre;
  }
}
