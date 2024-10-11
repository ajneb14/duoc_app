import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage {

  constructor(private navCtrl: NavController, private toastController: ToastController) {}

  async navigateTo(page: string) {
    this.navCtrl.navigateForward(`/${page}`);
  }

  async logout() {
   
    console.log('Cerrar sesión');

    this.navCtrl.navigateRoot('/login');
  }
}
