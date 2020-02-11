import { Component, OnInit } from '@angular/core';
import { CategoriaService } from "../services/categoria.service";
import { AuthService } from "../services/auth.service";

interface categoria{
  id:string,
  imagen:string,
  nombre:string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  public categorias:any=[];

  constructor(public categoriaService:CategoriaService,public authservice:AuthService) { }

  ngOnInit() {
    this.categoriaService.getallCategories().subscribe(categoria =>
      categoria.map(categoria=>{
        const data:categoria=categoria.payload.doc.data() as categoria;
        this.categorias.push(data);
      }));
  }



}
