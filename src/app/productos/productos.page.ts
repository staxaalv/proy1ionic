  import { Component, OnInit } from '@angular/core';
import { EnviarObjetoService } from "../services/enviar-objeto.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  user:any;
  constructor(public enviarObjService:EnviarObjetoService) { }

  ngOnInit() {
    this.enviarObjService.$getObjectSource.subscribe(data => {
      console.log(data);
      this.user = data;
      console.log(this.user);
    }).unsubscribe();
  }

}
