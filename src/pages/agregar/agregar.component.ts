import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';

import {ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  private nombreLista:string = "";
  private nombreItem:string = "";
  private items:ListaItem[] = [];


  constructor(
    public alertCtrl:AlertController,
    public navCtrl:NavController,
    public listaDeseos:ListaDeseosService
  ) { }

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

  borrarItem( idx:number ) {
    this.items.splice(idx, 1);
  }

  guardarLista() {
    if (this.nombreLista.length == 0) {
      this.showAlert();
      return;
    }

    let lista = new Lista( this.nombreLista );
    lista.items = this.items;

    //this.listaDeseos.listas.push( lista );
    this.listaDeseos.agregarLista( lista );
    this.navCtrl.pop();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Nombre de la lista',
      subTitle: 'El nombre de la lista es necesario',
      buttons: ['OK']
    });
    alert.present();
  }

}
