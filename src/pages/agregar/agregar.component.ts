import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/classes/index';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  private nombreLista:string;
  private nombreItem:string = "";
  private items:ListaItem[] = [];


  constructor() {  }

  ngOnInit() {}

  agregar() {

    if ( this.nombreItem.length == 0 ) {
      return;
    }

    let item = new ListaItem();
    item.setNombre(this.nombreItem);

    this.items.push(item);
    this.nombreItem = "";

  }

}
