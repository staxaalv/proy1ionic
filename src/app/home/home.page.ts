import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { User } from "../shared/user.class";
import { AngularFireAuth } from "@angular/fire/auth";
import { NavController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private authService: AuthService, private router:Router,private afAuth:AngularFireAuth,
    public navController:NavController) {}

  onLogout(){
    console.log('HA CERRADO SESION');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl("/login");
  }


}
