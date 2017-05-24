import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

import { AgregarComponent } from '../agregar/agregar.component';
import { NavController } from 'ionic-angular';
import { DetalleComponent } from "../detalle/detalle.component";

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {

  constructor( private listaDeseosService: ListaDeseosService,
               private navController: NavController) {  }

  ngOnInit() {}

  irAgregar() {
    this.navController.push( AgregarComponent );
  }

  verDetalle( lista, idx ) {
    this.navController.push( DetalleComponent, { lista, idx });
  }

}
