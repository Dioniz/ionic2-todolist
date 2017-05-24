import { Injectable } from '@angular/core';
import { Lista } from '../classes/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {
/*
    let lista1 = new Lista("Compras");
    let lista2 = new Lista("Juegos");
    let lista3 = new Lista("Cosas");

    this.listas.push(lista1, lista2, lista3);
*/
    this.cargarData();
    console.log("Servicio inicializado");
  }


  actualizarData() {
    localStorage.setItem( "data", JSON.stringify(this.listas) );
  }

  cargarData() {
    if ( localStorage.getItem("data") ) {
      this.listas = JSON.parse(localStorage.getItem("data"));
    }
  }

  agregarLista( lista:Lista ) {
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarLista( idx:number ) {
    this.listas.splice(idx, 1);
    this.actualizarData();
  }

}
