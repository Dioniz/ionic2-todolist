import { ListaItem } from './lista-item';

export class Lista {

  private nombre:string;
  private terminada:boolean;
  private items:ListaItem[];

  constructor( nombre:string ) {
    this.nombre = nombre;
    this.terminada = false;
  }

}
