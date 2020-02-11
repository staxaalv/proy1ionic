import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {



  constructor(private db:AngularFirestore) {   
  }

  getallCategories(){
    return this.db.collection('categoria').snapshotChanges();
  }





}
