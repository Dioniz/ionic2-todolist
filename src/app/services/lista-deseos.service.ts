import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  private listas: Lista[] = [];

  constructor() {

    let lista1 = new Lista("Compras");
    let lista2 = new Lista("Juegos");
    let lista3 = new Lista("Cosas");

    this.listas.push(lista1, lista2, lista3);

    console.log("Servicio inicializado")
  }

}
