import { Component } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { NavController } from 'ionic-angular';
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html',
})
export class TerminadosComponent {

  constructor( private listaDeseosService: ListaDeseosService,
               private navController: NavController) {  }

  verDetalle( lista, idx ) {
    this.navController.push( DetalleComponent, { lista, idx });
  }
}
