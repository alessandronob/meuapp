import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  txtUser:string;
  txtPass:string;

  constructor(public navCtrl: NavController,public alerCtrl: AlertController) {

  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'ERRO!',
      message: 'Usuário ou senha incorretos!!!',
      buttons: ['Ok']
    });
    alert.present();
  }

  logarSistema(){
    if((this.txtUser == "admin") && (this.txtPass == "123")){
      this.navCtrl.push(HomePage);
    } else{
      this.doAlert();
    }
  }

}
