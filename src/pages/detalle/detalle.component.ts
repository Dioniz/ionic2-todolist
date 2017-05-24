
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from "../../app/classes/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

@Component({
    selector: 'app-detalle',
    templateUrl: `detalle.component.html`,
})
export class DetalleComponent {

    idx: number;
    lista: Lista;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public alertCtrl:AlertController,
        public listaDeseos: ListaDeseosService
    ) {
        console.log(navParams);
        this.idx = this.navParams.get("idx");
        this.lista = this.navParams.get("lista");
    }

    actualizar(item: ListaItem) {
        item.completado = !item.completado;

        let todosMarcados = true;
        for( let item of this.lista.items ) {
            if (!item.completado) {
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;

        this.listaDeseos.actualizarData();
    }

    borrarItem() {
        this.showConfirm();
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: this.lista.nombre,
            message: '¿Está seguro que desea eliminar la lista?',
            buttons: [ 'Cancelar',
                {
                    text: 'Eliminar',
                    handler: () => {
                        this.listaDeseos.eliminarLista(this.idx);
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }

}