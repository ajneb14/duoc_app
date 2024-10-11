import { Component } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage {

  constructor(private router: Router) {}  
  startScan() {
  }
  navigateToHomeAlumno() {
    this.router.navigate(['/home-alumno']);  
  }
}
